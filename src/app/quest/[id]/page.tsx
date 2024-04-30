import Button from '@/app/_components/button/Button';
import Cover from '@/app/_components/cover/Cover';
import { getIcon } from '@/app/_util/helper/getIcon';
import { ICONS } from '@/app/_util/icons';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: '',
  description: '',
};
interface IParams {
  id: string;
}

async function questFetch({ params }: { params: IParams }) {
  const response = await fetch(`http://localhost:3001/quests/${params.id}`, {
    method: 'GET',
  });
  if (!response.ok) {
    throw new Error('Failed to fetch data');
  }

  return response.json();
}

const Quest = async ({ params }: { params: IParams }) => {
  const data = await questFetch({ params });

  metadata.title = data?.title;
  metadata.description = data?.description;

  return (
    <>
      <Cover alt={data?.title} src={`/${data?.coverImg}`} inner />
      <div className="relative z-10">
        <div className="w-full max-w-containerInner mx-auto">
          <div className="flex flex-col gap-10 items-start w-[579px] ml-auto">
            <div>
              <span className="font-bold text-sm text-orange">{data.type}</span>
              <h1 className="font-black text-[92px] leading-none uppercase text-white">
                {data.title}
              </h1>
            </div>

            <div className="flex flex-col gap-6">
              <div className="flex gap-x-6 items-center">
                <div className="flex gap-2 items-center text-sm	text-golden">
                  <span className="block w-5 h-5">{getIcon(ICONS.clock)}</span>
                  {data.duration} хв
                </div>
                <span className="w-px	h-4 bg-golden"></span>
                <div className="flex gap-2 items-center text-sm	text-golden">
                  <span className="block w-5 h-5">{getIcon(ICONS.person)}</span>
                  {data.peopleCount[0]}-{data.peopleCount[1]} осіб
                </div>
                <span className="w-px	h-4 bg-golden"></span>
                <div className="flex gap-2 items-center text-sm	text-golden">
                  <span className="block w-5 h-5">
                    {getIcon(ICONS.puzzle)}{' '}
                  </span>
                  {data.level}
                </div>
              </div>

              <p className="font-medium text-white text-[15px]">
                {data.description}
              </p>
            </div>

            <Button type="button" text="Взяти участь" />
          </div>
        </div>
      </div>
    </>
  );
};
export default Quest;
