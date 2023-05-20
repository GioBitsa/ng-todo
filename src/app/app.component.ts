import { Component, HostListener } from '@angular/core';
import { fade } from './animations';
import { ThemeService } from './services';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  animations: [fade],
})
export class AppComponent {
  darkTheme: boolean = false;
  windowWidth: number;
  isMobile: boolean = false;

  constructor(public themeService: ThemeService) {
    this.themeService.darkTheme$.subscribe((value) => {
      this.darkTheme = value;
    });

    this.windowWidth = window.innerWidth;
    this.updateComponentVisibility();
  }

  @HostListener('window:resize', ['$event'])
  onWindowResize(event: any) {
    this.windowWidth = event.target.innerWidth;
    this.updateComponentVisibility();
  }

  private updateComponentVisibility() {
    this.isMobile = this.windowWidth <= 600;
  }

  handleThemeChange = () => {
    this.themeService.toggleTheme();
  };
}
