import { Injectable, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class GithubService {
  private http = inject(HttpClient);
  private username = 'RichBurman';
  private baseUrl = 'https://api.github.com';

  getProfile() {
    return this.http.get<any>(`${this.baseUrl}/users/${this.username}`);
  }

  getRepos() {
    return this.http.get<any[]>(`${this.baseUrl}/users/${this.username}/repos?sort=updated&per_page=5`);
  }
}