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
      date: '2026',
      liveUrl: 'https://tasks-demo-swart.vercel.app',
      codeUrl: 'https://github.com/edwin6709/tasks-demo'
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
      date: '2026',
      liveUrl: 'https://essay-improver-one.vercel.app/',
      codeUrl: 'https://github.com/edwin6709/essay-improver'
    },

    //Add when ready
 
    {
      title: 'Yelp Camp',
      description: 'Full stack web app that allows users to review a campground.',
      technologies: ['Angular', 'Mongo DB', 'Node', 'Express', 'Mapbox'],
      features: [
        'Store user credentials',
        'Full CRUD functionality using Mongo DB',
        'Location based services using Mapbox',
        'Upload and delete pictures',
        'Error handling'
      ],
      role: 'Solo Developer',
      date: '2026',
      liveUrl: 'https://yelp-camp-tau-gold.vercel.app/',
      codeUrl: 'https://github.com/edwin6709/YelpCamp'
    }
  
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