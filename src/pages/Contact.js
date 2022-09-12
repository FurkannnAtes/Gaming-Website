import React from 'react'
import Connect from '../components/connect/Connect'
import ContactCards from '../components/contactCards/ContactCards'
import ContactForm from '../components/contactForm/ContactForm'
import Footer from '../components/footer/Footer'
import Navbar from '../components/navbar/Navbar'

const Contact = () => {
    return (
        <div className="overflow-x-hidden  overflow-y-visible bg-[rgb(14,1,49)] ">
            <Navbar />
            <div className='bg-[url("https://bonx-react.pages.dev/static/breadcrumbs-bg-aead09dfeb2feab4bfcb4b524bd0b9a5.webp")] h-[420px] flex flex-col justify-center items-center text-white gap-10'>
                <h1 className='text-3xl xl:text-7xl creepster-font' style={{ textShadow: "3px 3px rgb(177,84,240)" }}>CONTACT</h1>
                <h2>   <span className='hover:text-[rgb(177,84,204)] duration-300 cursor-pointer'>HOME</span> <span className='hover:text-[rgb(177,84,204)] duration-300 cursor-pointer'>     / </span> <span className='hover:text-[rgb(177,84,204)] duration-300 cursor-pointer'>CONTACT</span> </h2>
            </div>
            <ContactCards />
            <ContactForm />
            <Connect />
            <Footer />
        </div>
    )
}

export default Contact
