import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query';
import React, {useState} from 'react';
import {  useNavigate, useParams } from 'react-router-dom';
import getData from '../../getData/getData';
import OverlayTrigger from 'react-bootstrap/OverlayTrigger';
import Tooltip from 'react-bootstrap/Tooltip';
import SubmitToast from '../party/SubmitToast';

/**
 * Handles display of option panel visible for party host
 * @returns <OptionPanel /> component
 */
const OptionPanel = () => { 

    const queryClient = useQueryClient();
    const navigate = useNavigate();
    const { id } = useParams();
    const [currentPlayer, setCurrentPlayer] = useState();
    const [newHostId, setNewHostId] = useState();
    const [activePlayers, setActivePlayers] = useState([]);
    const [inactivePlayers, setInactivePlayers] = useState([]);
    const [playerStatus, setPlayerStatus] = useState('Inactive');
    
    const gameDataRoute = `/game/info/${id}`;
    const { data: game, status: gameStatus } = useQuery({
        queryKey: ['gameData'], 
        queryFn: () => getData(gameDataRoute),
        onSuccess: (data) => {

            if (typeof currentPlayer == 'undefined') {
                setCurrentPlayer(data.partyInfo.host);
            }

            let active = [];
            data.partyInfo.activeMembers.map((player) => (
                active.push(player.id)
            ))

            let inactive = [];
            data.partyInfo.inactiveMembers.map((player) => (
                inactive.push(player.id)
            ))

            if (active.find(value => value == currentPlayer)) {
                setPlayerStatus('Inactive');
            } else {
                setPlayerStatus('Active');
            }
            setActivePlayers(active);
            setInactivePlayers(inactive);
          }
    });

    const statusMutation = useMutation({
        mutationFn: () => {
            
            const response =  fetch(`/api/game/change-user-status/${id}/${currentPlayer}`, {
                method: 'POST',
            })
            return response;
        },
        onSuccess: () => {
            queryClient.invalidateQueries(['gameData'])
        }
    })

    const removeMember = () => {
        if (confirm('This member will be remove permanently. Do you want ot proceed?')) {
            removeMemberMutation.mutate();
        }
    }

    const removeMemberMutation = useMutation({
        mutationFn: () => {
                const response =  fetch(`/api/game/remove-member/${id}/${currentPlayer}`, {
                    method: 'POST',
                })
                return response;
        },

        onSuccess: () => {
            queryClient.invalidateQueries(['gameData'])
        }
    })
    
    const promoToHostMutation = useMutation({
        mutationFn: () => {
            const response =  fetch(`/api/game/promote-to-host/${id}/${newHostId}`, {
                method: 'POST',
            })
            promoToHostMutation.status = 'idle';
            return response;
        },
        onSuccess: () => {
            queryClient.invalidateQueries(['gameData'])
        }
    })

    const lockMutation = useMutation({
        mutationFn: () => {
            const response =  fetch(`/api/game/change-lock-status/${id}`, {
                method: 'POST',
            })
            return response;
        },
        onSuccess: () => {
            queryClient.invalidateQueries(['gameData'])
        }
    })

    
    const deleteParty = () => {
        if (confirm("This party will be deleted with all it's data. Do you want to continue?")) {
            deleteMutation.mutate();
        }
    }

    const deleteMutation = useMutation({
        mutationFn: () => {
            const response =  fetch(`/api/game/delete-party/${id}`, {
                method: 'DELETE',
            })
        
            return response;
        },
        onSuccess: () => {        
            navigate('/my-activities');
        }
    })


    const getPlayerStatus = (e) => {
        const playerId = e.target.value;
        setCurrentPlayer(playerId);
        const isActive  = activePlayers.find(value => value == playerId);
        const isInactive = inactivePlayers.find(value => value == playerId);

        if (typeof isActive != 'undefined') {
            setPlayerStatus('Inactive');
        }

        if (typeof isInactive != 'undefined') {
            setPlayerStatus('Active');
        }
    }

    const determineNewHost = (e) => {
        const playerId = e.target.value;
        setNewHostId(playerId);
    }

    return(
        <>
        {gameStatus == 'success' ? 
            <div className="row mt-3">
                <div className="col-xl">
                    <div className="border bg-light form-panel">
                        <div className="d-flex flex-row justify-content-center party-header bg-dark bg-gradient">
                            <div className="p-0">
                                OPTIONS
                            </div>
                        </div>
                        
                        {/* MANAGE MEMBERS */}
                        <div className="row mt-1 border-bottom">
                            <div className="row">
                                <div className="co-6 p-0 lead mb-2">
                                Manage members 

                                    <OverlayTrigger
                                        delay={{ show: 250, hide: 400 }}
                                        overlay={          
                                            <Tooltip id="options-tooltip" >
                                                Inactive players doesn't take part in voting process, but they can still open party panel. 
                                                Removed players can't rejoin locked parties.
                                            </Tooltip>
                                        }
                                    >
                                        <i className="fa-regular fa-circle-question option-info"></i>
                                    </OverlayTrigger>
                                </div>

                            </div>
                            <div className="row mb-3">
                                <div className='col-6 p-0 '>
                                    <select 
                                    id="players-list"
                                    className={playerStatus == 'Active' ? " form-select inactive-member-option" : "form-select active-member-option"}
                                    value={currentPlayer}
                                    onChange={getPlayerStatus}>
                                        {game.partyInfo.activeMembers.map((player) => (
                                            
                                            <option key={player.id} className="active-member-option" value={player.id}> {player.name} </option>
                                        ))}


                                        {game.partyInfo.inactiveMembers.map((player) => (
                                            <option key={player.id} className="inactive-member-option" value={player.id}>{player.name}</option>
                                        ))}
                                    </select>
                                </div>
                                <div className='col-4'>
                                    <button 
                                    className='btn btn-dark full-width'
                                    onClick={statusMutation.mutate}>
                                        Make {playerStatus}
                                    </button>
                                </div>
                                <div className='col-2'>
                                    <button className='btn btn-danger'
                                    onClick={removeMember}>
                                        Remove
                                    </button>
                                </div>
                            </div>
                        </div>
                        
                        <div className="row mt-3 border-bottom">
                            <div className="row mb-3">
                                <div className="col-6 lead p-0">
                                    {game.partyInfo.status ? (
                                        'Unlock party'
                                    ) : (
                                        'Lock party'
                                    )}
                                 
    
                                    <OverlayTrigger
                                            delay={{ show: 250, hide: 400 }}
                                            overlay={          
                                                <Tooltip id="options-tooltip" >
                                                    To invite new members party has to be unlocked
                                                </Tooltip>
                                                }
                                        >
                                            <i className="fa-regular fa-circle-question option-info"></i>
                                        </OverlayTrigger>
                                </div>
                                <div className="col-4">

                                {game.partyInfo.status ? 
                                    (
                                        <button className='btn btn-dark full-width'
                                        onClick={lockMutation.mutate}>
                                            Unlock <i className="fa-solid fa-lock-open lock-icon"></i>
                                        </button>
                                    ) : (
                                        <button className='btn btn-dark full-width'
                                        onClick={lockMutation.mutate}>
                                            Lock <i className="fa-solid fa-lock lock-icon"></i>
                                        </button>
                                      
                                    )}

                                </div>
                            </div>                          
                        </div>

                        <div className="row mt-3 border-bottom">
                            <div className="row mb-3">       
                                <div className="col-6 lead p-0">
                                    Delete party
                                    
                                    <OverlayTrigger
                                            delay={{ show: 250, hide: 400 }}
                                            overlay={          
                                                <Tooltip id="options-tooltip" >
                                                    <b>This is irreversible!</b> After deleting party all data will be lost!
                                                </Tooltip>
                                                }
                                        >
                                            <i className="fa-regular fa-circle-question option-info"></i>
                                        </OverlayTrigger>
                                </div>

                                <div className="col-4">
                                    <button className='btn btn-danger full-width'
                                    onClick={deleteParty}>
                                        Delete
                                    </button>
                                </div>
                            </div>
                        </div>

                        <div className="row mt-3">
                            <div className="col p-0 lead mb-2">
                                Promote to host 
                                    <OverlayTrigger
                                        delay={{ show: 250, hide: 400 }}
                                        overlay={          
                                            <Tooltip id="options-tooltip" >
                                                After promoting other member you will become normal member of the group and lose 
                                                access to option panel 
                                            </Tooltip>
                                            }
                                    >
                                        <i className="fa-regular fa-circle-question option-info"></i>
                                    </OverlayTrigger>
                            </div>
                            <div className="row mb-3">
                                <div className='col-6 p-0'>
                                    <select className="form-select" id="players-list"
                                    onChange={determineNewHost}
                                    defaultValue={0}
                                    >
                                        <option key={id} className="active-member-option" value={0}  disabled>Pick a member</option>

                                        {game.partyInfo.activeMembers.map((player) => (
                                            <option key={player.id} className="active-member-option" value={player.id} >{player.name}</option>
                                        ))}
                                        {game.partyInfo.inactiveMembers.map((player) => (
                                            <option key={player.id} className="inactive-member-option" value={player.id} >{player.name}</option>
                                        ))}
                                    </select>
                                </div>
                                
                                <div className='col-4'>
                                    <button className='btn btn-dark full-width'
                                    onClick={promoToHostMutation.mutate}>
                                        Promote
                                    </button>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        : ''}

            {statusMutation.isSuccess ? 
            (  
                <SubmitToast type='success' message='Members status has been changed'/>
            )
            
            : null}

            {lockMutation.isSuccess ? 
            (  
                <SubmitToast type='success' message='Party status has been changed'/>
            )
            : null
            }

            {promoToHostMutation.isSuccess  ? 
                <SubmitToast type='success' message='Host has ben changed'/>
            :   
               ''
            }

            {removeMemberMutation.isSuccess ? 
                <SubmitToast type='success' message='Member has been removed'/>
            :   
                ''
            }


        </>
    )
}

export default OptionPanel;