import { useQuery } from '@tanstack/react-query';
import React from 'react';
import { OverlayTrigger, Tooltip } from 'react-bootstrap';
import PartyItem from './PartyItem';

/**
 * Handles rendering off full list of parties
 * 
 * @param {array} userData | data about User in context of beeing a meber of specific party
 * @returns <PartyList /> component
 */
const PartyList = ({userData}) => {
    
    const { data: activityList, status: activityListStatus } = useQuery({
        queryKey: ['party-list'], 
        queryFn: () => getActivityList(),
        refetchOnWindowFocus: false,
    });

    const getActivityList = async () => {
        const route = '/api/my-activities';
        const response = await fetch(`${route}`);
        return response.json();
    }

    return (
        <>
            <table className="table party-list bg-dark bg-gradient">
                <thead>
                    <tr>
                        <th className="game-table-header host bg-dark bg-gradient" scope="col"></th> 
                        <th className="game-table-header bg-dark bg-gradient" scope="col">Party</th>
                        <th className="game-table-header host bg-dark bg-gradient" scope="col"></th>
                        <th className="game-table-header bg-dark bg-gradient" scope="col">Activity</th>
                        <th className="game-table-header bg-dark bg-gradient" scope="col">Active/All 
                        <OverlayTrigger
                            delay={{ show: 250, hide: 400 }}
                            overlay={          
                                <Tooltip id="options-tooltip" >
                                    Active members have right to vote. All members can see party panel.
                                </Tooltip>
                            }
                        >
                            <i className="fa-regular fa-circle-question option-info"></i>
                        </OverlayTrigger>    
                        </th>
                        <th className="game-table-header bg-dark bg-gradient" scope="col">Status</th>
                        <th className="game-table-header bg-dark bg-gradient" scope="col">Next session</th>
                        <th className="game-table-header bg-dark bg-gradient" scope="col">Link</th>
                    </tr>
                </thead>
                <tbody>
                    {activityListStatus == "success" ? (
                        activityList.activityTable.map((activity) => (
                            <PartyItem key={activity.id} activity={activity} userData={userData}/>
                        ))
                    ) : (
                        <tr>

                        </tr>
                    )}

                 
                </tbody>
            </table>
        </>
    )          

}

export default PartyList