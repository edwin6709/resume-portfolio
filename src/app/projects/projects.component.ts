import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

interface Project {
  title: string;
  description: string;
  technologies: string[];
  imageUrl?: string;
  liveUrl?: string;
  codeUrl?: string;
  features?: string[];
  role?: string;
  date?: string;
}

@Component({
  selector: 'app-projects',
  imports: [CommonModule],
  standalone: true,
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.css']
})
export class ProjectsComponent {
  projects: Project[] = [

    {
      title: 'Task Management App',
      description: 'Interactive task management app. Able to assign tasks, and mark as completed. Stores data using local memory.',
      technologies: ['Angular', 'CSS', 'HTML'],
      features: [
        'Select user to display tasks',
        'Add new tasks',
        'Mark tasks as completed'
      ],
      // role: 'Frontend Lead',
      date: '2025',
      liveUrl: 'https://tasks-demo-swart.vercel.app',
 //     codeUrl: 'https://github.com/yourusername/task-manager'
    },

    {
      title: 'Essay Improver',
      description: 'A responsive Angular web application that analyzes essays and provides writing improvement suggestions.',
      technologies: ['Angular', 'CSS', 'HTML'],
      features: [
        'Weak adverb identification (very, really, extremely, quite)',
        'Real-time text analysis',
        'Responsive design',
        'User-friendly interface'
      ],
      date: '2025',
      liveUrl: 'https://essay-improver-one.vercel.app/',
    },


   /*
    //Add when ready
 
    {
      title: 'Weather Dashboard',
      description: 'Interactive weather application with forecasts, maps, and historical data.',
      technologies: ['Angular', 'Weather API', 'Chart.js', 'Geolocation API'],
      features: [
        '5-day forecasts',
        'Interactive weather maps',
        'Location-based services',
        'Customizable dashboard'
      ],
      role: 'Solo Developer',
      date: '2021',
      liveUrl: 'https://weather-demo.example.com',
      codeUrl: 'https://github.com/yourusername/weather-app'
    }
  */
  ];

  activeProjectIndex: number | null = null;

  setActiveProject(index: number): void {
    this.activeProjectIndex = this.activeProjectIndex === index ? null : index;
  }

  getTechnologyClass(tech: string): string {
    const techClasses: {[key: string]: string} = {
      'Angular': 'angular',
      'CSS': 'stylesheet',
      'HTML': 'hypertext',
      'Firebase': 'firebase',
      'RxJS': 'rxjs',
      'Stripe API': 'stripe',
      'Weather API': 'weather-api',
      'Chart.js': 'chartjs',
      'Geolocation API': 'geo-api',
      'Angular Material': 'angular-material'
    };
    return techClasses[tech] || 'default';
  }
}