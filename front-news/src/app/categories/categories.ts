import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

interface Category {
  id: string;
  name: string;
  description: string;
  icon: string;
  articleCount: number;
  latestUpdate: Date;
  trending: boolean;
  color: string;
}

@Component({
  selector: 'app-categories',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './categories.html',
  styleUrl: './categories.scss'
})
export class Categories implements OnInit {
  categories: Category[] = [];
  selectedCategory: Category | null = null;
  searchTerm: string = '';

  ngOnInit(): void {
    this.loadCategories();
  }

  loadCategories(): void {
    this.categories = [
      {
        id: 'llm',
        name: 'Large Language Models',
        description: 'GPT, Claude, Gemini, and other transformer-based models',
        icon: '💬',
        articleCount: 234,
        latestUpdate: new Date(),
        trending: true,
        color: '#667eea'
      },
      {
        id: 'cv',
        name: 'Computer Vision',
        description: 'Image recognition, object detection, and visual AI',
        icon: '👁️',
        articleCount: 156,
        latestUpdate: new Date(),
        trending: false,
        color: '#f093fb'
      },
      {
        id: 'ml',
        name: 'Machine Learning',
        description: 'Classical ML algorithms, frameworks, and techniques',
        icon: '🧠',
        articleCount: 189,
        latestUpdate: new Date(),
        trending: false,
        color: '#4facfe'
      },
      {
        id: 'robotics',
        name: 'Robotics & Automation',
        description: 'AI-powered robotics, automation, and embodied AI',
        icon: '🤖',
        articleCount: 98,
        latestUpdate: new Date(),
        trending: true,
        color: '#43e97b'
      },
      {
        id: 'ethics',
        name: 'AI Ethics & Policy',
        description: 'Regulation, safety, bias, and responsible AI development',
        icon: '⚖️',
        articleCount: 145,
        latestUpdate: new Date(),
        trending: true,
        color: '#fa709a'
      },
      {
        id: 'healthcare',
        name: 'Healthcare AI',
        description: 'Medical diagnosis, drug discovery, and health tech',
        icon: '🏥',
        articleCount: 112,
        latestUpdate: new Date(),
        trending: false,
        color: '#30cfd0'
      },
      {
        id: 'opensource',
        name: 'Open Source AI',
        description: 'Open models, datasets, and community projects',
        icon: '🔓',
        articleCount: 167,
        latestUpdate: new Date(),
        trending: true,
        color: '#feca57'
      },
      {
        id: 'research',
        name: 'Research & Papers',
        description: 'Latest academic research and breakthrough papers',
        icon: '📚',
        articleCount: 203,
        latestUpdate: new Date(),
        trending: false,
        color: '#ff9ff3'
      },
      {
        id: 'industry',
        name: 'Industry Applications',
        description: 'AI in business, finance, retail, and other sectors',
        icon: '🏢',
        articleCount: 178,
        latestUpdate: new Date(),
        trending: false,
        color: '#48dbfb'
      },
      {
        id: 'edge',
        name: 'Edge AI',
        description: 'On-device AI, mobile ML, and embedded systems',
        icon: '📱',
        articleCount: 89,
        latestUpdate: new Date(),
        trending: false,
        color: '#ff6b6b'
      }
    ];
  }

  selectCategory(category: Category): void {
    this.selectedCategory = category;
  }

  getFilteredCategories(): Category[] {
    if (!this.searchTerm) {
      return this.categories;
    }
    return this.categories.filter(cat => 
      cat.name.toLowerCase().includes(this.searchTerm.toLowerCase()) ||
      cat.description.toLowerCase().includes(this.searchTerm.toLowerCase())
    );
  }
}
