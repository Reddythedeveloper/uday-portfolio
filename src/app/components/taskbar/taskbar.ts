import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-taskbar',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './taskbar.html',
  styleUrls: ['./taskbar.scss']
})
export class TaskbarComponent {
  
  navItems = [
    { label: 'Home', link: '#home', icon: 'home' },
    { label: 'Experience', link: '#experience', icon: 'briefcase' },
    { label: 'Projects', link: '#projects', icon: 'code' },
    { label: 'Skills', link: '#skills', icon: 'cpu' },
    { label: 'Education', link: '#education', icon: 'book' }
  ];

  
  socials = [
    { 
      label: 'GitHub', 
      link: 'https://github.com/Reddythedeveloper', 
      icon: 'github' 
    },
    { 
      label: 'LinkedIn', 
      link: 'https://www.linkedin.com/in/udayreddy1642', 
      icon: 'linkedin' 
    },
    {
      label: 'Email',
      link: 'mailto:udayreddy1642@gmail.com',
      icon: 'mail'
    }
  ];

  scrollTo(id: string) {
    const element = document.querySelector(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  }
}