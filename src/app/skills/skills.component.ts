import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

interface SkillCategory {
  name: string;
  skills: Skill[];
  icon?: string;
}

interface Skill {
  name: string;
  level: number; // 1-5
  years?: number;
  lastUsed?: string; // 'current' or year
}

@Component({
  selector: 'app-skills',
  imports: [CommonModule],
  standalone: true,
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.css']
})
export class SkillsComponent {
  skillCategories: SkillCategory[] = [
    {
      name: 'Frontend Development',
      icon: '💻',
      skills: [
        { name: 'Angular', level: 4, years: 2, lastUsed: 'current' },
        { name: 'TypeScript', level: 4, years: 2, lastUsed: 'current' },
        { name: 'JavaScript', level: 4, years: 4, lastUsed: 'current' },
        { name: 'HTML/CSS', level: 5, years: 4, lastUsed: 'current' },
      ]
    },
    {
      name: 'Backend Development',
      icon: '⚙️',
      skills: [
        { name: 'Python', level: 3, years: 2, lastUsed: '2021' },
        { name: 'Java', level: 3, years: 1, lastUsed: '2021' }
      ]
    },
    {
      name: 'Database & ORM',
      icon: '🗄️',
      skills: [
        { name: 'MySQL', level: 2, years: 1, lastUsed: '2020' },
      ]
    },
    {
      name: 'DevOps & Cloud',
      icon: '☁️',
      skills: [
        { name: 'Git', level: 3, years: 2, lastUsed: 'current' }
      ]
    }
  ];

  getSkillLevelClass(level: number): string {
    return `level-${level}`;
  }

  getExperienceLevel(years?: number): string {
    if (!years) return '';
    if (years >= 4) return 'Expert';
    if (years >= 2) return 'Proficient';
    return 'Intermediate';
  }
}