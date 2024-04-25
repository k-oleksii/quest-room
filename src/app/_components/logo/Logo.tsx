import Image from 'next/image';
import Link from 'next/link';
import { FC } from 'react';

const Logo: FC = () => {
  return (
    <Link href="/" className="inline-block hover:opacity-75 transition-all">
      <Image src="/logo.svg" alt="Quest Room" width="42" height="42" priority />
    </Link>
  );
};

export default Logo;
