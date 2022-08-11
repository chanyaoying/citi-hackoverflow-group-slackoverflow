/**
 * In this page, clients and bankers can view the client's profile.
 * If currentRole == 'user':
 *      view own profile (from currentClient state in redux store)
 *      able to redo the questionnaire to edit preferences
 * else if currentRole == 'banker':
 *      get client data from backend and view their profile
 */

import { useState } from 'react';
import Button from "@mui/material/Button"
import ProfileCard from "../../components/ProfileCard"
import QuestionnaireModal from '../../components/QuestionnaireModal';
import NavBar from '../../components/NavBar'
import { trpc } from '../utils/trpc';

const profile = () => {

    // Get user data from DB
    const { isLoading, data } = trpc.useQuery(["user.getAll"]);
    (!isLoading && data) && console.log(data[0]);

    // To open and closeQuestionnaireModal;
    const [open, setOpen] = useState<boolean>(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);

    // TODO: get customer profile from backend based on instuctions above
    const name: string = "Sarah";
    const email: string = "sarah@sarahbakes";
    const imageLink: string = "https://images.unsplash.com/photo-1518791841217-8f162f1e1131?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60";

    // TODO: get currentRole from redux store
    const currentRole: string = "user";
    const title = (currentRole === "user") ? "My Finance Dashboard" : "Sarah's Finance Dashboard";

    return (
        <>
            <NavBar />
            <div className="mx-auto flex flex-col items-center h-screen p-4">

                <h1 className="text-4xl pb-5 ">{title}</h1>

                <div className="grid grid-cols-1 gap-5 py-5">
                    <ProfileCard imageLink={imageLink} name={name} description={email} />
                </div>

                <Button onClick={handleOpen}>Edit preferences</Button>
                <QuestionnaireModal name={name} open={open} handleClose={handleClose} />
            </div></>
    )
}

export default profile