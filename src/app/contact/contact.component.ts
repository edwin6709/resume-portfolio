import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-contact',
  imports: [ReactiveFormsModule, CommonModule],
  standalone: true,
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent {
  contactForm: FormGroup;
  submitted = false;
  copiedItemId: number | null = null;

  contactMethods = [
    { 
      id: 1,
      icon: 'email', 
      label: 'Email', 
      value: 'edwinortega0610@gmail.com', 
      type: 'email' 
    },
    { 
      id: 2,
      icon: 'location_on', 
      label: 'Location', 
      value: 'Corona, CA', 
      type: 'text' 
    },
    { 
      id: 3,
      icon: 'link', 
      label: 'LinkedIn', 
      value: 'https://www.linkedin.com/in/edwinortega1991', 
      type: 'url' 
    }
  ];

  constructor(private fb: FormBuilder) {
    this.contactForm = this.fb.group({
      name: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      message: ['', [Validators.required, Validators.minLength(10)]]
    });
  }

  get formControls() {
    return this.contactForm.controls;
  }

  onSubmit() {
    this.submitted = true;
    if (this.contactForm.valid) {
      // In a real app, you would send the form data to your backend
      console.log('Form submitted:', this.contactForm.value);
      alert('Message sent successfully!');
      this.contactForm.reset();
      this.submitted = false;
    }
  }

  copyToClipboard(text: string, id: number) {
    navigator.clipboard.writeText(text).then(() => {
      this.copiedItemId = id;
      setTimeout(() => {
        if (this.copiedItemId === id) {
          this.copiedItemId = null;
        }
      }, 2000);
    });
  }

  getContactIcon(method: string): string {
    const iconMap: {[key: string]: string} = {
      email: '✉️',
      phone: '📱',
      location_on: '📍',
      link: '🔗',
      code: '💻'
    };
    return iconMap[method] || '📋';
  }
  getEmailErrorMessage(): string {
  const emailErrors = this.formControls['email'].errors;
  if (!emailErrors) return '';
  
  if (emailErrors['required']) {
    return 'Email is required';
  } else if (emailErrors['email']) {
    return 'Please enter a valid email';
  }
  return '';
  }
}
