import React from 'react'
import { IoSendSharp } from 'react-icons/io5';
import emailjs from '@emailjs/browser';

const Contact = () => {
    const [emailData, setEmailData] = React.useState({
        from_name: "",
        from_email: "",
        message: "",
        subject: ""
    })
    const [sending, setSending] = React.useState(false)
    const [sent, setSent] = React.useState(false)
    const handleChange = (e) => {
        setEmailData({
            ...emailData,
            [e.target.name]: e.target.value
        })
    }
    const hanldeAlertAfterSending = () => {
        setSent(true)
        setTimeout(() => {
            setSent(false)
        }, 7000);
    }
    const form = React.useRef();
    const sendEmail = (e) => {
        e.preventDefault();
        setSending(true);

        emailjs.sendForm(
            'SendMailServiceID',
            'template_2uvuv8u',
            form.current,
            '1v0LcZgDZWloLjLYZ'
        ).then(
            (result) => {
                setSending(false);
                console.log('SUCCESS!', result.text);
                setEmailData({
                    from_name: "",
                    from_email: "",
                    message: "",
                    subject: ""
                })
                hanldeAlertAfterSending()
            },
            (error) => {
                setSending(false);
                console.log('FAILED...', error.text);
                alert(`Failed to send message, Please try again Mr. ${emailData.from_name}`);
            }
        );
    };


    return (
        <section className='py-8 ' id='Contact'>

            <div className=' container py-5'>
                <h1 className='w-fit text-[40px] py-6  mx-auto'>Contact</h1>
                <div className=' grid grid-cols-1 md:grid-cols-2 justify-between items-center'>
                    <div className=' hidden md:flex justify-center items-center'>
                        <IoSendSharp className=' w-32 h-32 text-primary -rotate-45 -translate-y-5' />
                    </div>
                    <div className=' text-center md:text-start'>
                        <p className=' text-[30px]'>I appreciate direct contact thought <strong><a className=' text-primary' href='mailTo:hossamahmed8862@gmail.com'>Email</a></strong>, send me a message directly on
                            <strong><a className=' text-primary' href='https://www.linkedin.com/in/hossam-ahmed-/' target='blank'> LinkedIn </a></strong>
                            or fill out the form below
                        </p>
                    </div>
                </div>
                <form ref={form} onSubmit={sendEmail} className="pt-10 md:w-1/2 mx-auto">
                    <div className="grid grid-cols-1 md:grid-cols-2 md:gap-4">
                        <div className="flex flex-col mb-4">
                            <label className="p-2">Name</label>
                            <input
                                name="from_name"  // ✅ Matches EmailJS template
                                value={emailData.from_name}
                                onChange={handleChange}
                                type="text" required className="p-2 pl-6 dark:bg-secondary/80 text-black bg-primary-background/5 border-secondary dark:focus:bg-secondary placeholder:text-primary border-[5px] focus:border-primary focus:outline-none duration-500 outline-transparent focus:outline-transparent transition-all rounded-[8px]" placeholder="Your Name, Please 😊" />
                        </div>
                        <div className="flex flex-col mb-4">
                            <label className="p-2">Email</label>
                            <input
                                name="from_email"  // ✅ Matches EmailJS template
                                value={emailData.from_email}
                                onChange={handleChange}
                                type="email"
                                required
                                className="p-2 pl-6 dark:bg-secondary/80 text-black bg-primary-background/5 border-secondary dark:focus:bg-secondary placeholder:text-primary border-[5px] focus:border-primary focus:outline-none duration-500 outline-transparent focus:outline-transparent transition-all rounded-[8px]"
                                placeholder="Your subject, Please 😊" />
                        </div>
                    </div>
                    <label className="p-2">Subject</label>
                    <input
                        name="subject"  // ✅ Matches EmailJS templatel
                        value={emailData.subject}
                        onChange={handleChange}
                        type="text" required
                        className="p-2 pl-6 dark:bg-secondary/80  text-black bg-primary-background/5 border-secondary dark:focus:bg-secondary placeholder:text-primary border-[5px] focus:border-primary focus:outline-none duration-500 outline-transparent focus:outline-transparent transition-all rounded-[8px] w-full mb-4" placeholder="Your Email, Please 😊" />

                    <textarea
                        name="message"  // ✅ Matches EmailJS template
                        value={emailData.message}
                        onChange={handleChange}
                        className="p-2 pl-6 w-full h-48 dark:bg-secondary/80 text-black bg-primary-background/5 border-secondary dark:focus:bg-secondary placeholder:text-primary border-[5px] focus:border-primary focus:outline-none duration-500 outline-transparent focus:outline-transparent transition-all rounded-[8px]" placeholder="Leave a message for what you want" />
                    <button type="submit" disabled={sending} className="w-full text-center bg-primary py-2 rounded-[8px] text-white hover:bg-primary/50 hover:-skew-x-6 hover:scale-110 transition">
                        {sending ? "Sending..." : "Send"}
                    </button>

                    <p className={`mt-4 text-orange-500 transition-all ${sent ? "opacity-100" : "opacity-0"}`}>Thank you for your message, we will get back to you as soon as possible</p>
                </form>

            </div>
        </section>
    )
}

export default Contact