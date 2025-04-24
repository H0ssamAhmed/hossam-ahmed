import React from 'react';
import emailjs from '@emailjs/browser';
import { useSonner } from 'sonner';
import { toast } from "sonner"
import { ContactFormProps } from '@/components/contact-section';


interface EmailFormProps {
  name?: string;
  subject?: string;
  email?: string;
  message?: string;
}

// export const ContactUs = (data: EmailFormProps, setFormData) => {

export const SendEmail = (
  data: HTMLFormElement,
  setIsSubmitting: React.Dispatch<React.SetStateAction<boolean>>,
  setFormData: React.Dispatch<React.SetStateAction<ContactFormProps>>

) => {
  emailjs
    .sendForm('service_xts7s5w', 'template_fd8xs1j', data, {
      publicKey: '1v0LcZgDZWloLjLYZ',
    })
    .then(response => {
      if (response?.text === 'OK') {
        toast('Email sent successfully!', {
          icon: '✅',
          closeButton: true,
          duration: 3000,
          description: 'Your message has been sent. We will get back to you soon.',
        });
        setIsSubmitting(false);
        setFormData({ name: "", email: "", subject: "", message: "" })
        return
      } else {
        toast('Failed to sent email!', {
          icon: '❌',
          closeButton: true,
          description: 'There was an error sending your message. Please try again.',
        });
        setIsSubmitting(false);

      }

    })
    .catch((err) => {
      alert("Error sending email. Please try again later.");

    });



};
// return { sendEmail, form };
