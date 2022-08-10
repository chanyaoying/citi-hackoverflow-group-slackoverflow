/**
 * In this page, clients and bankers can view the client's profile.
 * If currentRole == 'user':
 *      view own profile (from currentClient state in redux store)
 *      able to redo the questionnaire to edit preferences
 * else if currentRole == 'banker':
 *      get client data from backend and view their profile
 */

import ProfileCard from "../../components/ProfileCard"
import Button from "@mui/material/Button"

const profile = () => {

    // TODO: get customer profile from backend based on instuctions above
    const name: string = "Sarah";
    const description: string = "Owner/Chef of SarahBakes. Mother of 2 cute dogs. Loves to bake, cook, and bake.";
    const imageLink: string = "https://images.unsplash.com/photo-1518791841217-8f162f1e1131?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60";

    // TODO: get currentRole from redux store
    const currentRole: string = "user";
    const title = (currentRole === "user") ? "My Finance Dashboard" : "Sarah's Finance Dashboard";

    return (
        // Side nav bar here
        <div className="mx-auto flex flex-col items-center h-screen p-4">
            <h1 className="text-4xl pb-5 ">{title}</h1>
            <div className="grid grid-cols-2 gap-5 py-5">
                <ProfileCard imageLink={imageLink} name={name} description={description} />
                {/* Preferences (questionnaire answers) are shown here as a card*/}

                
            </div>
            <Button>Edit preferences</Button>
        </div>
    )
}

export default profile