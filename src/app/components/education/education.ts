import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-education',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './education.html',
  styleUrls: ['./education.scss']
})
export class EducationComponent {
  education = [
    {
      degree: 'M.S. in Computer Science (Data Science)',
      school: 'University of North Carolina at Charlotte',
      year: 'Jan 2025 - May 2026',
      gpa: '3.80 / 4.0',
      logo: 'assets/images/education/uncc.png',
      desc: 'Specialization in Data Science and Machine Learning.'
    },
    {
      degree: 'B.Tech in Computer Science',
      school: 'M. S. Ramaiah University of Applied Sciences',
      year: 'Aug 2020 – May 2024',
      gpa: '8.91 / 10.0',
      logo: 'assets/images/education/msruas.png',
      desc: 'Foundation in Computer Science and Engineering.'
    }
  ];
}