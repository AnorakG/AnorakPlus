import React from 'react'
import ColetaRow from '../ColetaneaRow/ColetaneaRows'
import Nav from '../Nav/Nav'
import Theme from '../../audio/liloestitchtheme.mp3'

function Stitch() {
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
            <ColetaRow title="Coletânea Lilo & Stitch" movieType="stitch"/>
            </div>
        </div>
        </>
    )
}

export default Stitch