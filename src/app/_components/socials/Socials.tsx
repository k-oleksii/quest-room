import { getIcon } from '@/app/_util/helper/getIcon';
import { ICONS } from '@/app/_util/icons';
import Link from 'next/link';
import { FC } from 'react';
import { socialsData } from './socialsData';

const Socials: FC = () => {
  return (
    <div className="fixed bottom-8 left-8 z-10 flex items-center gap-x-5">
      {socialsData?.map(item => (
        <Link
          href={item.url}
          key={item.name}
          className="text-darkGray hover:text-purple transition-all"
        >
          {getIcon(ICONS[item.name as keyof typeof ICONS])}
        </Link>
      ))}
    </div>
  );
};

export default Socials;
