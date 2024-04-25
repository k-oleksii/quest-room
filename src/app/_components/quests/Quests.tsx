'use client';
import { useQuests } from '@/app/_util/store/quests';
import Card from '../card/Card';

const Quests = ({ data }) => {
  const { filterType } = useQuests();

  const filterData = data.filter(item => {
    if (filterType === 'all') return item;

    return item.type === filterType;
  });

  return (
    <div className="grid grid-cols-3 gap-6 w-full">
      {filterData.map(item => (
        <Card key={item.id} {...item} />
      ))}
    </div>
  );
};

export default Quests;
