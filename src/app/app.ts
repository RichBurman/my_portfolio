import { Component, signal } from '@angular/core';
import { Sidebar } from './components/sidebar/sidebar';
import { Hero } from './components/hero/hero';

@Component({
  selector: 'app-root',
  imports: [Sidebar, Hero],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App {
  protected readonly title = signal('my-portfolio');
}
