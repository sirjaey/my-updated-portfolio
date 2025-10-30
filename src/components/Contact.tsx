import { useState } from 'react';
import emailjs from 'emailjs-com'
import { MapPin, Mail, Phone} from "lucide-react";

const SERVICE_ID = 'service_l204kpb'
const TEMPLATE_ID = 'template_3bcsn2q'
const PUBLIC_KEY = 'pKHk4Bn0peBByCoNX'


const Contact = () => {
    const [sending, setSending] = useState(false)
    const [sent, setSent] = useState(false)

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        setSending(true)
        setSent(false)

        const form = e.target as HTMLFormElement

        emailjs
            .sendForm(SERVICE_ID, TEMPLATE_ID, form, PUBLIC_KEY)
            .then(() => {
                setSending(false)
                setSent(true)
                form.reset()
            })
            .catch((err) => {
                console.error(err)
                setSending(false)
                alert('Failed to send message, please try again.')
            })
    }

    return (
        <section className="mt-16 bg-[#d1cbcb]/80 rounded-2xl md:p-6 shadow-md ">
            <div className='text-center'>
                <h2 className="text-4xl font-bold pt-6 md:pt-0 mb-6 text-gray-900">Get in Touch</h2>
                <div className="w-24 h-1 mx-auto bg-gradient-to-r from-cyan-400 to-purple-500 rounded-full mb-8"></div>
                <p className="text-gray-900 font-bold mb-4 md:px-50 md:text-center px-4">I'd love to hear from you! Whether you have a question about my work, want to collaborate on a project, or just want to say hi, feel free to reach out.</p>
            </div>


            <div className='grid grid-cols-1 md:grid-cols-2 gap-8 relative '>
                <div className="absolute inset-0 animate-gradient -z-10 pointer-events-none " />
                <div className="md:mx-auto md:px-6   md:w-full">
                    <p className="text-gray-900 mb-10">

                    </p>
                    <div className="space-y-6 text-left">
                        {/* Location */}
                        <div className="flex items-center space-x-4 bg-gray-300 md:rounded-xl p-4 hover:bg-gray-700/50 transition">
                            <div className="p-3 bg-gray-900 rounded-lg">
                                <MapPin className="text-cyan-400 w-4 h-4 md:w-6 md:h-6" />
                            </div>
                            <div>
                                <h4 className="text-sm md:text-lg font-semibold">Location</h4>
                                <p className="text-gray-900 text-sm md:text-base">Abuja, Nigeria</p>
                            </div>
                        </div>
                        {/* Email */}
                        <div className="flex items-center space-x-4 bg-gray-300 md:rounded-xl p-4 hover:bg-gray-700/50 transition">
                            <div className="p-3 bg-gray-900 rounded-lg">
                                <Mail className="text-cyan-400 w-4 h-4 md:w-6 md:h-6" />
                            </div>
                            <div>
                                <h4 className="text-sm md:text-lg font-semibold">Email</h4>
                                <p className="text-gray-900 text-sm md:text-base">joshuaabu1995@gmail.com</p>
                            </div>
                        </div>
                        {/* Phone */}
                        <div className="flex items-center space-x-4 bg-gray-300 md:rounded-xl p-4 hover:bg-gray-700/50 transition">
                            <div className="p-3 bg-gray-900 rounded-lg">
                                <Phone className="text-cyan-400 w-4 h-4 md:w-6 md:h-6" />
                            </div>
                            <div>
                                <h4 className="text-sm md:text-lg font-semibold">Phone</h4>
                                <p className="text-gray-900 text-sm md:text-base">+234 8109428027</p>
                            </div>
                        </div>

                    </div>
                </div>
                <div>

                    <form onSubmit={handleSubmit} className="space-y-4 bg-gray-300 md:rounded-lg px-4 py-4 md:px-6 md:py-6 shadow-md">
                        <div>
                            <label className="text-sm font-medium">Name</label>
                            <input name="name" required className="mt-1 w-full rounded-md border-gray-900/10 bg-gray-900/10 px-3 py-2 outline-none focus:ring-2 focus:ring-cyan-400 border-[2px] " placeholder='Your name' />
                        </div>
                        <div>
                            <label className="text-sm font-medium">Email</label>
                            <input type="email" name="email" required className="mt-1 w-full rounded-md border-[2px] border-gray-900/10 bg-gray-900/10 px-3 py-2 outline-none focus:ring-2 focus:ring-cyan-400 " placeholder='Your email' />
                        </div>
                        <div>
                            <label className="text-sm font-medium">Message</label>
                            <textarea name="message" required className="mt-1 w-full rounded-md border-[2px] border-gray-900/10 bg-gray-900/10 px-3 py-2 h-28 outline-none focus:ring-2 focus:ring-cyan-400" placeholder='Your message' />
                        </div>
                        <button
                            type="submit"
                            disabled={sending}
                            className="px-5 py-2 rounded-lg bg-indigo-600 text-white font-medium hover:bg-indigo-700 disabled:opacity-60 cursor-pointer transition"
                        >
                            {sending ? 'Sending...' : 'Send Message'}
                        </button>
                        {sent && <p className="text-green-600 text-sm mt-2">✅ Message sent successfully!</p>}
                    </form>
                </div>
            </div>
        </section>
    )
}

export default Contact;