//HeaderStatistics.js------------------
//Show Statistics menu

import React from 'react';

import  "./HeaderStatistics.css";

import { useSelector, useDispatch } from 'react-redux';

let showHideStatistics  = null;
let all_input_sections  = null;
let all_input_sectionsDB= null;

export function HeaderStatistics() {

//    console.log('HeaderStatistics-----');  

    showHideStatistics  = useSelector((store) => store.showHideStatistics);

    all_input_sections  = useSelector((store) => store.all_input_sections);

    all_input_sectionsDB  = useSelector((store) => store.all_input_sectionsDB);

    
    let dispatch = useDispatch();

    let menuStatistics = 
    <div id="header_menu_statistics" className="header_menu_item">
        Statistics
    </div>

    
    return  (
            <div  id="header_menu_statistics_cont_id"  
                  fontSize="11px" 
                  onClick =    {() => {   dispatch({  type: 'HeaderStatistics', 
                                                        payload: {
                                                            showHideTest:       'showHideStatistics',
                                                            showHideWords:      'showHideStatistics',  
                                                            showHideListen:     'showHideStatistics',                                                                                  
                                                            showHidePhrases:    'showHideStatistics',    
                                                            showHideJokes:      'showHideStatistics',
                                                            showHideStatistics: 'showHideStatistics',
                                                            list_tests_wrapper: false,
                                                            list_words_wrapper: false,
                                                            list_listen_wrapper:false,
                                                            phrases:            '',
                                                            statistics_wrapper_visibility: {display: 'block'},
                                                            all_input_sectionsDB:
                                                                {
                                                                  _id: 0,
                                                                  all_input_tests:      all_input_sections.all_input_tests + all_input_sectionsDB.all_input_tests,
                                                                  all_input_words:      all_input_sections.all_input_words + all_input_sectionsDB.all_input_words,
                                                                  all_input_listen:     all_input_sections.all_input_listen + all_input_sectionsDB.all_input_listen,
                                                                  all_input_phrases:    all_input_sections.all_input_phrases + all_input_sectionsDB.all_input_phrases,
                                                                  all_input_jokes:      all_input_sections.all_input_jokes + all_input_sectionsDB.all_input_jokes,
                                                                  all_input_statistics: all_input_sectionsDB.all_input_statistics + 1
                                                                },
                                                            all_input_sections:  
                                                                {
                                                                    _id: 0,
                                                                    all_input_tests: 0,
                                                                    all_input_words: 0,
                                                                    all_input_listen: 0,
                                                                    all_input_phrases: 0,
                                                                    all_input_jokes: 0,
                                                                    all_input_statistics: 0
                                                                }
                                                        }
                                                    });

                                        }
                                }                                     
            >
                {menuStatistics}
            </div>
    )
}//end of HeaderStatistics --------------------