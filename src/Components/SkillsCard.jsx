import React from "react"

export default function SkillsCard(props) {
    return (
        <div className=" border min-w-[5rem] flex-auto flex flex-col justify-around p-4 border-secondary-white-text">
            <img className="" src={props.skillImage} />
            <h5 className="text-xs font-roboto font-normal text-secondary-white-text self-center mt-2">
                {props.skillName}
            </h5>
        </div>
    )
}
