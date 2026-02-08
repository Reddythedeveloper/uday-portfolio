import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-experience',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './experience.html',
  styleUrls: ['./experience.scss']
})
export class ExperienceComponent {
  experiences = [
    {
      company: 'Publicis Sapient',
      role: 'Software Engineer Intern',
      duration: 'Jan 2024 – July 2024',
      location: 'Bengaluru, India (Hybrid)',
      logo: 'assets/images/experience/publicis.jpg',
      description: [
        'Collaborated with DTCC on post-trade systems processing $2T+ in daily transactions, ensuring MiFID II compliance.',
        'Engineered Python + Azure Functions automation and integrated RabbitMQ to orchestrate trade reconciliation, reducing manual effort by 40%.',
        'Built Grafana dashboards backed by Azure Data Explorer and Cosmos DB for real-time health monitoring, cutting detection time by 50%.',
        'Led incident response for Oracle DB and SQL Server, preventing 2 production incidents.'
      ],
      skills: ['Python', 'Azure', 'RabbitMQ', 'Grafana', 'SQL']
    },
    {
      company: 'ArkaShine Innovations',
      role: 'Software Developer Intern',
      duration: 'Sept 2023 – Oct 2023',
      location: 'Bengaluru, India (Hybrid)',
      logo: 'assets/images/experience/arkashine.png',
      description: [
        'Designed and deployed PyTorch models for precision irrigation using IoT sensor + weather data, increasing scheduling accuracy by 30%.',
        'Optimized inference pipeline, achieving 3x throughput and reducing latency by 50%.',
        'Contributed to pilot deployments delivering ~$12,000 annual savings for medium-sized farms.'
      ],
      skills: ['PyTorch', 'IoT', 'Python', 'Data Science']
    }
  ];
}