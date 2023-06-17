import { useRef, useState } from 'react';
import './body.css';

export function Body() {
    const [audioPlaying, setAudioPlaying] = useState(false);
    const audioRef = useRef<HTMLAudioElement>(null);

    const handleButtonClick = async () => {
        const audioElement = audioRef.current;

        if (audioElement) {
            try {
                if (audioPlaying) {
                    await audioElement.pause();
                } else {
                    await audioElement.play();
                }
                setAudioPlaying(!audioPlaying);
            } catch (error) {
                console.log('Falha ao reproduzir o áudio:', error);
            }
        }
    };

    return (
        <section id='hero'>
            <h1>Clique aqui para remover a Água</h1>

            <button className={audioPlaying ? 'btn active' : "btn"} onClick={handleButtonClick}>
                {audioPlaying ? 'Pausar áudio' : 'Remover água'}
            </button>

            <audio ref={audioRef} src="../../../public/remover-agua-do-alto-falante.mp3" />

            {/* <img src={Image} alt="imagem" /> */}
            <div className="arrow">
                <a href="#about">
                    <span></span>
                    <span></span>
                    <span></span>
                </a>
            </div>
        </section>
    );
}






