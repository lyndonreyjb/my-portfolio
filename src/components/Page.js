import React from "react";
import Typed from 'react-typed';

function Page() {
  return (
    <div className="text-white">
      <div className="max-w-[800px] mt-[-100px] w-full h-screen mx-auto text-center flex flex-col justify-center">
        <div className="md:text-8xl sm:text-7xl text-5xl font-bold text-amber-300 pb-5">
        <Typed
        strings={['Hello']}
        typeSpeed={140} 
        backSpeed={140}
        loop
        />
        </div>
          <h1 className="font-bold text-xl md:text-4xl">I'm Lyndon a Web Developer based in Canada</h1>
          <p className="text-gray-400 text-xl font-bold md:text-2xl">I design and build websites</p>
      </div>
    </div>
  );
}

export default Page;
