import React from 'react';
import PartyList from '../components/myActivities/PartyList';
import { useOutletContext } from "react-router-dom";

/**
 * Function that handles rendering Table of all prties attneded by User
 * 
 * @returns <MyActivities /> component
 */
const MyActivities = () => {

    const [user, setUser] =  useOutletContext();

    const box1 = {
        'title': 'Create party',
        'icon': 'fa-regular fa-users-between-lines fa-8x m-3 mb-5',
        'text': 'Make a new recouring activity to manage'
    };

    return(
        <>
            {/* title */}
            <div className='row justify-content-center mt-4'>
                <h1 className='display-6 text-center universal-shadow-text'>
                    List of parties
                </h1>
            </div>

            {/* table */}
            <div className='row justify-content-center mt-4'>
                <PartyList userData={user}/>
            </div>

        </>

    )
}

export default MyActivities;