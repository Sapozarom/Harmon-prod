import { useMutation, useQueryClient } from '@tanstack/react-query';
import React from 'react';
import { useNavigate } from 'react-router-dom';

/**
 * Function that handles rendering Create Party view
 * 
 * @returns | <CreatePart /> component
 */
const CreateParty = () => {

    const queryClient = useQueryClient();
    const navigate = useNavigate();
    const createGameMutation = useMutation({
        mutationFn: (event) => {
            event.preventDefault();
            const formData = new FormData(event.target)
            const response =  fetch('/api/game/create', {
                method: 'POST',
                body: formData,
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
            <div className="container mt-3">
                <div className="row justify-content-center">
                    <div className="col-9 col-auto bg-light">
                        <div className="row justify-content-center">
                            <h1 className="display-6 text-center">Create Party</h1>

                            <form name="game" method="post" onSubmit={createGameMutation.mutate}>
                                <div id="game">
                                    <div className="mb-3">
                                        <label htmlFor="game_name" className="form-label">Party name:</label>
                                        <input type="text" id="game_name" name="game[name]" className="form-control" required/>        
                                    </div>
                                    <div className="mb-3">
                                        <label htmlFor="game_title" className="form-label">Activity name:</label>
                                        <input type="text" id="game_title" name="game[title]" className="form-control" required/>        
                                    </div>
                                    <div className="mb-3">
                                        <label htmlFor="game_description" className="form-label">Descriprion:</label>
                                        <textarea id="game_description" name="game[description]" className="form-control" required>
                                        </textarea>        
                                    </div>
                                    <div className="mb-3">
                                        {/* <label htmlFor="game_minSessionLength" className="form-label">Minimal session length (minutes):</label> */}
                                        <input type="text" id="game_minSessionLength" name="game[minSessionLength]" className="form-control" hidden/>
                                    </div>
                                    <div className="mb-3">
                                        <button type="submit" id="game_Save" name="game[Save]" className="btn btn-dark btn-lg btn">Save</button>
                                    </div>
                                </div>
                            </form>
                        </div> 
                    </div>
                </div>
            </div>
        </>
    )
}

export default CreateParty;