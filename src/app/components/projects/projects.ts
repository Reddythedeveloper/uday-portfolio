import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-projects',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './projects.html',
  styleUrls: ['./projects.scss']
})
export class ProjectsComponent {
  
  // 1. Featured Research (The Publication)
  publication = {
    title: 'Machine Learning-Powered Car Recommendation System',
    subtitle: 'Published in Springer Nature (SmartCom 2024)',
    description: 'An advanced, user-friendly car recommendation engine allowing consumers to express needs in natural language. Uses a hybrid approach (Content-Based + Collaborative Filtering + Random Forest) to outperform traditional algorithms in accuracy.',
    tags: ['Machine Learning', 'Python', 'Random Forest', 'NLP', 'Research'],
    image: 'assets/images/projects/car-research.png',
    link: 'https://drive.google.com/file/d/1nXLPG0DTb7Gb9Jd7RVsBNI4JOjKO1w5b/view?usp=sharing&usp=embed_facebook',
    type: 'Publication'
  };

  // 2. Development Projects & Dashboards
  projects = [
    {
      title: 'Car-Vision-Blackwell',
      description: 'Computer Vision system using YOLO and Ultralytics for real-time object detection.',
      tags: ['OpenCV', 'YOLO', 'Ultralytics', 'Python'],
      image: 'assets/images/projects/car-vision.png',
      link: 'https://github.com/Reddythedeveloper/Car-Vision-Blackwell',
      category: 'AI/ML'
    },
    {
      title: 'Finance-Analyst',
      description: 'AI-driven financial analysis tool utilizing LLaMA and DuckDB for processing large datasets.',
      tags: ['DuckDB', 'LLaMA', 'LangChain', 'Parquet'],
      image: 'assets/images/projects/finance.png',
      link: 'https://github.com/Reddythedeveloper/Finance-Analyst',
      category: 'GenAI'
    },
    {
      title: 'Full-Stack Analytics Dashboard',
      description: 'Comprehensive dashboard with Angular frontend and Node.js backend, visualizing data via D3.js.',
      tags: ['Angular', 'Node.js', 'D3.js', 'MySQL', 'DigitalOcean'],
      image: 'assets/images/projects/dashboard.jpg',
      link: 'https://github.com/Reddythedeveloper/u29-final-project',
      category: 'Full Stack'
    },
    {
      title: 'Nest-Sense-AI',
      description: 'Predictive modeling system using XGBoost and RAG for intelligent data sensing.',
      tags: ['XGBoost', 'RAG', 'Pandas', 'Scikit-Learn'],
      image: 'assets/images/projects/nest-sense.jpg',
      link: 'https://github.com/Reddythedeveloper/Nest-Sense-AI',
      category: 'AI/ML'
    },
    {
      title: 'Global Disaster Impact Analysis',
      description: 'Interactive Tableau dashboard visualizing global disaster trends and economic impact.',
      tags: ['Tableau', 'Data Visualization', 'Analytics'],
      image: 'assets/images/projects/tableau.png',
      link: 'https://public.tableau.com/app/profile/udaykiranreddy.kummathi/viz/shared/S8TJ5Y37S',
      category: 'Visualization'
    },
    {
      title: 'Pneumonia Detection ResNet18',
      description: 'Medical imaging classifier using PyTorch and ResNet18 to detect pneumonia from X-rays.',
      tags: ['PyTorch', 'ResNet18', 'Torchvision', 'NumPy'],
      image: 'assets/images/projects/pneumonia.png',
      link: 'https://github.com/Reddythedeveloper/pneumonia-detection-resnet18',
      category: 'Healthcare AI'
    },
    {
      title: 'Smart-Grid-GNN',
      description: 'Graph Neural Network application for optimizing smart grid network topologies.',
      tags: ['PyTorch', 'GNN', 'NetworkX', 'Matplotlib'],
      image: 'assets/images/projects/smart-grid.jpeg',
      link: 'https://github.com/Reddythedeveloper/Smart-Grid-GNN',
      category: 'Deep Learning'
    }
  ];
}