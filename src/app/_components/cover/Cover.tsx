import Image from 'next/image';
import { FC } from 'react';

const Cover: FC = () => {
  return (
    <div className="absolute inset-0 overflow-hidden after:absolute after:inset-0 after:bg-cover-pattern">
      <Image
        alt="Cover"
        src="/main-bg.jpg"
        width={1428}
        height={824}
        sizes="100vw"
        quality={80}
        className="w-full h-full object-cover object-center blur-xl"
      />
    </div>
  );
};

export default Cover;
