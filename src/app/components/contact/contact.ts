import { Component } from '@angular/core';

@Component({
  selector: 'app-contact',
  imports: [],
  templateUrl: './contact.html',
  styleUrl: './contact.scss',
})
export class Contact {
  email = 'rich226402@gmail.com';
subject = 'Frontend%20Developer%20Opportunity';

links = [
  { label: 'GitHub',   href: 'https://github.com/RichBurman' },
  { label: 'LinkedIn', href: 'https://linkedin.com/in/richard-burman123' },
];
}
