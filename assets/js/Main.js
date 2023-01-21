import React from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter, Routes, Route } from "react-router-dom"
import Logout from "./pages/Logout";
import Layout from "./pages/Layout";
import Homepage from "./pages/Homepage";
import Register from './pages/Register';
import Party from "./pages/Party";
import MyActivities from "./pages/MyActivities";
import HostOptions from "./pages/HostOptions";
import getData from './getData/getData';
import { QueryClient, QueryClientProvider, useQuery } from '@tanstack/react-query';
import Login from './pages/Login';
import CreateParty from './pages/CreateParty';
import PartyInvite from './pages/PartyInvite';

/**
 * Main function that handles the core of website
 * 
 * @returns <Main /> component with all routes and components asigned to this routes
 */
const Main = () => {

    const userRoute = '/homepage/user';
    
    const { data, status } = useQuery(['user'], () => getData(userRoute));

    return (
        <>
        {status == "success" ? (
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<Layout user={data.user}/>}>
                            <Route index element={<Homepage />} />
                            <Route path="my-activities" element={<MyActivities />} />
                            <Route path="party/show/:id" element={<Party />} />
                            <Route path="party/options/:id" element={<HostOptions />} />
                            <Route path="party/create" element={<CreateParty />} />
                            <Route path="party/invite/:slug" element={<PartyInvite />} />
                            <Route path="logout" element={<Logout />} />
                            <Route path="login" element={<Login />} />
                            <Route path="register" element={<Register />} />
                    </Route>
                </Routes>
            </BrowserRouter>
        ) : (
            'loading'
        ) }
            
        </>
    )
}



const MainPage = () => {
    
    const queryClient = new QueryClient();

        return(
            <QueryClientProvider client={queryClient}>
                <Main />
            </QueryClientProvider>
        );
}

export default MainPage;

const container = document.getElementById('root');
const root = createRoot(container);
root.render(
    <MainPage  />
);




