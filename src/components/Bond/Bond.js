import React from 'react'
import ColetaRow from '../ColetaneaRow/ColetaneaRows'
import Nav from '../Nav/Nav'
import Theme from '../../audio/bondtheme.mp3'

function Bond() {
    function tocaTema(){
        const soundtrack = document.getElementById("soundtrack")
        soundtrack.play();
        soundtrack.volume = 0.1
    }
    


    return (
        <>
        <audio id="soundtrack"  src={Theme} preload="auto"></audio>
        <div className='app' onLoad={tocaTema}>
            <Nav/>
            <div className='coletanea'>
            <ColetaRow title="Coletânea James Bond" movieType="bond"/>
            </div>
        </div>
        </>
    )
}

export default Bond
