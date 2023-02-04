import React from "react"
import Nav from "./Components/Nav"
import PersonalInfo from "./Components/personalInfo"
import About from "./Components/About"

// importing skills array
import skills from "../skills"

function App() {
    return (
        <div className="">
            <Nav />
            <PersonalInfo />
            <About />
            
        </div>
    )
}

export default App
