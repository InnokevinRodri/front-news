import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';

interface TrendingTopic {
  id: number;
  title: string;
  category: string;
  trendScore: number;
  articleCount: number;
  icon: string;
}

@Component({
  selector: 'app-trending',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './trending.html',
  styleUrl: './trending.scss'
})
export class Trending implements OnInit {
  trendingTopics: TrendingTopic[] = [];
  selectedTimeRange: string = '24h';

  ngOnInit(): void {
    this.loadTrendingTopics();
  }

  loadTrendingTopics(): void {
    // Simulated data - would be replaced with API call
    this.trendingTopics = [
      {
        id: 1,
        title: 'GPT-5 Rumors and Speculation',
        category: 'Large Language Models',
        trendScore: 95,
        articleCount: 42,
        icon: '🤖'
      },
      {
        id: 2,
        title: 'AI Regulation Updates in EU',
        category: 'Policy & Ethics',
        trendScore: 88,
        articleCount: 28,
        icon: '⚖️'
      },
      {
        id: 3,
        title: 'Computer Vision Breakthrough',
        category: 'Computer Vision',
        trendScore: 82,
        articleCount: 35,
        icon: '👁️'
      },
      {
        id: 4,
        title: 'Open Source AI Models',
        category: 'Open Source',
        trendScore: 79,
        articleCount: 23,
        icon: '🔓'
      },
      {
        id: 5,
        title: 'AI in Healthcare Advances',
        category: 'Healthcare',
        trendScore: 75,
        articleCount: 19,
        icon: '🏥'
      }
    ];
  }

  changeTimeRange(range: string): void {
    this.selectedTimeRange = range;
    this.loadTrendingTopics(); // Reload with new time range
  }

  getTrendColor(score: number): string {
    if (score >= 90) return 'hot';
    if (score >= 70) return 'warm';
    return 'normal';
  }
}
