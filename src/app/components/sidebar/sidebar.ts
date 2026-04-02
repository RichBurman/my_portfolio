import { Component, inject } from '@angular/core';
import { Theme } from '../../services/theme';

@Component({
  selector: 'app-sidebar',
  imports: [],
  templateUrl: './sidebar.html',
  styleUrl: './sidebar.scss',
})
export class Sidebar {

  themeService = inject(Theme);

  isMenuOpen = false;

  name = 'Richard Burman';
  role = 'Software Engineer';

  activeLink = '#home';



  navLinks = [
    { label: 'Home', icon: 'home', href: '#home' },
    { label: 'About', icon: 'user', href: '#about' },
    { label: 'Experience', icon: 'briefcase', href: '#experience' },
    { label: 'GitHub', icon: 'github', href: '#github' },
    { label: 'Projects', icon: 'folder', href: '#projects' },
    { label: 'Contact', icon: 'mail', href: '#contact' },
  ];

  socialLinks = [
    { label: 'GitHub', href: 'https://github.com/RichBurman' },
    { label: 'LinkedIn', href: 'https://linkedin.com/in/richard-burman123' },
  ];

  setActive(href: string) {
    this.activeLink = href;
    this.closeMenu();
  }

  toggleMenu() {
    this.isMenuOpen = !this.isMenuOpen;
  }

  closeMenu() {
    this.isMenuOpen = false;
  }

  toggleTheme() {
    this.themeService.toggleTheme();
  }
}
