import { getQuestByID } from '@/actions/quests';
import Cover from '@/app/_components/cover/Cover';
import OrderForm from '@/app/_components/order-form/OrderForm';

interface IParams {
  id: string;
}

const RequestFormPage = async ({ params }: { params: IParams }) => {
  const data = await getQuestByID(params.id);
  return (
    <>
      <Cover alt={data?.title} src={`/${data?.coverImg}`} inner />
      <div className="relative z-10">
        <div className="w-full max-w-containerInner mx-auto">
          <OrderForm params={params} />;
        </div>
      </div>
    </>
  );
};

export default RequestFormPage;
