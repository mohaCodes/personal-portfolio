import React from "react";
import Typical from "react-typical";




export default function PersonalInfo() {
    return (
        <main className="p-11">

            <div className="flex flex-col mt-5">
                <h1 className="font-sofiaSans leading-[2.8rem] text-6xl font-bold tracking-tight">WEB DEVELOPER</h1>
                <h4 className="font-normal mt-3 text-secondary-white-text text-xs">I'm a <Typical steps={['Full Stack Javascript Developer', 1500, 'Front End Developer', 1500, "Android Developer", 1500]}loop={Infinity}wrapper="span"/></h4>
            </div>

            <hr className="mt-16 bg-grayish-white"/>
            
        </main>
    )
}