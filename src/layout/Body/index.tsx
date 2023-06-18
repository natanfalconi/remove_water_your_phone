// import { useRef, useState } from 'react';
// import './body.css';

// export function Body() {
//     const [audioPlaying, setAudioPlaying] = useState(false);
//     const audioRef = useRef<HTMLAudioElement>(null);

//     const handleButtonClick = async () => {
//         const audioElement = audioRef.current;

//         if (audioElement) {
//             try {
//                 if (audioPlaying) {
//                     await audioElement.pause();
//                 } else {
//                     await audioElement.play();
//                 }
//                 setAudioPlaying(!audioPlaying);
//             } catch (error) {
//                 console.log('Falha ao reproduzir o áudio:', error);
//             }
//         }
//     };

//     return (
//         <section id='hero'>
//             <h1>Clique aqui para remover a Água</h1>

//             <button className={audioPlaying ? 'btn active' : "btn"} onClick={handleButtonClick}>
//                 {audioPlaying ? 'Pausar áudio' : 'Remover água'}
//             </button>

//             <audio ref={audioRef} src="static/remover-agua-do-alto-falante.mp3" />

//             <div className="arrow">
//                 <a href="#about">
//                     <span></span>
//                     <span></span>
//                     <span></span>
//                 </a>
//             </div>
//         </section>
//     );
// }

import { useState } from 'react';
import ReactPlayer from 'react-player';
import './body.css';

export function Body() {
    const [audioPlaying, setAudioPlaying] = useState(false);

    const handleButtonClick = () => {
        setAudioPlaying(!audioPlaying);
    };

    const handleVideoEnded = () => {
        alert('A água foi removida com sucesso!');
        setAudioPlaying(!audioPlaying)
    };

    return (
        <section id='hero'>
            <h1>Clique aqui para remover a Água</h1>

            <button className={audioPlaying ? 'btn active' : 'btn'} onClick={handleButtonClick}>
                {audioPlaying ? 'Pausar áudio' : 'Remover água'}
            </button>

            {audioPlaying && (
                <ReactPlayer
                    url='https://www.youtube.com/watch?v=Bg5pRdb3fg4'
                    playing={audioPlaying}
                    volume={1}
                    muted={false}
                    width='0'
                    height='0'
                    onEnded={handleVideoEnded}
                />
            )}

            <div className='arrow'>
                <a href='#about'>
                    <span></span>
                    <span></span>
                    <span></span>
                </a>
            </div>
        </section>
    );
}
