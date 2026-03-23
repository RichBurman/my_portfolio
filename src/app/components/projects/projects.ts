import { Component } from '@angular/core';

@Component({
  selector: 'app-projects',
  imports: [],
  templateUrl: './projects.html',
  styleUrl: './projects.scss',
})
export class Projects {
  githubUrl = 'https://github.com/RichBurman';
  portfolioUrl = 'https://github.com/RichBurman/my-portfolio';

  projects = [
    {
      title: 'This Portfolio',
      description: 'Personal portfolio built with Angular 20 using modern control flow, standalone components and SCSS. Deployed and actively maintained.',
      tags: ['Angular', 'TypeScript', 'SCSS'],
      url: 'https://github.com/RichBurman/my_portfolio',
      status: 'live'
    },
    {
      title: 'Project Coming Soon',
      description: 'Currently working on my next project. Check back soon or follow my GitHub to get notified when it drops.',
      tags: [],
      url: '',
      status: 'pending'
    },
    {
      title: 'Project Coming Soon',
      description: 'More projects in the pipeline. In the meantime, browse my GitHub for earlier work including full-stack Django and JavaScript builds.',
      tags: [],
      url: '',
      status: 'pending'
    },
  ];
}
