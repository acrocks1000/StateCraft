import { CommonModule } from '@angular/common';
import { Component, OnInit, OnDestroy } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { SharedService } from '../../shared/shared.service';

@Component({
  selector: 'app-products',
  imports: [CommonModule, MatCardModule, MatButtonModule, MatIconModule],
  templateUrl: './products.component.html',
  styleUrl: './products.component.scss',
})
export class ProductsComponent implements OnInit, OnDestroy {
  products: any[] = [];
  currentIndex = 0;
  isCarouselHovered = false;

  // Carousel for hero banners
  carouselCards = [
    {
      title: 'Up to 70% Off\nInterior Home Decor',
      subtitle: 'Quick parcel delivery, from $25',
      color: 'primary',
      image: 'images/banner1.jpg',
    },
    {
      title: 'Up to 70% Sale Off\nPendent Lamp',
      subtitle: 'Quick parcel delivery, from $25',
      color: 'accent',
      image: 'images/banner1.jpg',
    },
    {
      title: 'Modern Kitchen Essentials',
      subtitle: 'Fast shipping, best prices',
      color: 'primary',
      image: 'images/banner1.jpg',
    },
    {
      title: 'Exclusive Sofa Collection',
      subtitle: 'Luxury comfort, limited time',
      color: 'accent',
      image: 'images/banner1.jpg',
    },
    {
      title: 'Minimalist Tableware',
      subtitle: 'Elegant & affordable',
      color: 'primary',
      image: 'images/banner1.jpg',
    },
    {
      title: 'Designer Lighting',
      subtitle: 'Brighten your home',
      color: 'accent',
      image: 'images/banner1.jpg',
    },
    {
      title: 'Eco-Friendly Decor',
      subtitle: 'Sustainable style',
      color: 'primary',
      image: 'images/banner1.jpg',
    },
  ];
  highlightIndex = 3; // Center card
  autoplayInterval: any;

  constructor(private sharedService: SharedService) {}

  ngOnInit() {
    this.sharedService.getProducts().subscribe({
      next: (products) => (this.products = products),
      error: (error) => console.warn('Could not load products!!'),
    });
    this.startAutoplay();
  }

  ngOnDestroy(): void {
    clearInterval(this.autoplayInterval);
  }

  nextSlide() {
    this.currentIndex = (this.currentIndex + 1) % this.carouselCards.length;
  }

  prevSlide() {
    this.currentIndex = (this.currentIndex - 1 + this.carouselCards.length) % this.carouselCards.length;
  }

  startAutoplay(): void {
    this.autoplayInterval = setInterval(() => {
      if (!this.isCarouselHovered) {
        this.nextSlide();
      }
    }, 4000); // change slide every 4 seconds
  }

  onCarouselMouseEnter() {
    this.isCarouselHovered = true;
  }

  onCarouselMouseLeave() {
    this.isCarouselHovered = false;
  }
}
