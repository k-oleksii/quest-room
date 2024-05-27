import { getQuests } from '@/actions/quests';
import Cover from './_components/cover/Cover';
import Filter from './_components/filter/Filter';
import AllQuests from './_components/quests/Quests';
import { FILTERS } from './_util/constants/filter';

export default async function Home() {
  const data = await getQuests();

  return (
    <>
      <Cover alt="Ігри у Львові" src="/main-bg.jpg" />
      <div className="relative z-10 flex">
        <div className="w-full max-w-container mx-auto">
          <span className="font-medium text-sm text-orange">Ігри у Львові</span>
          <h1 className="font-extrabold text-[64px] text-white">
            В яку гру зіграємо?
          </h1>
          <div className="flex flex-col items-start gap-y-16 mt-[50px]">
            <Filter data={FILTERS} />
            <AllQuests data={data} />
          </div>
        </div>
      </div>
    </>
  );
}
