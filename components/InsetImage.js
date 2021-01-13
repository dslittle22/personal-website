import Image from 'next/image';
import styled from 'styled-components';

const InsetImage = ({
  src,
  percentWidth,
  imgWidth,
  imgHeight,
  alt,
  quality,
}) => {
  return (
    <StyledImage percentWidth={percentWidth}>
      <Image
        src={src}
        width={imgWidth}
        height={imgHeight}
        alt={alt}
        quality={quality ? quality : 90}
      />
    </StyledImage>
  );
};

export default InsetImage;

const StyledImage = styled.div`
  width: 100%;
  display: block;
  padding: ${({ percentWidth }) => `0 ${(100 - percentWidth) / 2}%`};
  > div {
    width: 100%;
  }
  img {
    width: 100%;
  }
`;
