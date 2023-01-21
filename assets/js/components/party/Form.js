import { useMutation, useQueryClient } from '@tanstack/react-query';
import React, {useEffect, useState} from 'react';
import { useParams } from 'react-router-dom';
import { useQuery } from '@tanstack/react-query';
import SubmitToast from './SubmitToast';
import getData from '../../getData/getData';

/**
 * Form used by party members for voting process
 * 
 * @param {array} activeDay | info about active day for which vote will be added 
 * @returns <Form /> component
 */
const Form = ({activeDay}) => {

    const queryClient = useQueryClient();

    const { id } = useParams();
    const [day,setDay] = useState(1);
    const [month,setMonth] = useState(1);
    const [year, setYear] = useState(1111);
    const [message, setMessage] = useState();
    const [messageStatus, setMessageStatus] = useState();

    const [voteStatus, setVoteStatus] = useState(1);

    const voteRoute = `/game/get-votes/${id}/${year}-${month}-${day}`;
    const voteKey = `${id}-${year}-${month}-${day}-votes`;

    const { data, status } = useQuery({
        queryKey: [voteKey], 
        queryFn: () => getData(voteRoute),
        refetchOnWindowFocus: false,
    });

    useEffect(() => {
        if (typeof activeDay !== 'undefined') {
            const splitedDate = activeDay.date.substring(0,10).split('-');
            setDay(parseInt(splitedDate[2]));
            setMonth(parseInt(splitedDate[1]));
            setYear(splitedDate[0]);
        } 
    },[activeDay]);
   
    const checkVoteStatus = (event) => {
        setVoteStatus(event.target.value);
    }

    const addVote = async(event) => {
        try {
            const vote = await dataMutation.mutateAsync(event);
            if (vote.status == 403) {
                setMessageStatus('fail');
                setMessage('You are not an active member of this party');
            }
            if (vote.status == 200) {
                setMessageStatus('success');
                setMessage('Your vote has been sent');
            }
            setTimeout(() => {
                setMessage();
            },3000);
        } catch (error) {
            console.log('error: ' + error);
        } 
    }

    const dataMutation = useMutation({
        mutationFn: (event) => {
            event.preventDefault();
            const formData = new FormData(event.target)
            const response =  fetch(`/api/game/send-vote/${id}`, {
                method: 'POST',
                body: formData,
            })
            return response;
        },
        onError: (error, variables,context) => {
            console.log(error, variables,context);
        },
        onSuccess: () => {
            queryClient.invalidateQueries([`${id}-`+activeDay.date.substring(0,10)]);
            queryClient.invalidateQueries([voteKey])
        },

    })

    const deleteVoteMutation = useMutation({
        mutationFn: (event) => {
            event.preventDefault();
            const voteId = event.target.id;

            if (confirm('This vote will be deleted permanently! Day status may be changed')) {
                const response =  fetch('/api/vote/delete/'+ voteId, {
                    method: 'DELETE',
                })
                return response;
            }
            
            return  false;

        },
        onSuccess: () => {
            queryClient.invalidateQueries([voteKey]);
            queryClient.invalidateQueries([`${id}-`+activeDay.date.substring(0,10)]);
            setMessageStatus('success');
            setMessage('Your vote has been deleted');

            setTimeout(() => {
                setMessage();
            },3000);
        }
    })

    return(
        <>

            <div className="row g-3">
                {/* FORM */}
                
                <div className="col-xl-6">
                    <div className="border bg-light form-panel">
                    
                    <div className="d-flex flex-row justify-content-center party-header bg-dark bg-gradient mb-2">
                            <div className="">
                            PLACE YOUR VOTE
                            </div>
                        </div>
                            
                        <form name="vote" method="post" onSubmit={addVote}>
                            <div className="row custom-form-row pt-2">
                                <div className="col-3 custom-form-label "> 
                                {/* <span className=""></span> */}
                                    Status
                                </div>
                                <div className="col"> 
                                    <div>
                                        <select className={voteStatus == 0 ? "form-select-lg bg-red " : "form-select-lg bg-green" } onChange={checkVoteStatus} id="vote_vote" name="vote[vote]">
                                            <option className="bg-green" value="1" >I'm in</option>
                                            <option className="bg-red" value="0" >I'm out</option>
                                        </select>
                                    </div>
                                </div>
                            </div>


                            <div className="row hidden-date">
                                <div className="col-3 custom-form-label"> 
                                    Date
                                </div>
                                <div className="col"> 
                                
                                    <div>
                                        <select className="form-select" id="vote_date_month" name="vote[date][month]" readOnly>
                                            <option selected value={month}></option>
                                        </select>
                                        <select className="form-select" id="vote_date_day" name="vote[date][day]" readOnly>
                                            <option selected value={day}></option>
                                        </select>
                                        <select className="form-select" id="vote_date_year" name="vote[date][year]" readOnly>
                                            <option selected value={year}></option>
                                        </select>
                                    </div>
                                </div>
                            </div>

                            <div className="row mt-3 custom-form-row">
                                <div className="col-3 custom-form-label "> 
                                    Start
                                </div>
                                <div className="col"> 
                                
                                    <div className="form-time-input">
                                    <select className="form-select-lg  time-select" id="vote_startTime_hour" name="vote[startTime][hour]"><option value="0">00</option><option value="1">01</option><option value="2">02</option><option value="3">03</option><option value="4">04</option><option value="5">05</option><option value="6">06</option><option value="7">07</option><option value="8">08</option><option value="9">09</option><option value="10">10</option><option value="11">11</option><option value="12">12</option><option value="13">13</option><option value="14">14</option><option value="15">15</option><option value="16">16</option><option value="17">17</option><option value="18">18</option><option value="19">19</option><option value="20">20</option><option value="21">21</option><option value="22">22</option><option value="23">23</option></select>
                                    </div>
                                    <div className="form-time-separator">
                                    :
                                    </div>
                                    <div className="form-time-input">
                                    <select className="form-select-lg time-select" id="vote_startTime_minute" name="vote[startTime][minute]"><option value="0">00</option><option value="1">01</option><option value="2">02</option><option value="3">03</option><option value="4">04</option><option value="5">05</option><option value="6">06</option><option value="7">07</option><option value="8">08</option><option value="9">09</option><option value="10">10</option><option value="11">11</option><option value="12">12</option><option value="13">13</option><option value="14">14</option><option value="15">15</option><option value="16">16</option><option value="17">17</option><option value="18">18</option><option value="19">19</option><option value="20">20</option><option value="21">21</option><option value="22">22</option><option value="23">23</option><option value="24">24</option><option value="25">25</option><option value="26">26</option><option value="27">27</option><option value="28">28</option><option value="29">29</option><option value="30">30</option><option value="31">31</option><option value="32">32</option><option value="33">33</option><option value="34">34</option><option value="35">35</option><option value="36">36</option><option value="37">37</option><option value="38">38</option><option value="39">39</option><option value="40">40</option><option value="41">41</option><option value="42">42</option><option value="43">43</option><option value="44">44</option><option value="45">45</option><option value="46">46</option><option value="47">47</option><option value="48">48</option><option value="49">49</option><option value="50">50</option><option value="51">51</option><option value="52">52</option><option value="53">53</option><option value="54">54</option><option value="55">55</option><option value="56">56</option><option value="57">57</option><option value="58">58</option><option value="59">59</option></select>          
                                    </div>
                                </div>
                            </div>

                            <div className="row mt-3 custom-form-row">
                                <div className="col-3 custom-form-label"> 
                                    Finish
                                </div>
                                <div className="col"> 
                                
                                    <div className="form-time-input">
                                        <select className="form-select-lg time-select" id="vote_finishTime_hour" name="vote[finishTime][hour]"><option value="0">00</option><option value="1">01</option><option value="2">02</option><option value="3">03</option><option value="4">04</option><option value="5">05</option><option value="6">06</option><option value="7">07</option><option value="8">08</option><option value="9">09</option><option value="10">10</option><option value="11">11</option><option value="12">12</option><option value="13">13</option><option value="14">14</option><option value="15">15</option><option value="16">16</option><option value="17">17</option><option value="18">18</option><option value="19">19</option><option value="20">20</option><option value="21">21</option><option value="22">22</option><option value="23">23</option></select>
                                    </div>
                                    <div className="form-time-separator">
                                        :
                                    </div>
                                    <div className="form-time-input">
                                        <select className="form-select-lg time-select" id="vote_finishTime_minute" name="vote[finishTime][minute]"><option value="0">00</option><option value="1">01</option><option value="2">02</option><option value="3">03</option><option value="4">04</option><option value="5">05</option><option value="6">06</option><option value="7">07</option><option value="8">08</option><option value="9">09</option><option value="10">10</option><option value="11">11</option><option value="12">12</option><option value="13">13</option><option value="14">14</option><option value="15">15</option><option value="16">16</option><option value="17">17</option><option value="18">18</option><option value="19">19</option><option value="20">20</option><option value="21">21</option><option value="22">22</option><option value="23">23</option><option value="24">24</option><option value="25">25</option><option value="26">26</option><option value="27">27</option><option value="28">28</option><option value="29">29</option><option value="30">30</option><option value="31">31</option><option value="32">32</option><option value="33">33</option><option value="34">34</option><option value="35">35</option><option value="36">36</option><option value="37">37</option><option value="38">38</option><option value="39">39</option><option value="40">40</option><option value="41">41</option><option value="42">42</option><option value="43">43</option><option value="44">44</option><option value="45">45</option><option value="46">46</option><option value="47">47</option><option value="48">48</option><option value="49">49</option><option value="50">50</option><option value="51">51</option><option value="52">52</option><option value="53">53</option><option value="54">54</option><option value="55">55</option><option value="56">56</option><option value="57">57</option><option value="58">58</option><option value="59">59</option></select>          
                                    </div>
                                </div>
                            </div>

                            <div className="row mt-3 mb-3">
                                <div className="col-12">
                                    <button type="submit" className="btn btn-lg btn-dark">Save</button>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
           
                <div className="col-xl-6 animation">

                {/* INFORMATION */}
                    <div className="border bg-light form-panel animation">
                        <div className="d-flex flex-row justify-content-center party-header bg-dark bg-gradient animation">
                            <div className="p-0">
                            DATE INFO
                            </div>
                        </div>

                        <div className="row">
                            <p className="date-display border-bottom  pb-3 "><b>{day}-{month}-{year}</b></p>
                        </div>
                        <div className="row">
                            <p className="info-display border-bottom pb-3"><b><span className="info-label bg-white">VOTING STATUS</span></b>
                                {typeof activeDay !== 'undefined'
                                && activeDay.status == 'CANCELED' ? ('Some members are unavailable') : ''}
                                {typeof activeDay !== 'undefined'
                                && activeDay.status == 'MISSED' ? ('Schedules missed') : ''}
                                {typeof activeDay !== 'undefined'
                                && activeDay.status == 'VOTED' ? ('Voting in progress') : ''}
                                {typeof activeDay !== 'undefined'
                                && activeDay.status == 'EMPTY' ? ('Noone voted yet') : ''}
                                {typeof activeDay !== 'undefined'
                                && activeDay.status == 'GAMEDAY' ? ('Schedules matched!') : ''}                             
                            </p>
                        </div>
                        <div className="row">
                            <p className="info-display border-bottom pb-3"><b><span className="info-label bg-white">YOUR STATUS</span></b>
                                {typeof activeDay !== 'undefined'
                                && activeDay.playerStatus ? 'Voted' : "You didn't vote"}                       
                            </p>
                        </div>
                        <div className="row">
                            <p className="info-display border-bottom pb-3"><b><span className="info-label bg-white">WAITING FOR</span></b>
                                {typeof activeDay !== 'undefined'
                                &&  activeDay.remainingVoters !== 'undefined'  ? activeDay.remainingVoters + ' member(s)' : ""}                       
                            </p>
                        </div>


                            {typeof activeDay !== 'undefined' && activeDay.status == 'GAMEDAY' ? (
                                <div className="row">
                                    <div className="info-display border-bottom pb-3"><b><span className="info-label bg-white">HOURS</span></b>
                                        <ul> 
                                            {typeof activeDay !== 'undefined'
                                            &&  activeDay.hours !== 'undefined'  ? (
                                                
                                                activeDay.hours.map((range) => (
                                                    <li>{range.start.substring(11,16)+' <-> ' +range.finish.substring(11,16)}</li>
                                                ))
                                            ) : ""} 
                                        </ul>
                                    </div>
                                </div>
                            ) : ''}

                    </div>
                    
                </div>
                
                {/* VOTES */}
                <div className="col-12 table-cell">
                    <div className="border bg-light form-panel">
                        <div className="d-flex flex-row justify-content-center party-header bg-dark bg-gradient">
                            <div className="p-0">
                            YOUR VOTES 
                            </div>
                        </div>

                        <div className="row">
                           {status == 'success' ? (
                            data.votes.map((event) => (
                                <div className='custom-vote-display '>
                                    {!event.voteType ? "I'm out" : event.start+ ' - ' + event.finish}

                                    <span  className="vote-trash">
                                        <i id={event.id} className="fa-solid fa-trash-can" onClick={deleteVoteMutation.mutate}></i>
                                    </span>  
                                </div>
                            ))
                            ) : 'Loading...'}
                        </div>

                    </div>
                </div>
            </div>

            {message && typeof message != 'undefined' ? (
                <SubmitToast type={messageStatus} message={message} />
            ) 
            : null}
        
        </>

    )
}

export default Form;