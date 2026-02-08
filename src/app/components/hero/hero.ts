import { Component, ElementRef, AfterViewInit, ViewChild, OnDestroy, HostListener, PLATFORM_ID, Inject } from '@angular/core';
import { CommonModule, isPlatformBrowser } from '@angular/common';
import * as THREE from 'three';

@Component({
  selector: 'app-hero',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './hero.html',
  styleUrls: ['./hero.scss']
})
export class HeroComponent implements AfterViewInit, OnDestroy {
  @ViewChild('rendererContainer') rendererContainer!: ElementRef;

  private scene!: THREE.Scene;
  private camera!: THREE.PerspectiveCamera;
  private renderer!: THREE.WebGLRenderer;
  private particles!: THREE.Group;
  private animationId: number = 0;
  private isBrowser: boolean;

  // Mouse interaction
  private mouseX = 0;
  private mouseY = 0;

  constructor(@Inject(PLATFORM_ID) private platformId: Object) {
    this.isBrowser = isPlatformBrowser(this.platformId);
  }

  ngAfterViewInit(): void {
    if (this.isBrowser) {
      this.initThree();
      this.animate();
    }
  }

  ngOnDestroy(): void {
    if (this.isBrowser) {
      cancelAnimationFrame(this.animationId);
      this.renderer.dispose();
    }
  }

  @HostListener('document:mousemove', ['$event'])
  onMouseMove(event: MouseEvent) {
    if (this.isBrowser) {
      this.mouseX = (event.clientX - window.innerWidth / 2) * 0.05;
      this.mouseY = (event.clientY - window.innerHeight / 2) * 0.05;
    }
  }

  @HostListener('window:resize')
  onWindowResize() {
    if (this.isBrowser && this.camera && this.renderer) {
      this.camera.aspect = window.innerWidth / window.innerHeight;
      this.camera.updateProjectionMatrix();
      this.renderer.setSize(window.innerWidth, window.innerHeight);
    }
  }

  private initThree() {
    // 1. Scene Setup
    this.scene = new THREE.Scene();
    this.scene.background = new THREE.Color(0x050505); // Match body bg
    // Add subtle fog for depth
    this.scene.fog = new THREE.FogExp2(0x050505, 0.002);

    // 2. Camera
    this.camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
    this.camera.position.z = 50; // Move camera back

    // 3. Renderer
    this.renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
    this.renderer.setSize(window.innerWidth, window.innerHeight);
    this.renderer.setPixelRatio(window.devicePixelRatio);
    this.rendererContainer.nativeElement.appendChild(this.renderer.domElement);

    // 4. Create Particles (The "Neural Network" nodes)
    this.particles = new THREE.Group();
    const geometry = new THREE.IcosahedronGeometry(10, 1); // A geometric shape
    const material = new THREE.MeshBasicMaterial({ 
      color: 0x00d2ff, // Cyan color
      wireframe: true,
      transparent: true,
      opacity: 0.3 
    });

    // Create a cloud of random particles
    const particleGeometry = new THREE.BufferGeometry();
    const particleCount = 1000;
    const posArray = new Float32Array(particleCount * 3);

    for(let i = 0; i < particleCount * 3; i++) {
      // Random spread
      posArray[i] = (Math.random() - 0.5) * 400; 
    }

    particleGeometry.setAttribute('position', new THREE.BufferAttribute(posArray, 3));
    const particleMaterial = new THREE.PointsMaterial({
      size: 0.2,
      color: 0x00d2ff,
      transparent: true,
      opacity: 0.8,
    });

    const starMesh = new THREE.Points(particleGeometry, particleMaterial);
    this.particles.add(starMesh);
    
    // Add a central wireframe object
    const coreMesh = new THREE.Mesh(geometry, material);
    this.particles.add(coreMesh);

    this.scene.add(this.particles);
  }

  private animate() {
    this.animationId = requestAnimationFrame(() => this.animate());

    // Rotate the entire system slowly
    this.particles.rotation.y += 0.001;
    this.particles.rotation.x += 0.0005;

    // Mouse Interaction (Parallax)
    this.camera.position.x += (this.mouseX - this.camera.position.x) * 0.05;
    this.camera.position.y += (-this.mouseY - this.camera.position.y) * 0.05;
    this.camera.lookAt(this.scene.position);

    this.renderer.render(this.scene, this.camera);
  }

  scrollTo(id: string) {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  }
}