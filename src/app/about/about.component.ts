import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-about',
  imports: [CommonModule],
  standalone: true,
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent {
  profile = {
    name: 'Edwin Ortega',
    title: 'Front End Developer',
    summary: 'Front End Developer with 4+ years of experience building scalable web applications in fintech.' + 
            ' JavaScript, HTML/CSS, and Angular, with a focus on ADA compliance, clean code, and cross team collaboration.',
    specialties: [
      'Angular Application Development',
      'Responsive Web Design',
      'Performance Optimization',
      'Cross-Browser Compatibility',
      'Accessibility (ADA Compliance)',
    ],
    yearsOfExperience: 4,
  //  projectsCompleted: 30,
  //  happyClients: 25
  };

  // Optional: Animation state
  showFullBio = false;

  toggleBio() {
    this.showFullBio = !this.showFullBio;
  }
}