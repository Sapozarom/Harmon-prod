import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import Day from './Day';

/**
 * Handles rendering Week in Calendar view
 * 
 * @param {array} weekData | data required for rendering the view
 * @param {activeDay} activeDay | data about current active day
 * @param {setState} setActiveDay | setState()  function
 * @param {array} memberInfo | info about current user as a member of party
 * @returns <Week /> component
 */
const Week = ({weekData, activeDay, setActiveDay, memberInfo}) => {

    const [week, setWeek] =  useState(weekData);
    const [dataLoaded, setDataLoaded] = useState(false);
    
    let { id } = useParams();


    useEffect(() => {

        if (typeof weekData !== 'undefined') {
            setDataLoaded(true);
        }
    },[week]);
   
        return (
        <>
            <tr>
            {dataLoaded ? (
                    week.map((day) => (
                            <Day 
                            memberData = {memberInfo}
                            key={id+'-'+day.monthNumber.toString() +"-"+ day.number.toString()} 
                            dayData = {day} 
                            activeDay={activeDay}
                            setActiveDay={setActiveDay}
                            />
                        ))
                ) : (
                    <td>
                        
                    </td>
                )}   
            </tr>
        </>
        )
    }


export default Week