import Image from 'next/image';
import { FC } from 'react';

interface ICover {
  alt: string;
  src: string;
  inner?: boolean;
}

const Cover: FC<ICover> = props => {
  return (
    <div
      className={`absolute inset-0 overflow-hidden after:absolute after:inset-0 ${
        props.inner ? 'after:bg-cover-inner-pattern' : 'after:bg-cover-pattern'
      }`}
    >
      <Image
        alt={props.alt || 'Cover Image'}
        src={props.src}
        fill
        sizes="100vw"
        quality={80}
        className={`object-cover ${props.inner ? 'blur-sm	' : 'blur-xl'}`}
      />
    </div>
  );
};

export default Cover;
