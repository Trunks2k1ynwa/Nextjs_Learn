import { Blurhash } from 'react-blurhash';

const BlurhashPlaceholder = ({
  hash,
  width,
  height,
}: {
  hash: string;
  width: number;
  height: number;
}) => {
  return <Blurhash hash={hash} width={width} height={height} punch={1} />;
};

export default BlurhashPlaceholder;
