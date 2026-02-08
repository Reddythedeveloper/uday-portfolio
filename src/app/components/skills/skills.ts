import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-skills',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './skills.html',
  styleUrls: ['./skills.scss']
})
export class SkillsComponent {
  
  // Categorized Skills based on your screenshot
  skillCategories = [
    {
      name: 'Languages & Full Stack',
      skills: [
        { name: 'Python', icon: 'assets/images/skills/python.png' },
        { name: 'JavaScript', icon: 'assets/images/skills/javascript.png' },
        { name: 'SQL', icon: 'assets/images/skills/sql.png' },
        { name: 'Angular', icon: 'assets/images/skills/angular.jpg' },
        { name: 'Node.js', icon: 'assets/images/skills/nodejs.png' }
      ]
    },
    {
      name: 'AI, ML & Data Engineering',
      skills: [
        { name: 'PyTorch', icon: 'assets/images/skills/pytorch.png' },
        { name: 'TensorFlow', icon: 'assets/images/skills/tensorflow.png' },
        { name: 'Scikit-Learn', icon: 'assets/images/skills/scikitlearn.png' },
        { name: 'Pandas', icon: 'assets/images/skills/pandas.png' },
        { name: 'Databricks', icon: 'assets/images/skills/databricks.png' },
        { name: 'ETL Pipelines', icon: 'assets/images/skills/ETL.png' },
        { name: 'MLOps', icon: 'assets/images/skills/mlops.png' }
      ]
    },
    {
      name: 'Cloud, DevOps & Tools',
      skills: [
        { name: 'AWS', icon: 'assets/images/skills/aws.png' },
        { name: 'Azure', icon: 'assets/images/skills/azure.png' },
        { name: 'DigitalOcean', icon: 'assets/images/skills/digitalocean.png' },
        { name: 'Docker', icon: 'assets/images/skills/docker.png' },
        { name: 'Git', icon: 'assets/images/skills/git.png' },
        { name: 'Grafana', icon: 'assets/images/skills/grafana.png' },
        { name: 'Tableau', icon: 'assets/images/skills/tableau.png' }
      ]
    }
  ];
}