import { useQuery } from '@tanstack/react-query';
import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import getData from '../../getData/getData';

/**
 * 
 * Handles rendering day in  Calendar view
 * 
 * @param {array} param | 
 * @returns 
 */
const Day = ({dayData, setActiveDay, activeDay, memberData}) => {

    const { id } = useParams();
    const dateString = dayData.date.substring(0,10);
    const queryKey = `${id}-${dateString}`;
    const dayRoute = `/day/${id}/${dateString}`;
    
    const { data, status } = useQuery({
        queryKey: [queryKey], 
        queryFn: () => getData(dayRoute),
        refetchOnWindowFocus: false,
    });

    const [isActive, setIsActive]= useState(false);

    const pickDate = (day) => {
        setActiveDay(day);
    }

    useEffect(() => {
        if (status == 'success' && typeof activeDay !== 'undefined'  && isActive) {
            pickDate(data.dayInfo);
        } else {
           
        }
    },[data]);

    useEffect(() => {
        if (typeof activeDay !== 'undefined' && typeof activeDay.date !== 'undefined' && activeDay.date == dayData.date) {
            setIsActive(true);
        } else {
            setIsActive(false);
        }
    },[activeDay]);

    useEffect(() => {
        if (typeof activeDay === 'undefined' && typeof data !== 'undefined' && dayData.today) {
            setActiveDay(data.dayInfo);
        }
    },[status]);

    return (
        <>
        {status =='success' ? (
            <td 
            className={isActive ? data.dayInfo.status + " p-0  picked-date" :  data.dayInfo.status + " p-0" }
            onClick={() => pickDate(data.dayInfo)}>

                <div className="calendar-day" >     
                    {data.dayInfo.number}
                </div>

                {data.dayInfo.status == "CANCELED" ? (
                        <div className="players-left-to-vote" ><i className="fa-solid fa-xmark"></i></div> 
                    ) : (
                ''
                )}

                {data.dayInfo.status == "VOTED" ? (
                <>
                    <div className="players-left-to-vote"><i className="fa-sharp fa-solid fa-arrows-rotate">{data.dayInfo.remainingVoters}</i></div> 
                    
                    {memberData != null && memberData.memberInfo.isActive == true  && !data.dayInfo.playerStatus ? (
                        <div className="players-vote-status"><i className="fa-sharp fa-solid fa-exclamation"></i></div> 
                    ) : ''}


                </>

                    ) : (
                ''
                )}

                {data.dayInfo.status == "MISSED" ? (
                    <div className="players-left-to-vote"><i className="fa-solid fa-ban"></i></div>
                    ) : (
                ''
                )}

                {data.dayInfo.status == "GAMEDAY" ? (
                    <div className="players-left-to-vote"><i className="fa-solid fa-check"></i></div>
                    ) : (
                ''
                )}
            </td>
        ) : (
            <td>              
                <div className="calendar-day" >     
                    {dayData.number}
                </div>
            </td>
        )}
            
        </>
        )
    }

    export default Day


