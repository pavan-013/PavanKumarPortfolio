import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SlickCarouselModule } from 'ngx-slick-carousel';

@Component({
  selector: 'app-project',
  imports: [CommonModule,SlickCarouselModule],
  templateUrl: './project.component.html',
  styleUrl: './project.component.css'
})
export class ProjectComponent {
  showModal = false;
  slides = [
    { img: 'images/R2.jpg' },
    { img: 'images/R3.jpg' },
    { img: 'images/R4.jpg' },
    { img: 'images/R6.jpg' },
    { img: 'images/R6.jpg' }
  ];

  slideConfig = {
    slidesToShow: 1,
    slidesToScroll: 1,
    dots: true,
    infinite: true,
    arrows: true,
    autoplay: false,         
    autoplaySpeed: 3000 
  };
  openModal() {
    this.showModal = true;
  }

  closeModal() {
    this.showModal = false;
  }
  autoplay=false;
  onMouseEnter(carousel: any) {
  if (!this.autoplay) {
    carousel.slickPlay();   // start autoplay
    this.autoplay = true;
  }
}

onMouseLeave(carousel: any) {
  carousel.slickPause();    // stop autoplay
  this.autoplay = false;
}
}
