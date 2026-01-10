import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';


interface Job {
  title: string;
  company: string;
  companyUrl?: string;  // Optional company website
  period: string;
  location?: string;    // Optional location
  technologies: string[]; // Technologies used
  responsibilities: string[];
  achievements?: string[]; // Optional achievements
}

@Component({
  selector: 'app-experience',
  imports: [CommonModule],
  templateUrl: './experience.component.html',
  styleUrls: ['./experience.component.css']
})
export class ExperienceComponent implements OnInit {
  jobs: Job[] = [
    {
      title: 'Front End Developer',
      company: 'InvestCloud Inc',
      companyUrl: 'https://techinnovations.example.com',
      period: 'May 2021 - June 2025',
      location: 'Remote',
      technologies: ['Angular 14+', 'Jira', 'AWS'],
      responsibilities: [
        'Developed user facing fintech applications using HTML, CSS, and ensuring ADA compliance' + 
        ' and scalability.',
        'Led CRM integration for Rathbones (key client) contributing as a product specialist.',
        'Able to be independent, trustworthy, and meet deadlines while working remotely.',
        'Collaborated with multiple cross functional teams to deliver critical ' + 
        'features of more than 2 weeks ahead of deadline using Jira/Agile.',
        'Write/Maintain developer friendly code that can be understood for future developers.',
        'Used browser based development tools such as Chrome Dev tools, Firefox, and Safari to troubleshoot.',
        'Cross-browser test using real devices as well as Browser Stack.'
      ]
    },
    // Corona Motors Direct
    {
      title: 'Recon Manager',
      company: 'Corona Motors Direct',
      companyUrl: 'https://techinnovations.example.com',
      period: 'June 2020 - May 2021',
      location: 'Norco, CA',
      technologies: ['Angular 14+', 'Jira', 'AWS'],
      responsibilities: [
        'Track unit inventory.',
        'Ensure units are presentable for potential clients.',
        'Direct recon workers to correct dealerships depending on the work the unit requires.',
        'Communicate with dealerships to ensure units are ready for sale.',
        'Maintain a clean and organized work environment.',
        'Train new employees on company policies and procedures.'
      ]
    },

    // Eagle Glen
    {
      title: 'Banquet Lead',
      company: 'Eagle Glen Golf Club',
      companyUrl: 'https://eagleglengc.com/',
      period: 'April 2015 - March 2020',
      location: 'Corona, CA',
      technologies: ['Angular 14+', 'Jira', 'AWS'],
      responsibilities: [
        'Managed banquet events from setup to execution, ensuring client satisfaction.',
        'Coordinated with kitchen and service staff to deliver high-quality service.',
        'Trained and supervised banquet staff, ensuring adherence to company standards.',
        'Handled client inquiries and resolved issues promptly.',
        'Maintained inventory and ordered supplies as needed.',
        'Assisted in marketing efforts to promote banquet services.'
      ]
    },
  ];

  // Optional: Add animation state for enhanced interactivity
  expandedJobIndex: number | null = null;

  constructor() { }

  ngOnInit(): void {
    // You could fetch data from a service here if needed
  }
/*
  // Optional: Toggle job details for better mobile experience
  toggleJobDetails(index: number): void {
    this.expandedJobIndex = this.expandedJobIndex === index ? null : index;
  }

  // Optional: Track by function for better ngFor performance
  trackByJobId(index: number, job: Job): string {
    return `${job.company}-${job.title}-${index}`;
  } */
}