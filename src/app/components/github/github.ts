import { Component, inject, OnInit } from '@angular/core';
import { GithubService } from '../../services/github';

@Component({
  selector: 'app-github',
  standalone: true,
  imports: [],
  templateUrl: './github.html',
  styleUrl: './github.scss'
})
export class GithubComponent implements OnInit {
  private githubService = inject(GithubService);

  profile: any = null;
  repos: any[] = [];
  loading = true;
  error = false;

  ngOnInit() {
    this.githubService.getProfile().subscribe({
      next: (data) => {
        this.profile = data;
      },
      error: () => {
        this.error = true;
        this.loading = false;
      }
    });

    this.githubService.getRepos().subscribe({
      next: (data) => {
        this.repos = data;
        this.loading = false;
      },
      error: () => {
        this.error = true;
        this.loading = false;
      }
    });
  }
}