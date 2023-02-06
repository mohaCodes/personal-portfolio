import React from "react"

export default function Nav() {
    return (
        //This is the nav element
        <nav className="fixed min-w-full z-10">
            <div className="flex flex-row w-full p-6 align-baseline justify-between bg-dark-background text-secondary-white-text">
                <div className="flex flex-row text-xs ">
                    <span className="material-symbols-rounded self-center text-xl">
                        radio_button_unchecked
                    </span>
                    <div className="ml-2.5 font-medium ">
                        <h3 className="">Mohamed</h3>
                        <h3 className=" -mt-1">A. Mueen</h3>
                    </div>
                </div>

                
            </div>
        </nav>
    )
}
