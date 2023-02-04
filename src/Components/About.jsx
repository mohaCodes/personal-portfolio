import React from "react"

export default function About() {
    return (
        <section className="px-11 my-9">
            <div className="flex flex-col">
                <h2 className="font-roboto font-normal text-3xl text-secondary-white-text">
                    About
                </h2>

                <p className="text-secondary-white-text mt-5 leading-[1.3] text-base">
                    Hi everyone! I'm Mohamed Abdul Mueen, a web dev.
                    <span className="inline-block mt-1 text-grayish-white text-[0.8rem] leading-[1.38]   ">
                        (mostly a Full Stack Javascript Developer)
                    </span>
                </p>

                <p className="text-grayish-white mt-6 leading-[1.38] text-[0.8rem]">
                    <i>
                        I have shown a curiosity about computers since I
                        was a child, so I fed this curiosity until it
                        turned into a passion that sooner or later became
                        an obsession for me, especially since I got
                        acquainted with the meaning of programming and how
                        a few letters and symbols on a screen...can change
                        the world.
                    </i>
                </p>

                <p className="text-grayish-white mt-6 leading-[1.38] text-[0.8rem]">
                    I'm now a full stack javascript developer (mainly) at
                    the start of his journey, looking to create projects
                    that would change the world and to be an essential in
                    everyone's daily life.
                </p>
            </div>
        </section>
    )
}
