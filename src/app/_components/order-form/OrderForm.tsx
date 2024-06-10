'use client';

import { postQuest } from '@/actions/quests';
import { getIcon } from '@/app/_util/helper/getIcon';
import { ICONS } from '@/app/_util/icons';
import { zodResolver } from '@hookform/resolvers/zod';
import Link from 'next/link';
import { redirect, useRouter } from 'next/navigation';
import { FC } from 'react';
import { FormProvider, useForm } from 'react-hook-form';
import Button from '../button/Button';
import { questSchema } from './config';
import Checkbox from './form-element/checkbox';
import Input from './form-element/input';

interface IParams {
  params: {
    id: string;
  };
}

const OrderForm: FC<IParams> = ({ params }) => {
  const methods = useForm({
    mode: 'onTouched',
    resolver: zodResolver(questSchema),
  });

  const router = useRouter();

  const onSubmit = async (data: any) => {
    await postQuest(data);
    methods.reset();
    redirect(`/quest/${params.id}`);
  };

  return (
    <>
      <div
        className="fixed inset-0 w-full h-full bg-black/40 backdrop-blur-lg"
        onClick={() => router.push(`/quest/${params.id}`)}
      ></div>
      <div className="relative z-10 w-full max-w-[480px] mx-auto px-8	pt-[70px] pb-12 bg-form-pattern rounded-[20px]">
        <Link
          href={`/quest/${params.id}`}
          className="absolute top-8 right-8 text-white cursor-pointer hover:text-golden/80 transition-all"
        >
          {getIcon(ICONS.close)}
        </Link>

        <span className="block mb-[27px] font-extrabold text-[40px] text-white">
          Заявка на гру
        </span>

        <FormProvider {...methods}>
          <form
            onSubmit={methods.handleSubmit(onSubmit)}
            className="flex flex-col gap-y-8"
          >
            <Input name="name" placeholder="Ваше ім’я" />
            <Input name="phone" placeholder="Ваш номер телефону" />
            <Input name="peopleCount" placeholder="Кількість гравців" />
            <Checkbox name="isLegal" id="policy">
              Погоджуюсь з{' '}
              <Link href="/" className="underline">
                правилами обробки персональних даних
              </Link>{' '}
              та{' '}
              <Link href="/" className="underline">
                угодою користувачів
              </Link>
            </Checkbox>

            <div className="w-[220px] mx-auto">
              <Button type="submit" text="Відправити" />
            </div>
          </form>
        </FormProvider>
      </div>
    </>
  );
};

export default OrderForm;
