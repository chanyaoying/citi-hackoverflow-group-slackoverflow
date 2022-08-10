import React from "react"
import ProfileCard from "../../components/ProfileCard"

const profile = () => {
    return (
        // Side nav bar here
        <div className="mx-auto flex flex-col items-center h-screen p-4">
            <h1 className="text-4xl">My Finance Dashboard</h1>
            <ProfileCard/>
        </div>
    )
}

export default profile