import React from 'react';
import emailjs from '@emailjs/browser';
import { useSonner } from 'sonner';
import { toast } from "sonner"


interface EmailFormProps {
  name?: string;
  subject?: string;
  email?: string;
  message?: string;
}


export const SendEmail = (
  form: React.RefObject<HTMLFormElement>,

) => {
  emailjs
    .sendForm('service_xts7s5w', 'template_fd8xs1j', form.current, {
      publicKey: '1v0LcZgDZWloLjLYZ',
    })
    .then(response => {
      if (response?.text === 'OK') {
        toast('Email sent successfully!', {
          icon: '✅',
          description: 'Your message has been sent. We will get back to you soon.',
        });
        return true
      }


    })
    .catch((err) => {
      toast('Failed to sent email!', {
        icon: '❌',
        description: 'There was an error sending your message. Please try again.',
      });
    });

  return false

};
// return { sendEmail, form };
