# Table of contents
1. [Introduction](#introduction)
3. [Stack](#stack)
3. [Description & background](#description)
3. [Backend](#backend)
4. [API](#api)
    1. [Introduction](#api-introduction)
    2. [Endpoints](#api-routes)
5. [Frontend](#frontend)
    1. [Methodology](#front-methodology)
    2. [Components](#front-components)
    3. [React Query](#front-react-query)
5. [Summary](#summary)

# Introduction 
<div id='introduction'></div>

Harmon is a scheduling app designed around recurring activities in premade parties. 
It is a calendar that allow party members to leave their votes and decide which date is proper for next session.
This project is my first attempt to build a big app with REACT frontend. I've paired it with API made with the PHP 8 framework Symfony 6.

I invite you to watch my 3 minute video presentation, where you can find some commentary on the website.

_SHORT VIDEO COMMENTARY on the WEBSITE:_ [youtube.com/watch?v=me0LZkTauHs](https://www.youtube.com/watch?v=me0LZkTauHs)   

You can test the app under this link: [harmon.sasartele.pl/](http://harmon.sasartele.pl/)

# "Stack"
<div id='stack'></div>

Here is a list of tools I used:

- PHP 8.1.9 
- Symfony 6.1 
- REACT.js 18.2 


<div id='description'></div>

# Description & background

Harmon is designed for activities like team sports, board games or poker.

Right now there are three types of members in party:

 - **Active members**: Those users have a right to vote on dates and decide about sessions. They also have a right to change their status into "Inactive"
 - **Inactive members**: Benched users who temporarily can't take part in the activity, or finished their participation and are waiting for a new round. 
    Those members CANNOT take part in voting but they still can see the party lobby. Also, ONLY the PARTY HOST can change the status from "Inactive" to "Active".
 - **Party Host**: The Host has to have one of the above statuses. He has access to the Option panel. The Host can promote another user for this role, but he will lose all of his special rights.

I have some ideas to make this engine more flexible and I am going to put some more work in the near future to make it better. 

Active members place their votes on a specific date and hour in the calendar. When some but not all votes are placed, unless all active members vote on one date, it has "VOTED" status. First exception is when one of active members is unavailable - then this day will get a "CANCELED" status, as all active members are required to form a party. When all votes are placed, there are two possibilities. If all voters decided to pick a common range of hours, the date gets a "MATCH" status. The app will also display the matching hours. If there is no agreement, the date will be marked as "MISS". As party members can vote and delete their votes without a limit, the status of the day will change in real time.  


<div id='backend'></div>

# Backend

I stay loyal to the Symfony Framework - I picked its latest generation for backend. That also made me use PHP in version 8+. My main goal was to create API with required actions and resources for REACT frontend. I've prepared only the endpoints that are required for the app to work properly, so there are no extra resources and data. 

<div id='api'></div>

# API

<div id='api-introduction'></div>

## Introduction

As I've mentioned above, all endpoints function only for essential engine processes. Below you can find all important routes and information about data they return. Authentication is minimal and is operated by Symfony Security Bundle -> [DOCS](https://symfony.com/doc/current/security.html)



<div id='api-routes'></div>

## Enpoints

Here is a list of routes with links to their descriptions.

1. [/api/game/send-vote/{gameId}](#route-/api/game/send-vote/{game})
2. [/api/game/get-votes/{gameId}/{date}](#route-/api/game/get-votes/{game}/{date})
3. [/api/game/info/{gameId}](#route-/api/game/info/{gameId})
3. [/api/game/member-data/{gameId}](#route-/api/game/member-data/{gameId})
3. [/api/game/calendar/{gameId}](#route-/api/game/calendar/{gameId})
3. [/api/game/make-me-inactive/{gameId}](#route-/api/game/make-me-inactive/{gameId})
3. [/api/game/change-user-status/{gameId}/{userId}](#route-/api/game/change-user-status/{gameId}/{userId})
3. [/api/game/remove-member/{gameId}/{userId}](#route-/api/game/remove-member/{gameId}/{userId})
3. [/api/game/delete-party/{gameId}](#route-/api/game/delete-party/{gameId})
3. [/api/game/change-lock-status/{gameId}](#route-/api/game/change-lock-status/{gameId})
3. [/api/game/promote-to-host/{gameId}/{newHostId}](#route-/api/game/promote-to-host/{gameId}/{newHostId})
3. [/api/game/leave/{gameId}](#route-/api/game/leave/{gameId})
3. [/api/game/create](#route-/api/game/create)
3. [/api/vote/delete/{id}](#route-/api/vote/delete/{id})
3. [/api/day/{game}/{date}](#route-/api/day/{game}/{date})
3. [/api/homepage/user](#route-/api/homepage/user)
3. [/api/my-activities](#route-/api/my-activities)




<div id='route-/api/game/send-vote/{game}'></div>

### /api/game/send-vote/{gameId}

Endpoint that processes data from the voting form.  



<div id='route-/api/game/get-votes/{game}/{date}'></div>

### /api/game/get-votes/{gameId}/{date}

Returns a list of votes for a specific date



<div id='route-/api/game/info/{gameId}'></div>

### /api/game/info/{gameId}

Returns information about the party



<div id='route-/api/game/member-data/{gameId}'></div>

### /api/game/member-data/{gameId}

Returns membership status for the currently logged-in user 



<div id='route-/api/game/calendar/{gameId}'></div>

### /api/game/calendar/{gameId}

Returns the calendar data for current month



<div id='route-/api/game/make-me-inactive/{gameId}'></div>

### /api/game/make-me-inactive/{gameId}

Action for leaving the party



<div id='route-/api/game/change-user-status/{gameId}/{userId}'></div>

### /api/game/change-user-status/{gameId}/{userId}

Action for changing the status of a party member. Available only to the party host.



<div id='route-/api/game/remove-member/{gameId}/{userId}'></div>

### /api/game/remove-member/{gameId}/{userId}

Action for removing a member from the party. Available only to the party host.



<div id='route-/api/game/delete-party/{gameId}'></div>

### /api/game/delete-party/{gameId}

Action for deleting the party. Available only to the party host.



<div id='route-/api/game/change-lock-status/{gameId}'></div>

### /api/game/change-lock-status/{gameId}

Action for changing "lock" status of the party. Available only to the party host.

<div id='route-/api/game/promote-to-host/{gameId}/{newHostId}'></div>

### /api/game/promote-to-host/{gameId}/{newHostId}

Action for promoting a different member for the party host. Available only to the party host..



<div id='route-/api/game/leave/{gameId}'></div>

### /api/game/leave/{gameId}

Action used by members to leave the party



<div id='route-/api/game/create'></div>

### /api/game/create

Endpoint responsible for processing the "create party" form



<div id='route-/api/vote/delete/{id}'></div>

### /api/vote/delete/{id}

Action for deleting one of user's votes. Available only to the member who placed this vote.



<div id='route-/api/vote/delete/{id}'></div>

### /api/vote/delete/{id}

Returns info about specific date assigned to the party



<div id='route-/api/homepage/user'></div>

### /api/homepage/user

Returns info about the currently logged-in user.



<div id='route-/api/my-activities'></div>

### /api/my-activities

Returns a list of all parties that the currently logged-in user is a member of



<div id='frontend'></div>

# Frontend

<div id='front-methodology'></div>

## Methodology

This project is an exercise in JS undertaken to polish my skills. From a range of component-based frameworks I've picked REACT. My first intention was to stay as close to docs and native solutions as possible, but during the process I've decided to implement some discrete changes.


<div id='front-components'></div>

## Components

REACT docs mix both class and functional components and I've decided to bet on functional. I didn't create every single component possible. I've tried to follow the DRY principle. Most of the components are recurring modules, there are also some more expanded parts of the code, just to make it a bit cleaner. 

<div id='front-react-query'></div>

## React Query

React Query is the only external library that I've decided to use in this project. This was my solution to synchronize the server and client state. This tool allows for fetching and managing data in such a clean and intuitive way that for this size of project I've resigned from solutions like Redux or similar.
Docs can be found under [This link](https://react-query-v3.tanstack.com/overview)



<div id='summary'></div>

# Summary

One more time I Invite you to test the app under this link: [http://harmon.sasartele.pl/](http://harmon.sasartele.pl/). In my portfolio there is also one more big project. It is oriented more into PHP and backend. Links can be found below

 - HSBG docs - [github.com/Sapozarom/HSBG-public](https://github.com/Sapozarom/HSBG-public)
 - HSBG video commentary - [youtube.com/watch?v=3bTyWtesYI0](https://www.youtube.com/watch?v=3bTyWtesYI0)
 - HSBG www - [hsbg.sasartele.pl]( http://hsbg.sasartele.pl/)

If you like my projects and think that they are worth some attention, here you can find my [LinkedIn profile]( https://www.linkedin.com/in/seb-koch/)




