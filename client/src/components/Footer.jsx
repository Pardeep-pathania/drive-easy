import React from 'react'
import { assets } from '../assets/assets'
import {motion} from 'motion/react'


const Footer = () => {
  return (
    <motion.div
     initial={{y:30, opacity:0}}
     whileInView={{y:0, opacity:1}}
     transition={{duration: 0.6}}
    className='px-6 md:px-16 lg:px-24 xl:px-32 mt-60 text-sm text-gray-500'>
            <motion.div
             initial={{y:20, opacity:0}}
     whileInView={{y:0, opacity:1}}
     transition={{duration: 0.6, delay:0.2}}
            className='flex flex-wrap justify-between items-start gap-8 pb-6 border-borderColor border-b'>
               
                <div>
                    <motion.h1
                    initial={{opacity:0}}
     whileInView={{opacity:1}}
     transition={{duration: 0.6, delay:0.3}}
                    className='text-3xl text-primary font-bold'>Drive<span className='text-black'>Easy</span></motion.h1>
                    <motion.p
                     initial={{opacity:0}}
     whileInView={{opacity:1}}
     transition={{duration: 0.5, delay:0.4}}
                    className='max-w-80 mt-3'>
                        Premium car rental service with a wide selection of luxury and everyday vehicles for all your driving needs.
                    </motion.p>
                    <motion.div
                    initial={{opacity:0}}
     whileInView={{opacity:1}}
     transition={{duration: 0.6, delay:0.5}}
                    className='flex items-center gap-3 mt-6'>
                        <a href="#"> <img src={assets.facebook_logo} className='w-5 h-5' alt="" /></a>
                        <a href="#"> <img src={assets.instagram_logo} className='w-5 h-5' alt="" /></a>
                        <a href="#"> <img src={assets.twitter_logo} className='w-5 h-5' alt="" /></a>
                        <a href="#"> <img src={assets.gmail_logo} className='w-5 h-5' alt="" /></a>
                        
                    </motion.div>
                </div>

                <motion.div
                initial={{y:20, opacity:0}}
     whileInView={{y:0, opacity:1}}
     transition={{duration: 0.6, delay: 0.4}}
                className='flex flex-wrap justify-between w-1/2 gap-8'>

                <div>
                    <h2 className='text-base font-medium uppercase text-gray-800'>Quick Links</h2>
                    <ul className='mt-3 flex flex-col gap-1.5'>
                        <li><a href="#">Home</a></li>
                        <li><a href="#">Browse Cars</a></li>
                        <li><a href="#">List your car</a></li>
                        <li><a href="#">About Us</a></li>
                    </ul>
                </div>

                
                <div>
                    <h2 className='text-base font-medium uppercase text-gray-800'>Resources</h2>
                    <ul className='mt-3 flex flex-col gap-1.5'>
                        <li><a href="#">Help Center</a></li>
                        <li><a href="#">Terms of Service</a></li>
                        <li><a href="#">Privacy Policy</a></li>
                        <li><a href="#">Insurance</a></li>
                    </ul>
                </div>

                
                <div>
                    <h2 className='text-base font-medium uppercase text-gray-800'>Contact</h2>
                    <ul className='mt-3 flex flex-col gap-1.5'>
                        <li><a href="#">1234 Luxury Drive</a></li>
                        <li><a href="#">Sec 17, Chandigarh 164201</a></li>
                        <li><a href="#">+91 4654848887</a></li>
                        <li><a href="#">info@gmail.comn</a></li>
                    </ul>
                </div>
    
     </motion.div>
                
               
            </motion.div>
            
            <motion.div 
            initial={{y:10, opacity:0}}
     whileInView={{y:0, opacity:1}}
     transition={{duration: 0.6, delay:0.6}}
            className='flex flex-col md:flex-row gap-2 items-center justify-between py-5'>
                <p>© {new Date().getFullYear()} Pardeep Pathania. All rights reserved.</p>
                <ul className='flex items-center gap-4'>
                    <li><a href="#">Privacy</a></li>
                    <li> | </li>
                    <li><a href="#">Terms</a></li>
                    <li> | </li>
                    <li><a href="#">Sitemap</a></li>
                </ul>
            </motion.div>
        </motion.div>
  )
}

export default Footer
