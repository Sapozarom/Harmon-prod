import React, {useState} from 'react';
import OptionPanel from '../components/hostOptions/OptionsPanel';
import PartyInfo from '../components/party/PartyInfo';

/**
 * Default function that handles rendering Option Panel of party host
 * 
 * @returns | <HostOptions /> component
 */
const HostOptions = () => {

    return(
        <>
            <div className='row justify-content-center mt-4'>
                <h1 className='display-6 text-center universal-shadow-text'>
                    Party host panel
                </h1>
            </div>

            <div className='row form-panel'>
            <div className='col-xl-6 form-panel'>           
                    <OptionPanel />
                </div>
                
                <div className='col-xl-6 form-panel'>
                    <PartyInfo />
                </div>
            

            </div>

            
            
        </>
    )
}

export default HostOptions;