import { Component, signal } from '@angular/core';
import { Sidebar } from './components/sidebar/sidebar';
import { Hero } from './components/hero/hero';
import { About } from './components/about/about';
import { Contact } from './components/contact/contact';
import { Projects } from './components/projects/projects';
import { Experience } from './components/experience/experience';

@Component({
  selector: 'app-root',
  imports: [Sidebar, Hero, About, Contact, Projects, Experience],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App {
  protected readonly title = signal('my-portfolio');
}
