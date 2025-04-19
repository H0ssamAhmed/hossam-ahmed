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

// export const ContactUs = (data: EmailFormProps, setFormData) => {

export const SendEmail = (
  e: React.FormEvent,
  setFormData: React.Dispatch<React.SetStateAction<EmailFormProps>>,
  data: any,
  setIsSubmitting: boolean) => {
  e.preventDefault();
  console.log(e);
  console.log(data.current);

  setIsSubmitting(true);
  emailjs
    .sendForm('service_xts7s5w', 'template_fd8xs1j', data.current, {
      publicKey: '1v0LcZgDZWloLjLYZ',
    })
    .then(response => {
      if (response?.text === 'OK') {
        toast('Email sent successfully!', {
          description: 'Your message has been sent. We will get back to you soon.',
        });
        return
      } else {
        toast('Failed to sent email!', {
          description: 'There was an error sending your message. Please try again.',
        });
      }

    })
    .catch((err) => {
      console.log(err);
      alert("Error sending email. Please try again later.");
    });
  setIsSubmitting(false);


  return true

};
// return { sendEmail, form };
