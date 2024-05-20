import { Routes } from '@angular/router';
import { ChatComponent } from './chat/chat.component';
import { MessageComponent } from './message/message.component';

export const routes: Routes = [
    { path: '', component: ChatComponent},
    { path: 'hi', component: MessageComponent}
];
