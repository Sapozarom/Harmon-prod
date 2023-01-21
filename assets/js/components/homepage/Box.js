import React from 'react';

/**
 * Handles display of recurring box on Homepage
 * 
 * @param {array} content 
 * @returns <Box /> component
 */
const Box = ({content}) => {
        return (
        <>
            <div className="col-md-4">
                <div className="box">
                    <div className="d-flex flex-row justify-content-center party-header pt-1 pb-1 bg-gradient">
                        {content.title}
                    </div>
                    <div className="d-flex flex-row justify-content-center bg-light bg-gradient pt-5">
                        <i className={content.icon}></i>
                    </div>
                    <div className="d-flex flex-row justify-content-center bg-light p-2 border fw-light text-center text-md bg-gradient">
                        {content.text}
                    </div>
                </div>
            </div>
        </>
        )
    }


export default Box