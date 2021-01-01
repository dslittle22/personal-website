import Layout from '../components/layout';
import Image from 'next/image';
import styled from 'styled-components';
import fs from 'fs';
import path from 'path';
import MusicPhotosGrid from '../components/MusicPhotosGrid';
import { musicLinks, musicAudio } from '../content';

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
        <div style={{ display: 'flex' }}>
          {title}
          <audio style={{ height: '30px' }} controls>
            <source src={path.join('audio', filename)} />
          </audio>
        </div>
      </li>
    ));
  };

  return (
    <Layout page='Music'>
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
      <section>
        <h3>Photos</h3>
        <MusicPhotosGrid photos={photos} />
      </section>
    </Layout>
  );
};

export default Music;

const EvenList = styled.ul`
  margin-top: 1rem;
  display: grid;
  grid-auto-rows: minmax(40px, auto);
  align-items: center;
  audio {
    margin-left: 1rem;
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
