import { isPlatformBrowser } from '@angular/common';
import { Component, Inject, PLATFORM_ID } from '@angular/core';
import emailjs from '@emailjs/browser';
import { environment } from '../../environments/environment';

@Component({
  selector: 'app-contact',
  imports: [],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.css'
})
export class ContactComponent {
   constructor(@Inject(PLATFORM_ID) private platformId: Object) {}
  sendEmail(event?: Event) {
    if (event) event.preventDefault();
    if (!isPlatformBrowser(this.platformId)) return;
    const form = document.getElementById('sform') as HTMLFormElement;

    emailjs.sendForm(
      environment.emailjs.serviceId,
      environment.emailjs.templateId,
      form,
      environment.emailjs.publicKey
    ).then(
      () => {
        alert('Message sent successfully!');
        form.reset();
      },
      (error) => {
        console.error('FAILED...', error);
        alert('Failed to send message. Try again.');
      }
    );
  }
}
