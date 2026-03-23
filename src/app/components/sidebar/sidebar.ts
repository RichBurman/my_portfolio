import { Component } from '@angular/core';

@Component({
  selector: 'app-sidebar',
  imports: [],
  templateUrl: './sidebar.html',
  styleUrl: './sidebar.scss',
})
export class Sidebar {

  isMenuOpen = false;

  name = 'Richard Burman';
  role = 'Software Engineer';

  navLinks = [
    { label: 'Home', icon: 'home', href: '#home', active: true},
    { label: 'About', icon: 'user', href: '#about', active: false},
    { label: 'Projects', icon: 'folder', href: '#projects', active: false},
    { label: 'Contact', icon: 'mail', href: '#contact', active: false},
  ];

  socialLinks = [
  { label: 'GitHub',   href: 'https://github.com/RichBurman' },
  { label: 'LinkedIn', href: 'https://linkedin.com/in/richard-burman123' },
];

toggleMenu() {
  this.isMenuOpen = !this.isMenuOpen;
}
}
