import Image from "next/image";
import styled from "styled-components";
import path from "path";

const MusicPhotosGrid = ({ photos }) => {
  const renderGallery = () => {
    return photos.map((filename) => {
      return (
        <div key={filename}>
          <Image
            src={"/" + path.join("music-photos", filename)}
            height="400"
            width="300"
            // objectFit='cover'
            style={"cover"}
          />
          <Overlay>
            <a href={"/" + path.join("music-photos", filename)} download>
              Download
            </a>
          </Overlay>
        </div>
      );
    });
  };

  return (
    <PhotoGallery className="sidebar-span">{renderGallery()}</PhotoGallery>
  );
};

export default MusicPhotosGrid;

const Overlay = styled.div`
  position: relative;
  width: 100%;
  top: -64px;
  margin-bottom: -64px;
  transition: 400ms ease;
  opacity: 0;
  background: white;
  display: grid;
  align-items: center;
  justify-content: center;
  border-radius: 5px;
`;

const PhotoGallery = styled.div`
  display: grid;
  width: 100%;
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
    opacity: 0.8;
  }
`;
