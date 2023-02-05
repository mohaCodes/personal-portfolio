import React from "react"
import Nav from "./Components/Nav"
import PersonalInfo from "./Components/personalInfo"
import About from "./Components/About"
import SkillsCard from "./Components/SkillsCard"

// importing skills array
import skills from "../skills"

function App() {

    const skillsCard = skills.map(skill => {
        return <SkillsCard key={skill} skillName={skill[0]} skillImage={skill[1]} />
    })

    console.log(skillsCard);

    return (
        <div className="">
            <Nav />
            <PersonalInfo />
            <About />
            

            {/** this div contains skills displayed in cards */}
            <div  className="mt-12 mb-10 flex flex-col px-5">
                <div id="wrapper" className="min-w-full overflow-x-scroll flex flex-row gap-x-4">
                    {skillsCard}
                </div>
                <span className="material-symbols-rounded mt-7 self-center text-grayish-white">
                    swipe_left
                </span>
                <p className="self-center text-grayish-white text-xs mt-2">swipe left</p>

            </div>
        </div>
    )
}

export default App
