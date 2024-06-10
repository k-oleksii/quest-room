import { getErrorMessage } from '@/app/_util/helper/getErrorMessage';
import { FC } from 'react';
import { Controller, FieldError, useFormContext } from 'react-hook-form';

interface IInput {
  name: string;
  type?: string;
  placeholder: string;
}

const Input: FC<IInput> = ({ name, type = 'text', placeholder }) => {
  const {
    control,
    formState: { errors },
  } = useFormContext();

  const errorMessage = getErrorMessage(errors[name] as FieldError);

  return (
    <div className="relative flex flex-col gap-1 w-full">
      <Controller
        name={name}
        control={control}
        render={({ field }) => (
          <input
            {...field}
            type={type}
            value={field.value || ''}
            placeholder={placeholder}
            className="w-full h-[53px] px-4 py-2 font-medium text-silver/60 bg-darkGray/40 border-0 rounded-md focus:outline-none focus:bg-darkGray/50 placeholder:text-silver/60 transition-all"
          />
        )}
      />
      {errors[name] && (
        <span className="block text-xs text-red">{errorMessage}</span>
      )}
    </div>
  );
};

export default Input;
