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
      role: 'Software Engineer',
      duration: 'Jan 2024 – July 2024',
      location: 'Bengaluru, India (Hybrid)',
      logo: 'assets/images/experience/publicis.jpg',
      description: [
        'Automated post-trade reconciliation pipelines, ensuring MiFID II compliance for $2T+ in transactions.',
        'Built scalable Python/Azure ETL framework, saving ~500 manual hours annually.',
        'Developed real-time Grafana/ADX dashboards, cutting Mean Time to Detection (MTTD) by 50%.',
        'Led incident response to prevent 2 critical production database outages.'
      ],
      skills: ['Python', 'Azure', 'RabbitMQ', 'Grafana', 'SQL']
    },
    {
      company: 'ArkaShine Innovations',
      role: 'Software Developer',
      duration: 'Apr 2023 – Oct 2023',
      location: 'Bengaluru, India (Hybrid)',
      logo: 'assets/images/experience/arkashine.png',
      description: [
        'Deployed PyTorch precision irrigation models, reducing water consumption by 25%.',
        'Optimized edge inference pipeline, achieving 3x throughput and 50% lower latency.',
        'Delivered ~$12,000 annual savings for farms through data-driven automation.'
      ],
      skills: ['PyTorch', 'IoT', 'Python', 'Data Science']
    }
  ];
}