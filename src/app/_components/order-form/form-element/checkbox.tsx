import { getErrorMessage } from '@/app/_util/helper/getErrorMessage';
import React, { FC } from 'react';
import { Controller, FieldError, useFormContext } from 'react-hook-form';

interface ICheckbox {
  children: React.ReactNode;
  id: string;
  name: string;
}

const Checkbox: FC<ICheckbox> = ({ name, id, children }) => {
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
          <>
            <input
              {...field}
              id={id}
              type="checkbox"
              className="hidden appearance-none peer"
            />
            <label
              htmlFor={id}
              className="relative cursor-pointer pl-8 select-none font-medium
              text-sm text-silverGray before:content-['']
              before:absolute before:top-px before:left-0 before:flex before:h-4 before:w-4 
              before:items-center before:justify-center before:rounded 
              before:text-xs before:leading-4 before:font-bold before:bg-darkGray before:transition-all peer-checked:before:bg-charcoal peer-checked:before:content-['x'] peer-checked:before:text-golden/80"
            >
              {children}
            </label>
          </>
        )}
      />
      {errors[name] && (
        <span className="block text-xs text-red">{errorMessage}</span>
      )}
    </div>
  );
};

export default Checkbox;
