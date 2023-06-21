import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import ReactPlayer from 'react-player';
import './body.css';

export function Body() {
    const { t } = useTranslation();
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
            <h1>{t('heroTitle')}</h1>

            <button className={audioPlaying ? 'btn active' : 'btn'} onClick={handleButtonClick}>
                {audioPlaying ? `${t('textButtonPause')}` : `${t('textButton')}`}
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
