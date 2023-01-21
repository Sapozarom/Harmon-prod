import { useMutation, useQueryClient } from '@tanstack/react-query';
import React from 'react';
import Modal from 'react-bootstrap/Modal';

/**
 * Renders modal with simple option panel for normal party member
 * 
 * @param {function} showMemberOptions | handles toggleing options off
 * @param {function} handleCloseMemberOpt | handle turning option panell off
 * @param {number} partyId | ID of the party
 * @param {array} activeMember | info about current User
 * @returns <MemberOption /> component
 */
function MemberOptions({showMemberOptions, handleCloseMemberOpt, partyId, activeMember}) {

  const queryClient = useQueryClient();

  const inactiveMutation = useMutation({
    mutationFn: (event) => {
        event.preventDefault();
        const response =  fetch('/api/game/make-me-inactive/'+ partyId, {
            method: 'POST',
            body: true,
        })
        
        return response;
    },
    onSuccess: () => {
        queryClient.invalidateQueries(['party-list']);
    }
  })

  const leavePartyeMutation = useMutation({
    mutationFn: (event) => {
        event.preventDefault();
        const response =  fetch('/api/game/leave/'+ partyId, {
            method: 'POST',
            body: true,
        })

        return response;
    },
    onSuccess: () => {
        queryClient.invalidateQueries(['party-list']);
    }
  })


  return (
    <>
      <Modal show={showMemberOptions} onHide={handleCloseMemberOpt}>
        <Modal.Header closeButton>
          <Modal.Title>Party Options for {partyId}</Modal.Title><small> </small>
        </Modal.Header>
        <Modal.Body>
          {activeMember ? 
          (
            <div>
              <p>
                  <a className="btn btn-dark dropdown-toggle" data-bs-toggle="collapse" href="#makeMeInactive" role="button" aria-expanded="false" aria-controls="makeMeInactive">
                      Make me inactive
                  </a>
              </p>
              <div className="collapse" id="makeMeInactive">
                  <div className="card card-body">
                          Inactive users can't vote  <b> Only a party creator can change your status to active</b>
                      <a className="btn btn-danger mt-2"
                        onClick={inactiveMutation.mutate}>
                          Proceed
                      </a>
                  </div>
              </div>
            </div>
          ) : ''}
          

          <p>
              <a className="btn btn-dark dropdown-toggle mt-2" data-bs-toggle="collapse" href="#leaveGame" role="button" aria-expanded="false" aria-controls="leaveGame">
                  Leave party
              </a>
          </p>
          <div className="collapse" id="leaveGame">
              <div className="card card-body">
                  After you leave party, you would not be able to open game panel. <b>You can't rejoin party if it's locked</b>
                  <a className="btn btn-danger mt-2"
                  onClick={leavePartyeMutation.mutate}>
                    Proceed
                  </a>
              </div>
          </div>

        </Modal.Body>
        <Modal.Footer>

        </Modal.Footer>
      </Modal>
    </>
  );
}

export default MemberOptions;