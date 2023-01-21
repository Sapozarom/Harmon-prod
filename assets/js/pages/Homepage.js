import React from 'react';
import Box from '../components/homepage/Box';

/**
 * Default function that handles rendering Homepage
 * 
 * @returns | <Homepage /> component
 */
const Homepage = () => {

    const box1 = {
        'title': 'Create party',
        'icon': 'fa-regular fa-users-between-lines fa-8x m-3 mb-5',
        'text': 'Make a new recouring activity to manage'
    };

    const box2 = {
        'title': 'Add Members',
        'icon': 'fa-regular fa-people-pulling fa-8x m-3 mb-5',
        'text': "Invite your friends"
    };

    const box3 = {
        'title': 'Find date',
        'icon': 'fa-regular fa-calendar-check fa-8x m-3 mb-5',
        'text': ' Place your votes and app will do the rest'
    };

    const boxContent = [box1, box2, box3];

    return(
        <>
            <div className='row justify-content-center mt-3'>
                    <h1 className='display-6 text-center universal-shadow-text'>
                        Welcome
                    </h1>
                <div className='col-xl-9'>
                    
                    <p className='lead'>
                    HARMON is an app that helps to find matching schedules in party of few people arranged for reccuring
                    activities like sports, board games, digital games or poker. The methodology is wrapaed in 3 simple points below.
                    You can also get full documentation on my <b><a href="https://github.com/Sapozarom/Harmon-prod" className="text-dark">Github</a></b>
                    </p>
                </div>
            </div>
            
            <div className='row justify-content-center mt-5 mb-5'>
                <div className='col-auto'>
                    <iframe width="560" height="315" src="https://www.youtube.com/embed/me0LZkTauHs" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen></iframe>
                </div>

            </div>

            <div className='row justify-content-center mt-3'>
                <div className='col-xl-9 '>
                    <div className='row justify-content-center g-4'>
                        {boxContent.map((box) => (
                            <Box key={box.title} content={box} />
                        ))}
                    </div>
                </div>   
            </div>
        </>

    )
}

export default Homepage;