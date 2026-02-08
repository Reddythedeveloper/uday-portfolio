import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';


import { HeroComponent } from './components/hero/hero'; 
import { ExperienceComponent } from './components/experience/experience';
import { ProjectsComponent } from './components/projects/projects';
import { SkillsComponent } from './components/skills/skills';
import { EducationComponent } from './components/education/education';
import { TaskbarComponent } from './components/taskbar/taskbar';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    CommonModule, 
    //RouterOutlet,
    HeroComponent,
    ExperienceComponent,
    ProjectsComponent,
    SkillsComponent,
    EducationComponent,
    TaskbarComponent
  ],
  templateUrl: './app.html',
  styleUrls: ['./app.scss']
})
export class AppComponent {
  title = 'uday-portfolio';
}