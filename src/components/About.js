import React from 'react'
import Pic from "../icons/tech.png";

export default function About() {
    return (
        <div className='bg-[#e9c46a] w-full py-14 px-4'>
            <div className='mx-auto max-w-[1240px] grid md:grid-cols-2'>
                <img src={Pic} alt='/' className='mx-auto my-4 w-[80%]'/>
                <div className='justify-center flex flex-col'>
                    <p>HElhalkjhsdjfhahsdlfhasdj</p>
                </div>
            </div>
        </div>
    );
}
