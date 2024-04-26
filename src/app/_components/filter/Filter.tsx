'use client';
import { getIcon } from '@/app/_util/helper/getIcon';
import { ICONS } from '@/app/_util/icons';
import { useQuests } from '@/app/_util/store/quests';
import { IFilterItem } from '@/app/_util/types';
import { FC } from 'react';

interface IFilter {
  data: IFilterItem[];
}

const Filter: FC<IFilter> = ({ data }) => {
  const { filterType, setFilterType } = useQuests();

  return (
    <div className="inline-flex border border-charcoal rounded-2xl overflow-hidden">
      {data.map(({ name, icon, type }) => (
        <div
          key={name}
          className={`flex items-center gap-x-2 min-h-9 px-6 py-1 border-r border-r-charcoal last:border-r-0 cursor-pointer ${
            filterType === type
              ? 'text-darkOlive bg-golden'
              : 'text-white bg-lightGray/10 hover:bg-lightGray/20 transition-all'
          }`}
          onClick={() => setFilterType(type)}
        >
          <span className="block h-7">
            {getIcon(ICONS[icon as keyof typeof ICONS])}
          </span>
          <span className="font-bold text-sm ">{name}</span>
        </div>
      ))}
    </div>
  );
};

export default Filter;
