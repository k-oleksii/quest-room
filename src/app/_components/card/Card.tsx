import { getIcon } from '@/app/_util/helper/getIcon';
import { ICONS } from '@/app/_util/icons';
import { IQuestCard } from '@/app/_util/types';
import Image from 'next/image';
import Link from 'next/link';
import { FC } from 'react';

const Card: FC<IQuestCard> = props => {
  return (
    <article className="min-h-[233px] rounded-2xl border border-darkOlive/20 overflow-hidden cursor-pointer group">
      <Link
        href={`/quest/${props.id}`}
        className="relative flex items-end w-full h-full py-5 px-8 "
      >
        <div className="absolute inset-[-1px] after:absolute after:inset-0 after:bg-cover-pattern group-hover:grayscale transition-all">
          <Image
            alt={props.title || 'Quest Image'}
            src={`/${props.previewImg}`}
            width={400}
            height={300}
            sizes="100vw"
            quality={80}
            className="w-full h-full object-cover object-top"
          />
        </div>
        <div className="relative z-10 flex flex-col gap-3 items-end w-full">
          <h2 className="font-bold text-2xl text-white">{props.title}</h2>
          <div className="flex items-center">
            <div className="flex gap-x-2 items-center pr-3.5 border-r border-r-white/50">
              <span className="text-white h-4">{getIcon(ICONS.person)}</span>

              <span className="font-medium text-white/80 text-[13px]">
                {props.peopleCount[0]}-{props.peopleCount[1]} осіб
              </span>
            </div>
            <div className="flex gap-x-2 items-center pl-3.5">
              <span className="block text-white h-4">
                {getIcon(ICONS.puzzle)}
              </span>
              <span className="font-medium text-white/80 text-[13px]">
                {props.level}
              </span>
            </div>
          </div>
        </div>
      </Link>
    </article>
  );
};

export default Card;
