import React from 'react'
import photo from '../../../assets/images/my-photo.jpg'
import StarBorder from '../../ReactBits/StarBorder'
const Hero = () => {
    return (
        <div className='my-32 md:my-5 flex flex-col justify-center items-center md:items-end'>
            <div className="md:h-[40vh] flex">
                <img src={photo} alt="" className='main-img rounded-lg md:rounded-md ' />
            </div>
            <div className="w-full h-auto flex flex-col justify-center items-center md:items-start md:justify-start gap-5 md:gap-0">
                <b className='font-extrabold tracking-wider text-3xl md:hidden mt-10'>ASUTOSH SAHOO</b>
                <div className="quote font-thin flex flex-col justify-center items-center md:items-start md:justify-start ">
                    <h3 className='text-xl text-gray-300 md:text-3xl'>I don't code to create,</h3>
                    <h1 className='text-xl text-gray-300 md:text-3xl'>I code to <b className='text-cyan-400'>trigger neurons</b>.</h1>
                    <strong className='font-extrabold tracking-wider hidden md:block md:text-9xl mt-10'>ASUTOSH SAHOO</strong>
                </div>


                <div className="flex justify-between items-center gap-4 mt-5">
                    {/* GitHub */}
                    <a href="https://github.com/dearasutosh" target="_blank" rel="noopener noreferrer">
                        <img src="https://cdn-icons-png.flaticon.com/512/2504/2504911.png" alt="GitHub" width={40} />
                    </a>

                    {/* CodePen */}
                    <a href="https://codepen.io/asutosh-sahoo-the-sasster" target="_blank" rel="noopener noreferrer">
                        <img src="https://cdn-icons-png.flaticon.com/512/1377/1377243.png" alt="CodePen" width={40} />
                    </a>

                    {/* Twitter/X */}
                    <a href="https://x.com/DearAsutosh" target="_blank" rel="noopener noreferrer">
                        <img src="https://cdn-icons-png.flaticon.com/512/5968/5968830.png" alt="Twitter/X" width={40} className="invert" />
                    </a>

                    {/* LinkedIn */}
                    <a href="https://linkedin.com/in/asutoshsahoo" target="_blank" rel="noopener noreferrer">
                        <img src="https://cdn-icons-png.flaticon.com/512/2504/2504923.png" alt="LinkedIn" width={40} />
                    </a>

                    {/* YouTube */}
                    <a href="https://www.youtube.com/@JavaWithAsh" target="_blank" rel="noopener noreferrer">
                        <img src="https://cdn-icons-png.flaticon.com/512/174/174883.png" alt="YouTube" width={40} />
                    </a>

                    {/* LeetCode */}
                    <a href="https://www.leetcode.com/dear_asutosh" target="_blank" rel="noopener noreferrer">
                        <img src="https://upload.wikimedia.org/wikipedia/commons/8/8e/LeetCode_Logo_1.png" alt="LeetCode" width={40} />
                    </a>
                </div>
                <a href="https://drive.google.com/file/d/1FZXyqXH1MNFWSOrSJIDm43dOKQhGCoIL/view?usp=sharing" className='lg-btn self-center md:self-end bg-white'>
                    <div className=' text-black px-5 py-4'>
                        <div className="btn flex  justify-center items-center gap-3 rounded-full tracking-widest uppercase font-semibold">My Resume{RoundInsertDriveFile()}</div>
                    </div>
                </a>
            </div>

        </div>
    )
}
export function RoundInsertDriveFile(props) {
    return (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            width="1.5em"
            height="1.5em"
            {...props}
        >
            <path
                fill="currentColor"
                d="M6 2c-1.1 0-1.99.9-1.99 2L4 20c0 1.1.89 2 1.99 2H18c1.1 0 2-.9 2-2V8.83c0-.53-.21-1.04-.59-1.41l-4.83-4.83c-.37-.38-.88-.59-1.41-.59zm7 6V3.5L18.5 9H14c-.55 0-1-.45-1-1"
            ></path>
        </svg>
    )
}


export default Hero