import { isPlatformBrowser } from '@angular/common';
import { Component, Inject, PLATFORM_ID, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-about',
  imports: [],
  templateUrl: './about.component.html',
  styleUrl: './about.component.css',
  encapsulation: ViewEncapsulation.None
})
export class AboutComponent {

  constructor(@Inject(PLATFORM_ID) private platformId: Object) {}

  openGithub() {
    if (isPlatformBrowser(this.platformId)) {
      window.open('https://github.com/pavan-013', '_blank');
    }
  }

  openLinkedIn() {
    if (isPlatformBrowser(this.platformId)) {
      window.open('https://www.linkedin.com/in/pavankumar-chikoti-33b066264', '_blank');
    }
  }
}
