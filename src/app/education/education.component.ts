import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

interface EducationItem {
  institution: string;
  degree: string;
  fieldOfStudy: string;
  period: string;
  location: string;
  description?: string;
  gpa?: string;
  honors?: string[];
  logo?: string;
}

@Component({
  selector: 'app-education',
  imports: [CommonModule],
  standalone: true,
  templateUrl: './education.component.html',
  styleUrls: ['./education.component.css']
})
export class EducationComponent {
  educationHistory: EducationItem[] = [
    {
      institution: 'California State Universisty San Bernardino',
      degree: 'Bachelor of Science',
      fieldOfStudy: 'Computer Science',
      period: '2016 - 2020',
      location: 'San Bernardino, CA',
      gpa: '3.9/4.0',
      honors: ['Project Delivery Manager'],
      description: 'Specialized in web development and software delivery. Nominated as project delivery manager for software development course.'
    },

    {
      institution: 'Norco College',
      degree: 'Associate of Science',
      fieldOfStudy: 'Computer Science',
      period: '2014 - 2016',
      location: 'Norco, CA',
      gpa: '3.9/4.0',
      description: 'Learned computer science basics and theory.'
    }
  ];
/*
  certifications = [
    {
      title: 'AWS Certified Developer',
      issuer: 'Amazon Web Services',
      date: '2021',
      credentialId: 'AWS-123456'
    },
    {
      title: 'Angular Certified Developer',
      issuer: 'Google',
      date: '2020',
      credentialId: 'GCP-789012'
    }
  ];
*/
  expandedItem: number | null = null;

  toggleExpand(index: number): void {
    this.expandedItem = this.expandedItem === index ? null : index;
  }
}