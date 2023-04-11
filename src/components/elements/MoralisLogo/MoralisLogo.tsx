import { useColorMode } from '@chakra-ui/react';
import Image from 'next/image';

const MoralisLogo = () => {
  const { colorMode } = useColorMode();

  return (
    <>
      <Image src={'/ruby-clipart-18_scale.webp'} height={45} width={60} alt="RubySwap" />
    </>
  );
};

export default MoralisLogo;
