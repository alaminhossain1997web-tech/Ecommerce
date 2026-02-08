import React, { Children } from 'react'
import { BiChevronDown, BiChevronRight } from 'react-icons/bi'
import { IoCartOutline, IoSearchSharp } from 'react-icons/io5'
import { LuUser } from 'react-icons/lu'
import { Link } from 'react-router'

const Navbar = () => {
    const catagory = [
        {
            title: "Phone",
            Children: ["IPhone","Samsung","Vivo","Nokia","Redmi"]
        },
        {
            title: "Laptop",
            Children: ["IPhone","Samsung","Vivo","Nokia","Redmi"]
        },
        {
            title: "TWS",
            Children: ["IPhone","Samsung","Vivo","Nokia","Redmi"]
        },
        {
            title: "Smart Watch",
            Children: ["IPhone","Samsung","Vivo","Nokia","Redmi"]
        },
    ]
  return (
   <header>
     <nav className='py-5'>
      <div className="container flex justify-between items-center">
        <Link>
        <img src="/logo.png" alt="logo" className='w-full' />
        </Link>

        <div className='flex items-center gap-2.5 bg-secondary p-4 rounded-2xl w-full max-w-lg'>
           <IoSearchSharp className='text-brand text-2xl' />
            <input type="text" placeholder='Search essentials, groceries and more...' className='w-full outline-0'/>
        </div>
        <div className='flex items-center gap-10 '>
            <Link className='flex items-center font-bold text-base gap-1.5 relative after:absolute after:h-full after:w-0.5 after:bg-primary after:top-0 after:-right-5'> <LuUser className='text-brand text-xl' />Sign Up/Sign In</Link>
            <Link className='flex items-center font-bold text-base gap-1.5'> <IoCartOutline className='text-brand text-xl'/>Cart</Link>
            
        </div>

      </div>
    </nav>
    {/*catagory*/}
    <div>
        <div className="container flex items-center gap-8">
            {
                catagory.map((item)=>(
                       <div key={item.title} className='relative group'>
                <Link className='bg-secondary inline-block py-2.5 px-3.5 rounded-full relative group hover:bg-brand hover:text-secondary'>
            <div className='group flex gap-1 items-center '>
                <p className='font-medium text-base'>{item.title}</p>
                <BiChevronRight className='block group-hover:hidden font-medium  text-brand text-2xl'/>
                <BiChevronDown className='hidden group-hover:block font-medium  text-2xl group-hover:text-secondary:'/>

            </div>
            </Link>
            <ul className='absolute top-full left-0  invisible opacity-0 group-hover:visible group-hover:opacity-100 w-48 p-4 rounded-2xl space-y-2 bg-theme shadow text-base text-primary font-medium'>
               {
                item.Children.map((child)=>(
                     <li key={child}>
                    <Link className=' p-2 hover:bg-brand hover:text-secondary rounded-xl block transition'>{child}</Link>
                </li>
                ))
               }            
            </ul>
            </div>
                    
                ))
            }
         
        </div>
    </div>
   </header>
  )
}

export default Navbar
