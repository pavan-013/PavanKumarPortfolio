import { Component, OnInit, Inject } from '@angular/core';
import { RouterLink} from '@angular/router';
import { PLATFORM_ID } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';
@Component({
  selector: 'app-nav',
  imports: [RouterLink],
  templateUrl: './nav.component.html',
  styleUrl: './nav.component.css'
})
export class NavComponent implements OnInit {
   constructor(@Inject(PLATFORM_ID) private platformId: Object) {}

  ngOnInit(): void {
    if (isPlatformBrowser(this.platformId)) {
      // ✅ Default dark theme (browser only)
      document.body.classList.add('dark-theme');
      document.body.classList.remove('light-theme');
    }
  }
  
  toggleTheme(event: any) {
    if (!isPlatformBrowser(this.platformId)) return;

    const isDarkTheme = event.target.checked;
    if (isDarkTheme) {
      document.body.classList.add('dark-theme');
      document.body.classList.remove('light-theme');
    } else {
      document.body.classList.add('light-theme');
      document.body.classList.remove('dark-theme');
    }
  }
}
