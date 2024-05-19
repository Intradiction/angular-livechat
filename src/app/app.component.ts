import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NbEvaIconsModule } from '@nebular/eva-icons';
import { NbCardModule, NbLayoutModule, NbThemeModule } from '@nebular/theme';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, NbThemeModule, NbCardModule, NbLayoutModule, NbEvaIconsModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'angular-livechat';
}
