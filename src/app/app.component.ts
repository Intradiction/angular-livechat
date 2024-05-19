import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NbCardModule, NbLayoutModule, NbThemeModule } from '@nebular/theme';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, NbThemeModule, NbCardModule, NbLayoutModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'angular-livechat';
}
