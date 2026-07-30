<div align="center">
  <img src="src/assets/images/profile.png" alt="Logo" width="120" height="120" style="border-radius: 50%;">
  <h1 align="center">Uday K — Professional Portfolio</h1>

  <p align="center">
    <strong>AI Architect & Full-Stack Engineer</strong><br>
    A modern, high-performance digital portfolio built with Angular & TailwindCSS.
    <br />
    <a href="https://uday-portfolio.vercel.app"><strong>View Live Demo »</strong></a>
    <br />
  </p>
  
  <div>
    <img src="https://img.shields.io/badge/Angular-DD0031?style=for-the-badge&logo=angular&logoColor=white" alt="Angular" />
    <img src="https://img.shields.io/badge/Tailwind_CSS-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white" alt="Tailwind" />
    <img src="https://img.shields.io/badge/TypeScript-007ACC?style=for-the-badge&logo=typescript&logoColor=white" alt="TypeScript" />
    <img src="https://img.shields.io/badge/Vercel-000000?style=for-the-badge&logo=vercel&logoColor=white" alt="Vercel" />
  </div>
</div>

<br />

## 🚀 About The Project

This repository contains the source code for my professional portfolio. Designed with a focus on modern web aesthetics, performance, and scalability, this portfolio acts as an interactive resume showcasing my expertise in Artificial Intelligence, Machine Learning, and Full-Stack Engineering.

### 🌟 Key Features
- **Premium Glassmorphism UI**: Uses advanced CSS backdrop filters, frosted glass components, and GPU-accelerated mesh gradient animations for a stunning, Apple-like visual experience.
- **Dynamic Data Rendering**: Uses modular Angular components to strictly decouple layout from data (Skills, Projects, Experience).
- **Fully Responsive**: Architected using Tailwind CSS grids and flexbox strategies to provide a flawless experience across all device viewports.
- **AOS Scroll Animations**: Silky smooth reveal animations triggered on scroll via Intersection Observers (`aos`).

---

## 🏗️ Architecture & Implementation

### Tech Stack
- **Framework**: [Angular 19+](https://angular.dev/) (Standalone Components)
- **Styling**: [TailwindCSS v3](https://tailwindcss.com/) + Custom SCSS
- **Animations**: [AOS (Animate On Scroll)](https://michalsnik.github.io/aos/)
- **Deployment**: [Vercel](https://vercel.com/) (Serverless Edge CDN)

### Component Structure
The UI is strictly modularized into standalone Angular components:
- `HeroComponent`: Expansive left/right split layout with GPU-accelerated animated background orbs.
- `ExperienceComponent`: Interactive vertical timeline tracking professional roles and responsibilities.
- `ProjectsComponent`: Dynamic grid rendering custom-designed AI/ML project thumbnails.
- `SkillsComponent`: Categorized expertise grids (Frontend, Backend, AI/ML, Cloud).
- `EducationComponent`: Clean, academic timeline for degrees and GPA.
- `TaskbarComponent`: A floating, frosted-glass top navigation bar for global routing.

### Performance Optimizations
1. **Hardware Acceleration**: Background animations (`animate-blob`) are forced onto the GPU using `will-change: transform` to prevent main-thread blocking.
2. **Scroll Jank Elimination**: Avoided `background-attachment: fixed` in favor of a `position: fixed` `::before` pseudo-element to prevent Chromium layout thrashing during scroll.
3. **Asset Optimization**: High-resolution thumbnails are loaded asynchronously.

---

## 🛠️ Getting Started

To get a local copy up and running, follow these simple steps.

### Prerequisites
* Node.js (v18 or higher)
* npm
  ```sh
  npm install npm@latest -g
  ```
* Angular CLI
  ```sh
  npm install -g @angular/cli
  ```

### Installation

1. Clone the repo
   ```sh
   git clone https://github.com/Reddythedeveloper/uday-portfolio.git
   ```
2. Navigate to the project directory
   ```sh
   cd uday-portfolio
   ```
3. Install NPM packages
   ```sh
   npm install
   ```
4. Start the development server
   ```sh
   ng serve
   ```
5. Open your browser and navigate to `http://localhost:4200`

---

## 🌐 Deployment (Vercel)

This project is optimized for zero-config deployment on Vercel.

1. Push your code to a GitHub repository.
2. Go to [Vercel Dashboard](https://vercel.com/dashboard) and click **Add New Project**.
3. Import your GitHub repository (`Reddythedeveloper/uday-portfolio`).
4. Vercel will automatically detect the **Angular** framework preset.
5. Click **Deploy**. The site will automatically build and distribute globally.

---

## 📫 Contact

**Uday Kiran Reddy K**
- **GitHub**: [@Reddythedeveloper](https://github.com/Reddythedeveloper)
- **LinkedIn**: [udayreddy1642](https://www.linkedin.com/in/udayreddy1642)
- **Email**: [udayreddy1642@gmail.com](mailto:udayreddy1642@gmail.com)

<p align="center">
  <i>Built with passion and modern web technologies.</i>
</p>
