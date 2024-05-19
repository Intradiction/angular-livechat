import { Component } from '@angular/core';
import { NbCardModule, NbLayoutModule, NbSidebarModule } from '@nebular/theme';

@Component({
  selector: 'app-chat',
  standalone: true,
  template: `

    <nb-layout>
      <nb-layout-header fixed>Company Name</nb-layout-header>

      <nb-sidebar>Sidebar Content</nb-sidebar>
      
      <nb-layout-column>
        Page Content <button nbButton>Hello World</button>
      </nb-layout-column>
    </nb-layout>
  `,
  imports: [NbLayoutModule, NbSidebarModule, NbCardModule, NbLayoutModule],
  styleUrl: './chat.component.css'
})
export class ChatComponent {

}
