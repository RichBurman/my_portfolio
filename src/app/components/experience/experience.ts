import { Component } from '@angular/core';

@Component({
  selector: 'app-experience',
  imports: [],
  templateUrl: './experience.html',
  styleUrl: './experience.scss',
})
export class Experience {
  experience = [
  {
    title: 'Junior Software Developer',
    company: 'Legal Tech Industry',
    period: 'April 2024 — March 2026',
    current: false,
    achievements: [
      'Developed and maintained Angular/TypeScript components within a production environment',
      'Built user-facing dashboards displaying real-time data using API integrations and polling logic',
      'Developed invoicing and payment interfaces enabling users to import, export and manage financial data',
      'Integrated frontend components with REST APIs to support dynamic data-driven features',
      'Participated in code reviews, sprint planning and agile development processes',
      'Achieved Microsoft Azure Fundamentals and Azure AI Fundamentals certifications',
    ]
  },
  {
    title: 'Physical Education Teacher & PGCE Mentor',
    company: 'St Edmunds Catholic School, Kent',
    period: '2018 — 2023',
    current: false,
    achievements: [
      'Managed high workloads and competing priorities under strict deadlines',
      'Mentored trainee teachers and supported their professional development',
      'Built collaborative relationships and adapted effectively in fast-paced environments',
    ]
  }
];

education = [
  { qualification: 'Diploma in Full Stack Software Development', institution: 'Code Institute', year: '2024' },
  { qualification: 'PGCE', institution: 'University of East London', year: '2018' },
  { qualification: 'BSc (Hons) Sports & Leisure Management', institution: 'University of Salford', year: '2006-2009' },
];
}
