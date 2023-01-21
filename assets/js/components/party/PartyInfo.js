
import { useQuery } from '@tanstack/react-query';
import React from 'react';
import { useParams } from 'react-router-dom';
import getData from '../../getData/getData';


/**
 * Handles rendering Party Info panel
 * 
 * @returns <partyInfo /> component
 */
const PartyInfo = () => {

    const { id } = useParams();
    
    const gameDataRoute = `/game/info/${id}`
    const { data: game, status: gameStatus } = useQuery({
        queryKey: ['gameData'], 
        queryFn: () => getData(gameDataRoute),
    });

    return(
        <>
                {gameStatus == 'success' ? (
                    <div className="row mt-3">
                        <div className="col-xl">
                            <div className="border bg-light form-panel">
                                <div className="d-flex flex-row justify-content-center party-header bg-dark bg-gradient">
                                    <div className="p-0">
                                        PARTY INFO
                                    </div>
                                </div>

                                <div className="row">
                                    <div className="col-6 ">
                                        <p className="party-name border-bottom pt-2 pb-3"><b><span className="info-label bg-white">PARTY NAME</span></b> {game.partyInfo.name}</p>
                                    </div>
                                    <div className="col-6">
                                        <p className="party-name  border-bottom pt-2 pb-3"><b><span className="info-label bg-white">ACTIVITY</span></b> {game.partyInfo.activity}</p>
                                    </div>
                                </div>
                                
                                <div className="row">
                                    <p className="info-display border-bottom  lead pb-3"><b><span className="info-label bg-white">DESCRIPTION</span></b> {game.partyInfo.description}</p>
                                </div>
                                <div className="row">
                                    <p className="info-display border-bottom pb-3">
                                        <b><span className="info-label bg-white">MEMBERS</span></b>
                                        {game.partyInfo.activeMembers.map((player) => (
                                            <span key={player.id} className="player-name"><b>{player.name}</b> </span>
                                        ))}
                                        {game.partyInfo.inactiveMembers.map((player) => (
                                            <span key={player.id} className="player-name"> {player.name}</span>
                                        ))}
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                ) : ''}

        </>
    )
}

export default PartyInfo;