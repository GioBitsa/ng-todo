import { Component } from '@angular/core';
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

  constructor(public themeService: ThemeService) {
    this.themeService.darkTheme$.subscribe((value) => {
      this.darkTheme = value;
    });
  }

  handleThemeChange = () => {
    this.themeService.toggleTheme();
  };
}
