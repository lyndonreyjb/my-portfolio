import React from 'react'
import Pic from "../icons/tech.png";

export default function About() {
    return (
        <div className='bg-[#e9c46a] w-full py-14 px-4'>
            <div className='mx-auto max-w-[1240px] grid md:grid-cols-2'>
                <img src={Pic} alt='/' className='mx-auto my-4 w-[80%]'/>
                <div className='justify-center flex flex-col'>
                <h1>M</h1>
                    <p> is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
                </div>
            </div>
        </div>
    );
}
