import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query';
import React from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import getData from '../getData/getData';

/**
 * Handles party invite screen
 * @returns <PartyInvite /> component
 */
const PartyInvite = () => {

    let { slug } = useParams();

    const navigate = useNavigate();
    const queryClient = useQueryClient();

    const playerDataRoute = `game/member-data/${slug}`
    const { data: member, status: memberStatus } = useQuery({
        queryKey: ['memberData'], 
        queryFn: () => getData(playerDataRoute),
    });

    const declineInvitation = () => {
        navigate('/my-activities');
    }

    const acceptMutation = useMutation({
        mutationFn: (event) => {
            event.preventDefault();
            const response =  fetch(`http://127.0.0.1/api/party/join/${slug}`, {
                method: 'POST',
            })
            return response;
        },
        onSuccess: () => {
            queryClient.invalidateQueries(['party-list']);
            navigate('/my-activities')
        }
    })

    return(
        <>
        {memberStatus == 'success' ? (
            <div className="container mt-5">
                <div className="row justify-content-center">
                    <div className="col-9 col-auto bg-light">
                        <div className="row justify-content-center">
                            <h1 className="display-6 text-center">Join Game</h1>
                            {member.memberInfo.isMember && !member.memberInfo.isLocked ? (
                                <div className="row justify-content-center">
                                    <i className="fa-solid fa-person-circle-exclamation fa-10x text-center"></i>     
                                    <p className="lead text-center">You are already member of this party</p>
                                </div>
                            ): ''}

                            {member.memberInfo.isLocked ? (
                                <div className="row justify-content-center">
                                    <i className="fa-solid fa-user-lock fa-10x text-center"></i>
                                    <p className="lead text-center">Sorry but this party is locked contact with it's creator to join</p>
                                </div>
                            ): ''}

                            {!member.memberInfo.isMember && !member.memberInfo.isLocked ? (
                                <div className="row justify-content-center">
                                    <i className="fa-solid fa-person-circle-question fa-10x text-center"></i>
                                    <p className="lead text-center">Would you like to join this party?</p>
                                    <div class="d-flex flex-row justify-content-center">
                                        <div class="p-2 ">
                                            <div>
                                                <button  class="btn btn-dark btn-lrg"
                                                onClick={acceptMutation.mutate}
                                                >Join</button>
                                            </div>
                                        </div>
                                        <div class="p-2 ">
                                            <div>
                                                <button  class="btn btn-dark btn-lrg"
                                                onClick={declineInvitation}
                                                >No thanks</button></div>
                                        </div>
                                    <div>

        
                        </div>    
                        </div>
                                </div>
                            ): ''}
                             {/* {member.memberInfo.isLocked ? } */}
                        </div>    
                    </div>
                </div>
            </div>
        ) : 'Loading'}
        </>
    )
}

export default PartyInvite;