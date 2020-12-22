import Link from 'next/link';
import Layout from '../components/layout';
import Image from 'next/image';
import styled from 'styled-components';
import fs from 'fs';
import path from 'path';
import { musicLinks, musicAudio } from '../content';

const Music = ({ photos }) => {
  const renderLinks = () => {
    return musicLinks.map(({ title, description, href }) => (
      <li key={href}>
        <a href={href} target='_blank'>
          <h5>{title}</h5>
        </a>
        <small>{`- "${description}"`}</small>
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

  const renderGallary = () => {
    return photos.map(filename => {
      return (
        <div key={filename}>
          <Image
            src={'/' + path.join('photos', filename)}
            height='400'
            width='300'
            objectFit='cover'
          />
          <Overlay>
            <a href={'/' + path.join('photos', filename)} download>
              Download
            </a>
          </Overlay>
        </div>
      );
    });
  };

  return (
    <Layout page='Music'>
      <h2>Music</h2>
      <div>
        <p>
          I'm tenor saxophone player, but I also play baritone/alto/soprano
          saxophones. I can get away with playing flute, drums, bass, or guitar,
          but those aren't my strongsuit. I mostly play jazz, funk, and R&B.
        </p>
        <p>
          I'm a bit of a music theory nerd, and I enjoy arranging and
          transcribing music.
        </p>
      </div>
      <h3>Audio</h3>
      Here's some stuff I've made.
      <div>
        <EvenList>
          {renderLinks()}
          {renderAudioFiles()}
        </EvenList>
      </div>
      <div>
        <h3>Photos</h3>
        <PhotoGallery>{renderGallary()}</PhotoGallery>
      </div>
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
  /* div {
    display: flex;
    align-items: center;
    ::before {
      display: block;
      content: '•';
      margin-right: 0.25rem;
    }
  } */
`;

const Overlay = styled.div`
  position: relative;
  width: 100%;
  top: -64px;
  height: 64px;
  margin-bottom: -64px;
  transition: 300ms ease;
  opacity: 0;
  background: white;
  display: grid;
  align-items: center;
  justify-content: center;
`;

const PhotoGallery = styled.div`
  display: grid;
  grid-gap: 20px;
  justify-content: center;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  img {
    border-radius: 5px;
  }
  div {
    display: grid;
  }
  div:hover ${Overlay} {
    opacity: 0.7;
  }
`;

export const getStaticProps = async () => {
  const photos = fs.readdirSync(path.join('public', 'photos'));

  return {
    props: {
      photos: photos.filter(filename => filename.slice(0, 1) != '.'),
    },
  };
};
