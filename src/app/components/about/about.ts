import { Component } from '@angular/core';

@Component({
  selector: 'app-about',
  imports: [],
  templateUrl: './about.html',
  styleUrl: './about.scss',
})
export class About {
  skills = [
  { category: 'Frontend',   items: ['Angular', 'TypeScript', 'JavaScript', 'HTML', 'CSS / SCSS', 'Bootstrap'] },
  { category: 'Backend',    items: ['Python', 'Django'] },
  { category: 'Tools',      items: ['Git', 'GitHub', 'REST APIs', 'Agile', 'CI/CD'] },
  { category: 'Cloud & AI', items: ['Microsoft Azure', 'Firebase'] },
];

certifications = [
  { name: 'Certified Junior Angular Developer', issuer: 'Certificate.dev' },
  { name: 'Azure Fundamentals (AZ-900)',         issuer: 'Microsoft' },
  { name: 'Azure AI Fundamentals (AI-900)',      issuer: 'Microsoft' },
];
}
