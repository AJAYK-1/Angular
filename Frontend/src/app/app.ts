import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Variables } from './practice/variables/variables';
import { LandingPage } from './view/common/landing-page/landing-page';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, LandingPage],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('angular-app');
}
