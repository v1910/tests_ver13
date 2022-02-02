//ShowCurrentStatistics.js: show Statistics

import React from "react";

import ReactDOM from 'react-dom';

import { useSelector, useDispatch } from 'react-redux';

import './ShowCurrentStatistics.css';

import { useEffect } from 'react';

let statistics_all              = null;
let all_input_sections          = null;
let thanksStatistics            = null;
let statistics_form_visibility  = null;
let all_input_sectionsDB        = null;
let state_reg                   = 0;
let all_input_sections_sum      = null;

export function ShowCurrentStatistics() {  //---------------------------------------

//console.log('ShowCurrentStatistics +++++++++++')   

      // Transform html-text into text
  const renderHTML =  (rawHTML: string) => React.createElement("div", { dangerouslySetInnerHTML: { __html: rawHTML }});//----------

  let dispatch = useDispatch();  

    
  thanksStatistics = useSelector((store) => store.thanksStatistics);

  statistics_form_visibility = useSelector((store) => store.statistics_form_visibility);

  statistics_all = useSelector((store) => store.statistics);
 
  all_input_sections = useSelector((store) => store.all_input_sections);

  all_input_sectionsDB = useSelector((store) => store.all_input_sectionsDB); //the object from DB

//console.log('ShowCurrentStatistics: all_input_sections=', all_input_sections) 

//console.log('ShowCurrentStatistics: all_input_sectionsDB=', all_input_sectionsDB) 

//console.log('ShowCurrentStatistics: thanksStatistics=', thanksStatistics) 

//  if(state_reg === 0){
/* 
    const axios = require('axios')

    axios.post('/postAllInsertSections', {
        sections: all_input_sectionsDB
    })
*/
//  }//if

//  if((state_reg > 0) && (statistics_form_visibility === {display: 'none'})){thanksStatistics = null}; // Hide: Thank you!

//console.log('ShowCurrentStatistics: before: state_reg=', state_reg);     
//  state_reg++;
//console.log('ShowCurrentStatistics: after: state_reg=', state_reg);       


/*
  all_input_sections = {
    _id: 0,
    all_input_tests: 0,
    all_input_words: 0,
    all_input_listen: 0,
    all_input_phrases: 0,
    all_input_jokes: 0,
    all_input_statistics: 0
  }; // all inputs in every section
*/
//  dispatch({type: 'Statistics_AllInsertSections', 
//    payload: {all_input_sections: all_input_sections}
//  })


  let all_input_tests       = 0;
  let meen_tests            = 0;
  let min_tests             = 6;
  let max_tests             = 0;

  let all_input_words       = 0;
  let meen_words            = 0;
  let min_words             = 6;
  let max_words             = 0;

  let all_input_listen      = 0;
  let meen_listen           = 0;
  let min_listen            = 6;
  let max_listen            = 0;

  let all_input_phrases     = 0;
  let meen_phrases          = 0;
  let min_phrases           = 6;
  let max_phrases           = 0;

  let all_input_jokes       = 0;
  let meen_jokes            = 0;
  let min_jokes             = 6;
  let max_jokes             = 0;

  let all_input_statistics  = 0;
  let meen_statistics       = 0;
  let min_statistics        = 6;
  let max_statistics        = 0;

  let statistics_all_length = 0;

  //focus for Statistics
  const el = document.getElementById('statistics_wrapper');
  el.scrollIntoView({block: "start", behavior: "smooth"});

  //console.log('ShowCurrentStatistics statistics_all=',statistics_all)             
  //console.log('ShowCurrentStatistics all_input_sections=',all_input_sections)
  

  //all inputs
  all_input_tests      = all_input_sectionsDB.all_input_tests;
  all_input_words      = all_input_sectionsDB.all_input_words;
  all_input_listen     = all_input_sectionsDB.all_input_listen;
  all_input_phrases    = all_input_sectionsDB.all_input_phrases;
  all_input_jokes      = all_input_sectionsDB.all_input_jokes;
  all_input_statistics = all_input_sectionsDB.all_input_statistics;

//console.log('ShowCurrentStatistics all_input_sections[0]=',all_input_sections[0])  
//console.log('ShowCurrentStatistics all_input_tests=',all_input_tests)  
//console.log('ShowCurrentStatistics all_input_tests=',all_input_words)  

  statistics_all_length = statistics_all.length;
 
  for(let i=0; i < statistics_all_length; i++){
    
//console.log('ShowCurrentPhrases el=',el)  

    // meen
    meen_tests += statistics_all[i].tests/statistics_all_length;

    meen_words += statistics_all[i].words/statistics_all_length;

    meen_listen += statistics_all[i].listen/statistics_all_length;

    meen_phrases += statistics_all[i].phrases/statistics_all_length;

    meen_jokes += statistics_all[i].jokes/statistics_all_length;

    meen_statistics += statistics_all[i].statistics/statistics_all_length;

    //min
    if(min_tests > statistics_all[i].tests) min_tests = statistics_all[i].tests;

    if(min_words > statistics_all[i].words) min_words = statistics_all[i].words;

    if(min_listen > statistics_all[i].listen) min_listen = statistics_all[i].listen;

    if(min_phrases > statistics_all[i].phrases) min_phrases = statistics_all[i].phrases;

    if(min_jokes > statistics_all[i].jokes) min_jokes = statistics_all[i].jokes;

    if(min_statistics > statistics_all[i].statistics) min_statistics = statistics_all[i].statistics;

    //max
    if(max_tests < statistics_all[i].tests) max_tests = statistics_all[i].tests;    

    if(max_words < statistics_all[i].words) max_words = statistics_all[i].words;

    if(max_listen < statistics_all[i].listen) max_listen = statistics_all[i].listen;

    if(max_phrases < statistics_all[i].phrases) max_phrases = statistics_all[i].phrases;

    if(max_jokes < statistics_all[i].jokes) max_jokes = statistics_all[i].jokes;

    if(max_statistics < statistics_all[i].statistics) max_statistics = statistics_all[i].statistics;
  
  }//for

  //Round to x.y
  meen_tests = meen_tests.toFixed(1);

  meen_words = meen_words.toFixed(1);

  meen_listen = meen_listen.toFixed(1);

  meen_phrases = meen_phrases.toFixed(1);

  meen_jokes = meen_jokes.toFixed(1);

  meen_statistics = meen_statistics.toFixed(1);
//  if(showHideStatistics) {
//    window.location.hash = 'statistics_wrapper';
//  }

  let after_input = 'All_inputs: all inputs of users.<br> Meen: arithmetic mean of qualitative user ratings.<br> Min: minimal value of qualitative user ratings.<br> Max: maximum value of qualitative user ratings.';
 
  after_input = renderHTML(after_input);


  return (<div className="body_statistics">
            <table border="1" className="statistics_form">
            <caption>The table below shows user quality control data for sections of the site
              <p></p>
            </caption>
            
              <tr>
                <td>Sections</td>
                <td>All inputs</td>
                <td>Meen</td>
                <td>Min</td>
                <td>Max</td>
              </tr>
              <tr>
                <td className="first_column">TESTS</td>
                <td>{all_input_tests}</td>
                <td>{meen_tests}</td>
                <td>{min_tests}</td>
                <td>{max_tests}</td>
              </tr>
              <tr>
                <td className="first_column">WORDS</td>
                <td>{all_input_words}</td>
                <td>{meen_words}</td>
                <td>{min_words}</td>
                <td>{max_words}</td>
              </tr>
              <tr>
                <td className="first_column">LISTEN</td>
                <td>{all_input_listen}</td>
                <td>{meen_listen}</td>
                <td>{min_listen}</td>
                <td>{max_listen}</td>
              </tr>
              <tr>
                <td className="first_column">PHRASES</td>
                <td>{all_input_phrases}</td>
                <td>{meen_phrases}</td>
                <td>{min_phrases}</td>
                <td>{max_phrases}</td>
              </tr>
              <tr>
                <td className="first_column">JOKES</td>
                <td>{all_input_jokes}</td>
                <td>{meen_jokes}</td>
                <td>{min_jokes}</td>
                <td>{max_jokes}</td>
              </tr>
              <tr>
                <td className="first_column">STATISTICS</td>
                <td>{all_input_statistics}</td>
                <td>{meen_statistics}</td>
                <td>{min_statistics}</td>
                <td>{max_statistics}</td>
              </tr>
            </table>
            <div className="after_table1">
              {after_input}
            </div> 
            <div className="white_border"></div>
            <div className="body_statistics"  style={statistics_form_visibility}>
              <h4>Please enter your quality control of the sections of the site below. This will improve the quality of the site.</h4>
              <form className="statistics_form" action="/Statistics" method="post" name="form_statistics">
                  <table  border="1" className="statistics_form">
                    <tr>
                      <td className="first_column">TESTS</td>
                      <td>
                        <select id="statistics_select_tests" className="statistics_select" size="0" name="tests">
                          <option value="1">1</option>
                          <option value="2">2</option>
                          <option value="3">3</option>
                          <option value="4">4</option>
                          <option selected="selected" value="5">5</option>                    
                        </select>
                      </td>
                    </tr>
                    <tr>
                      <td className="first_column">WORDS</td>
                      <td>
                        <select id="statistics_select_words" className="statistics_select"size="0" name="words">
                          <option value="1">1</option>
                          <option value="2">2</option>
                          <option value="3">3</option>
                          <option value="4">4</option>
                        <option selected="selected" value="5">5</option>                    
                      </select>                  
                      </td>
                    </tr>
                    <tr>
                      <td className="first_column">LISTEN</td>
                      <td>
                        <select id="statistics_select_listen" className="statistics_select"size="0" name="listen">
                          <option value="1">1</option>
                          <option value="2">2</option>
                          <option value="3">3</option>
                          <option value="4">4</option>
                          <option selected="selected" value="5">5</option>                    
                        </select>                  
                      </td>
                    </tr>
                    <tr>
                      <td className="first_column">PHRASES</td>
                      <td>
                        <select id="statistics_select_phrases" className="statistics_select"size="0" name="phrases">
                          <option value="1">1</option>
                          <option value="2">2</option>
                          <option value="3">3</option>
                          <option value="4">4</option>
                          <option selected="selected" value="5">5</option>                    
                        </select>   
                      </td>
                    </tr>           
                    <tr>
                      <td className="first_column">JOKES</td>
                      <td>
                        <select id="statistics_select_jokes" className="statistics_select" size="0" name="jokes">
                          <option value="1">1</option>
                          <option value="2">2</option>
                          <option value="3">3</option>
                          <option value="4">4</option>
                          <option selected="selected" value="5">5</option>                    
                        </select>                                    
                      </td>
                    </tr>     
                    <tr>                
                      <td className="first_column">STATISTICS</td>
                      <td>
                        <select id="statistics_select_statistics" className="statistics_select" size="0" name="statistics">
                          <option value="1">1</option>
                          <option value="2">2</option>
                          <option value="3">3</option>
                          <option value="4">4</option>
                          <option selected="selected" value="5">5</option>                    
                        </select>                  
                      </td>
                    </tr>                  
                    <tr>
                      <td colspan="2">You can write your comments here:</td>
                    </tr>
                    <tr>
                      <td colspan="2">
                        <textarea id="statistics_textarea_comments" className="statistics_textarea" name="statistics_comments"></textarea>
                      </td>
                    </tr>
                  </table>
                  <div id="#statistics_submit_cont">
                    <input id="statistics_submit"  type="submit" value="SEND" 
                      onClick =    {() => {   dispatch({  type: 'ShowCurrentStatisyics_thankYou', 
                      payload: {
                        thanksStatistics:   'Thank you!',
                        statistics_form_visibility: {display: 'none'} 
                                }
                                                      });

                                          }
                                  }                                      
                    />
                  </div>
              </form>
            </div>
            <div className="thanksStatistics">{thanksStatistics}</div>
          </div>
         )
  
}//---end of ShowCurrentStatistics

/*
    if(thanksStatistics === 'Thank you!') thanksStatistics = null;

    dispatch({type: 'Statistics_thanksStatistics', 
        payload: {thanksStatistics: thanksStatistics}
    })
*/
