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

            {/* teste mondiad */}
            <div data-mndazid="a6e925e9-c60e-4e7a-af46-fb0c52e49926"></div>

            {/* teste adsterra */}
            {/* <div id="container-1ce5408fc7ae4485ac7212c2890f9dc6"></div> */}


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
