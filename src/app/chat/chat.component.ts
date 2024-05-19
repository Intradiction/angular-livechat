import { Component } from '@angular/core';
import { FormControl, ReactiveFormsModule } from '@angular/forms';
import { NbButtonModule, NbCardModule, NbFormFieldModule, NbIconModule, NbInputModule, NbLayoutModule, NbSidebarModule } from '@nebular/theme';

@Component({
  selector: 'app-chat',
  standalone: true,
  templateUrl: './chat.component.html',
  imports: [ReactiveFormsModule, NbLayoutModule, NbSidebarModule, NbCardModule, NbLayoutModule, NbInputModule, NbFormFieldModule, NbIconModule, NbButtonModule],
  styleUrl: './chat.component.css'
})
export class ChatComponent {
  msgText = new FormControl('');

  sendMsg() {
    console.log(this.msgText.value);
  }
}
