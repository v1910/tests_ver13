//Statistics.js------------------
// Show Statistics

import React from 'react';

import './Statistics.css';

import { useSelector, useDispatch } from 'react-redux';

import { useEffect } from 'react';

import  { ShowCurrentStatistics } from "../showCurrentStatistics/ShowCurrentStatistics.js";

let showHideStatistics   = null;

let statistics_wrapper_visibility = null;

let currentStatistics         = null;

let currentStatisticsServer   = null;


export function Statistics() {

//console.log('Statistics +++++++++++') 

    showHideStatistics = useSelector((store) => store.showHideStatistics);

    currentStatistics = useSelector((store) => store.currentStatistics);

    statistics_wrapper_visibility = useSelector((store) => store.statistics_wrapper_visibility);


    let dispatch = useDispatch();

   
    if(currentStatistics !== null) {
        currentStatisticsServer = '/get' + currentStatistics;
    } else currentStatisticsServer = '/home';




//console.log('Jokes: currentJokes=',currentJokes);
//console.log('Jokes: currentJokesServer=',currentJokesServer);



    useEffect(() => {
        fetch(currentStatisticsServer)
        .then(response => response.json())
        .then(statistics => {
            dispatch({type: 'Statistics_statistics', 
            payload: {
                statistics: statistics
            }
            })

        })
    });

    useEffect(() => {
        fetch('/getAllInsertSections')
        .then(response => response.json())
        .then(all_input_sectionsDB => {
            dispatch({type: 'Statistics_AllInsertSectionsDB', 
            payload: {
                all_input_sectionsDB: all_input_sectionsDB[0]
            }
            })
        })
    });



   
//console.log('Jokes: showCurrentJokesWork=',showCurrentJokesWork);


    if(showHideStatistics === 'showHideStatistics')  
                        return  <section id="statistics_wrapper" style={statistics_wrapper_visibility}>
                                        <ShowCurrentStatistics />
                                </section>    
    else                return   <section id="statistics_wrapper" >
                                </section>    

}//end of Statistics.js
