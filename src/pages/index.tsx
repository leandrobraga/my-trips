import dynamic from 'next/dynamic';
import { InfoOutline } from '@styled-icons/evaicons-outline';

import LinkWrapper from 'components/LinkWarpper';

const Map = dynamic(() => import('components/Map'), { ssr: false });

export default function Home() {
  return (
    <>
      <LinkWrapper href="/about">
        <InfoOutline size={22} aria-label="About" />
      </LinkWrapper>
      <Map />
    </>
  );
}
