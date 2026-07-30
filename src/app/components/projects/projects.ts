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
    videoLink: 'https://drive.google.com/file/d/1nXLPG0DTb7Gb9Jd7RVsBNI4JOjKO1w5b/view?usp=sharing&usp=embed_facebook',
    link: 'https://link.springer.com/chapter/10.1007/978-981-97-1326-4_28',
    type: 'Publication'
  };

  // 2. Development Projects & Dashboards
  projects = [
    // --- NEW ADDITIONS ---
    {
      title: 'TaxAI Platform',
      description: 'Enterprise AI-assisted tax preparation system with a 5-role persona engine, split-screen OCR traceability, and automated urgency calculation.',
      tags: ['React 19', 'TypeScript', 'Vite', 'AI Traceability'],
      image: 'assets/images/projects/taxai_thumbnail.png',
      link: 'https://github.com/Reddythedeveloper',
      category: 'Enterprise SaaS'
    },
    {
      title: 'ForgeOps AI',
      description: 'MCP-Native AI Operations Platform automating investigation workflows for ML teams using LlamaIndex workflows and MLflow observability.',
      tags: ['FastAPI', 'MCP', 'LlamaIndex', 'Next.js'],
      image: 'assets/images/projects/forgeops_thumbnail.png',
      link: 'https://github.com/Reddythedeveloper',
      category: 'MLOps'
    },
    {
      title: 'ClaimPilot AI',
      description: 'Multi-agent healthcare platform autonomously adjudicating medical claims using a stateful LangGraph orchestration workflow and Llama 3.1.',
      tags: ['LangGraph', 'Llama 3', 'Qdrant', 'Next.js'],
      image: 'assets/images/projects/claimpilot_thumbnail.png',
      link: 'https://github.com/Reddythedeveloper',
      category: 'Healthcare AI'
    },
    {
      title: 'ContextMind',
      description: 'Stateful, ChatGPT-style research assistant using a modern Next.js frontend, FastAPI backend, and Gemini Embeddings for rapid semantic search.',
      tags: ['Next.js', 'FastAPI', 'Qdrant', 'PostgreSQL'],
      image: 'assets/images/projects/contextmind_thumbnail.png',
      link: 'https://github.com/Reddythedeveloper',
      category: 'GenAI Full-Stack'
    },
    {
      title: 'Hybrid RAG Search Engine',
      description: 'End-to-end RAG system combining hybrid BM25/Dense retrieval with real-time Kafka document ingestion processing 480+ docs in under 3 minutes.',
      tags: ['Kafka', 'ChromaDB', 'LangChain', 'FastAPI'],
      image: 'assets/images/projects/hybrid_rag_thumbnail.png',
      link: 'https://github.com/Reddythedeveloper',
      category: 'Data Engineering'
    },
    {
      title: 'MLOps Visual Question Answering',
      description: 'End-to-end MLOps pipeline for zero-shot VQA using OpenAI CLIP, featuring drift detection, A/B testing routers, and MLflow experiment tracking.',
      tags: ['OpenAI CLIP', 'Prefect', 'MLflow', 'Docker'],
      image: 'assets/images/projects/mlops_vqa_thumbnail.png',
      link: 'https://github.com/Reddythedeveloper',
      category: 'MLOps'
    },
    {
      title: 'Real-Time Weed Detection Edge AI',
      description: 'Deep learning system for real-time weed classification using YOLO and MobileNetV2, achieving 98.9% accuracy with ~15ms inference latency on edge.',
      tags: ['YOLOv8', 'MobileNetV2', 'Computer Vision'],
      image: 'assets/images/projects/weed_detection_thumbnail.png',
      link: 'https://github.com/Reddythedeveloper',
      category: 'Computer Vision'
    },
    // --- RETAINED PROJECTS ---
    {
      title: 'Global Disaster Impact Analysis',
      description: 'Interactive Tableau dashboard visualizing global disaster trends and economic impact.',
      tags: ['Tableau', 'Data Visualization', 'Analytics'],
      image: 'assets/images/projects/tableau.png',
      link: 'https://public.tableau.com/app/profile/udaykiranreddy.kummathi/viz/shared/S8TJ5Y37S',
      category: 'Visualization'
    }
  ];
}