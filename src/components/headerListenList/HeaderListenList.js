//HeaderListenList.js------------------

import React from 'react';

import { useSelector, useDispatch } from 'react-redux';

import  "./HeaderListenList.css";

//import  { ShowCurrentTest } from "../showCurrentTest/ShowCurrentTest.js";


let list_tests_wrapper  = null;

let nAudio              = null;

let list_listen_wrapper = null;

let all_input_sections  = null;


export function HeaderListenList() {

//console.log('HeaderTestsList -------------');


    let dispatch = useDispatch();  

    
    nAudio = useSelector((store) => store.nAudio);

    list_listen_wrapper = useSelector((store) => store.list_listen_wrapper);

    all_input_sections = useSelector((store) => store.all_input_sections);

    
/*
    const currentTests = useSelector((store) => store.currentTest);

    list_tests_wrapper = useSelector((store) => store.list_tests_wrapper); 
*/
//console.log('1 HeaderistenList:  list_listen_wrapper=',list_listen_wrapper);
//    console.log('HeaderTestsList count_questions_test=',count_questions_test);
    
    let work2 = [];
    let work3 = '';

    for(let kk = 1; kk <= nAudio; kk++){
            work3 = 'STORY' + kk;
            work2[kk-1] =  (<div id={work3} class="menu_test" 
                                               fontSize="11px" 
                                               key = {kk}
                                               value = {kk}
                                               onClick =    {() => dispatch({  type: 'HeaderListenList', 
                                                                                payload: {
                                                                                    currentAudio:       kk-1, 
                                                                                    showHideTest:       'showHideListen',
                                                                                    showHideWords:      'showHideListen',  
                                                                                    showHideListen:     'showHideListen',                                                                                  
                                                                                    showHidePhrases:    'showHideListen',
                                                                                    showHideJokes:      'showHideListen',
                                                                                    showHideStatistics: 'showHideListen',
                                                                                    showHideListenText: false,
                                                                                    phrases:            '',
                                                                                    list_tests_wrapper: 'hidden',
                                                                                    list_words_wrapper: 'hidden',
                                                                                    statistics_wrapper_visibility: {display: 'none'},
                                                                                    all_input_sections:  
                                                                                        {
                                                                                            _id: 0,
                                                                                            all_input_tests: all_input_sections.all_input_tests,
                                                                                            all_input_words: all_input_sections.all_input_words,
                                                                                            all_input_listen: all_input_sections.all_input_listen + 1,
                                                                                            all_input_phrases: all_input_sections.all_input_phrases,
                                                                                            all_input_jokes: all_input_sections.all_input_jokes,
                                                                                            all_input_statistics: all_input_sections.all_input_statistics
                                                                                        }
                                                                                }
                                                                            })
                                                            }
                            >
                                {work3}
                            </div>)
    }

    if(list_listen_wrapper === 'visible') return work2
    else return null;

}// end of HeaderListenList------------


