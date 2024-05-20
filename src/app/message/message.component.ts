import { Component, Input } from '@angular/core';
import { NbCardModule } from '@nebular/theme';
import { Message } from '../messages';

@Component({
  selector: 'app-message',
  standalone: true,
  imports: [NbCardModule],
  templateUrl: './message.component.html',
  styleUrl: './message.component.css'
})
export class MessageComponent {
  @Input() message: Message | undefined; 
}
