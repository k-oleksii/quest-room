import Cover from './_components/cover/Cover';
import Filter from './_components/filter/Filter';
import AllQuests from './_components/quests/Quests';
import { FILTERS } from './_util/constants/filter';

async function questsFetch() {
  const response = await fetch('http://localhost:3001/quests', {
    method: 'GET',
  });
  if (!response.ok) {
    throw new Error('Failed to fetch data');
  }
  return response.json();
}

export default async function Home() {
  const data = await questsFetch();

  return (
    <>
      <Cover />
      <div className="relative z-10 flex">
        <div className="container mx-auto">
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
