//ShowCurrentListen.js: show a word

import React from "react";

import ReactDOM from 'react-dom';

import { useSelector, useDispatch } from 'react-redux';

import { useEffect } from 'react';

//import { vv } from "../../audio/vv.js";

import './ShowCurrentListen.css';



let currentAudio            = null;

let path_audio              = null;

let title_button            = 'Show text';

let content_audio           = null;

let showHideListenText      = false;

let listen_text_visibility  = {display: 'none'};


export function ShowCurrentListen() {  //---------------------------------------

//  console.log('ShowCurrentListen +++++++++++')     

  

  currentAudio        = useSelector((store) => store.currentAudio) + 1;

  showHideListenText  = useSelector((store) => store.showHideListenText);

  content_audio       = useSelector((store) => store.content_audio);

  path_audio          = '/audio/sound/audio' + currentAudio + '.mp3';


  if(showHideListenText){

    title_button  = 'Hide text';
    listen_text_visibility = {display: 'block'} 

  } else {
    title_button  = 'Show text';
    listen_text_visibility = {display: 'none'} 
//    content_audio = null;
  } 



  let dispatch = useDispatch();  

//console.log('ShowCurrentListen: currentAudio=',currentAudio);

  useEffect(() => {
    fetch('/getListenTextFile/'+currentAudio)
    .then(response => response.json())
    .then(text_file => {
        dispatch({type: 'ShowCurrentListenTextFile', 
                  payload: { content_audio: text_file }
        })
    })
  }); 


  let show_listen = (
    <div className="listen_cont_all">
      <div className='listen_body'>
        <div id="listen">
          <figure>
            <figcaption>Listen:</figcaption>
            <audio  
                  controls
                  src={path_audio}>
                      Your browser does not support the
                      <code>audio</code> element.
            </audio>
          </figure>
        </div>  
      </div>
      <div className="listen_button_cont">
        <button id="listen_button" onClick=
          {() => dispatch({   type: 'ShowCurrentListen', 
                              payload: {showHideListenText: !showHideListenText}
                         })  
          }
        >{title_button}</button>
      </div>
      <div id="listen_text" style={listen_text_visibility}>
          {content_audio}
      </div>
    </div>
); 

  const el = document.getElementById('listen_wrapper');
  el.scrollIntoView({block: "start", behavior: "smooth"});

  return show_listen;

  
}//---end of ShowCurrentListen
