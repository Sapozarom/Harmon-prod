import React, { useState } from 'react';
import { ToastContainer } from 'react-bootstrap';
import Toast from 'react-bootstrap/Toast';

/**
 * Recuring Toast that display info after user actions
 * 
 * @param {string} type 
 * @param {string} message 
 * @returns <SubmitToast /> component
 */
const SubmitToast = ({type, message}) => {

    const [showA, setShowA] = useState(true);

    const toggleShowA = () => setShowA(!showA);

    return (

            <ToastContainer className='toasted' containerPosition='absolute' position='middle-center'>
                <Toast bg={type} show={showA} onClose={toggleShowA} delay={2000} autohide>
                    <Toast.Header>

                        <strong className="me-auto">{message}</strong>

                    </Toast.Header>
                </Toast>
            </ToastContainer>
    
    );
}

export default SubmitToast;
