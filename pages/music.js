import styled from 'styled-components';
import fs from 'fs';
import path from 'path';
import MusicPhotosGrid from '../components/MusicPhotosGrid';
import { musicLinks, musicAudio } from '../content';
import Head from 'next/head';

const Music = ({ photos }) => {
  const renderLinks = () => {
    return musicLinks.map(({ title, description, href }) => (
      <li key={href}>
        <a href={href} target='_blank'>
          <h4>{title}</h4>
        </a>
        <small>{description}</small>
      </li>
    ));
  };

  const renderAudioFiles = () => {
    return musicAudio.map(({ title, filename }) => (
      <li key={filename}>
        <StyledMp3>
          {title}
          <audio controls>
            <source src={path.join('audio', filename)} />
          </audio>
        </StyledMp3>
      </li>
    ));
  };

  return (
    <>
      <Head>
        <title>{'Danny Little - Music'}</title>
      </Head>
      <h2>Music</h2>
      <section>
        <p>
          I'm tenor saxophone player, but I also play baritone/alto/soprano
          saxophones. I can get away with playing flute, drums, bass, or guitar,
          but those aren't my strongsuit. I mostly play jazz, funk, and R&B.
        </p>
        <p>
          I'm a bit of a music theory nerd, and I enjoy arranging and
          transcribing music.
        </p>
      </section>
      <section>
        <h3>Audio</h3>
        Here's some stuff I've made.
        <EvenList>
          {renderLinks()}
          {renderAudioFiles()}
        </EvenList>
      </section>
      <h3>Photos</h3>
      <MusicPhotosGrid photos={photos} />
    </>
  );
};

export default Music;

const EvenList = styled.ul`
  margin-top: 1rem;
  display: grid;
  grid-auto-rows: minmax(40px, auto);
  align-items: center;
  audio {
    height: 30px;
    margin-left: 0.5rem;
    max-width: 100%;
  }
`;

const StyledMp3 = styled.div`
  display: flex;
  @media only screen and (max-width: 500px) {
    flex-direction: column;
  }
`;

export const getStaticProps = async () => {
  const photos = fs.readdirSync(path.join('public', 'music-photos'));

  return {
    props: {
      photos,
    },
  };
};
