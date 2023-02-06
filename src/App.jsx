import React from "react"
import Nav from "./Components/Nav"
import PersonalInfo from "./Components/personalInfo"
import About from "./Components/About"
import SkillsCard from "./Components/SkillsCard"
import Projects from "./Components/Projects"
import Footer from "./Components/Footer"

// importing skills array
import skills from "../skills"

function App() {
    const skillsCard = skills.map((skill) => {
        return (
            <SkillsCard
                key={skill}
                skillName={skill[0]}
                skillImage={skill[1]}
            />
        )
    })

    console.log(skillsCard)

    return (
        <div className="650:w-fit 650:max-w-screen-650 650:m-auto md:max-w-screen-md lg:max-w-screen-lg">
            <Nav />
            <PersonalInfo />
            <About />

            {/** this div contains skills displayed in cards */}
            <div className="mt-12 mb-10 flex flex-col px-5 tablet-md:mt-20">
                <div
                    id="wrapper"
                    className="min-w-full overflow-x-scroll flex flex-row gap-x-5 tablet:justify-center"
                >
                    {skillsCard}
                </div>
                <span className="material-symbols-rounded mt-7 self-center text-grayish-white">
                    swipe_left
                </span>
                <p className="self-center text-grayish-white text-xs mt-2">
                    swipe left to scroll
                </p>
            </div>

            <Projects/>

            <Footer/>
        </div>
    )
}

export default App
