import { Component } from '@angular/core';

@Component({
  selector: 'app-hero',
  imports: [],
  templateUrl: './hero.html',
  styleUrl: './hero.scss',
})
export class Hero {
  email = 'richardburmandev@gmail.com';
  githubUrl = 'https://github.com/RichBurman';
  linkedinUrl = 'https://linkedin.com/in/richard-burman123';
  isOpenToWork = true;
  currentDate = new Date().toLocaleDateString('en-GB', { month: 'long', year: 'numeric' });


  stats = [
    { value: '2+', label: 'Years of commercial experience', detail: 'Production Angular apps in a legal tech environment' },
    { value: 'Angular', label: 'Certified Developer', detail: 'Verified by Certificate.dev + 2 Azure certs' },
    { value: 'Full-Stack', label: 'Angular · TypeScript', detail: 'Python & Django on the backend' },
  ];
}
