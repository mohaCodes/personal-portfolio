import React from "react"
import Typical from "react-typical"

export default function PersonalInfo() {
    return (
        <main className="px-11 pt-16 tablet:pt-32 900:pt-48 650:pt-40">
            <div className="flex flex-col mt-5">
                <h1 className="font-sofiaSans leading-[2.8rem] text-6xl font-bold tracking-tight tablet:text-8xl tablet-md:text-center 900:text-9xl">
                    WEB DEVELOPER
                </h1>
                <h4 className="font-normal mt-3 text-white-text text-xs tablet-md:text-center">
                    I'm a{" "}
                    <Typical
                        className="z-0"
                        steps={[
                            "Web Developer",
                            1500,
                            "Full Stack Javascript Developer",
                            1500,
                            "Front End Developer",
                            1500,
                        ]}
                        loop={Infinity}
                        wrapper="span"
                    />
                </h4>
            </div>

            <hr className="mt-12 bg-grayish-white tablet-md:mt-40" />
        </main>
    )
}
