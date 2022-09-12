import React from 'react'

const ContactForm = () => {
    return (
        <div className='py-10 text-white'>
            <div className='flex flex-col gap-5 mx-auto text-center md:w-1/2'>
                <h1 className='text-2xl font-extrabold md:text-5xl'>GET IN TOUCH</h1>
                <p className='text-lg font-semibold'>When unknown printer took type and scrambled it to make type specimen book centuries,</p>
            </div>
            <form className='flex flex-col w-11/12 gap-5 mx-auto'>
                <div className='flex gap-5 mt-5'>
                    <input className='w-1/2 focus:border-[rgb(177,84,204)] hover:border-[rgb(177,84,204)] duration-300 h-[40px] outline-none bg-[rgb(9,0,42)] placeholder:text-gray-300 border-[rgb(66,58,95)] border-2 rounded-lg pl-2' type="text" placeholder='Name' />
                    <input className='w-1/2 focus:border-[rgb(177,84,204)] hover:border-[rgb(177,84,204)] duration-300 h-[40px] outline-none bg-[rgb(9,0,42)] placeholder:text-gray-300 border-[rgb(66,58,95)] border-2 rounded-lg pl-2' type="email" placeholder='E-mail' />
                </div>
                <div className='flex gap-5'>
                    <input className='w-1/2 focus:border-[rgb(177,84,204)]  hover:border-[rgb(177,84,204)] duration-300 h-[40px] outline-none bg-[rgb(9,0,42)] placeholder:text-gray-300 border-[rgb(66,58,95)] border-2 rounded-lg pl-2' type="phone" placeholder='Phone' />
                    <input className='w-1/2 focus:border-[rgb(177,84,204)] hover:border-[rgb(177,84,204)] duration-300 h-[40px] outline-none bg-[rgb(9,0,42)] placeholder:text-gray-300 border-[rgb(66,58,95)] border-2 rounded-lg pl-2' type="add" placeholder='Address' />
                </div>
                <textarea className='w-full focus:border-[rgb(177,84,204)] hover:border-[rgb(177,84,204)] duration-300 p-2 outline-none bg-[rgb(9,0,42)] placeholder:text-gray-300 border-[rgb(66,58,95)] border-2 rounded-lg' rows={10} col={30} placeholder="Write from here">

                </textarea>
            </form>

        </div>
    )
}

export default ContactForm
