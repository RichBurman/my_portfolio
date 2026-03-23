import { Component, signal } from '@angular/core';
import { Sidebar } from './components/sidebar/sidebar';
import { Hero } from './components/hero/hero';
import { About } from './components/about/about';
import { Contact } from './components/contact/contact';

@Component({
  selector: 'app-root',
  imports: [Sidebar, Hero, About, Contact],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App {
  protected readonly title = signal('my-portfolio');
}
