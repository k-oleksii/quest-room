import Link from 'next/link';
import { FC } from 'react';

export interface IButton {
  href?: string;
  text: string;
  type?: 'button' | 'submit' | 'reset' | undefined;
  onClick?: () => void;
}

const Button: FC<IButton> = ({ type = 'button', href, text, ...args }) => {
  return (
    <>
      {!href && type ? (
        <button
          type={type}
          {...args}
          className="flex items-center justify-center min-h-[47px] w-full px-6 py-1 font-semibold text-center text-darkOlive bg-golden hover:bg-orange hover:text-white rounded-md shadow-btn transition-all cursor-pointer"
        >
          {text}
        </button>
      ) : (
        <Link
          href={href}
          {...args}
          className="flex items-center justify-center min-h-[47px] px-6 py-1 font-semibold text-center text-darkOlive bg-golden hover:bg-orange hover:text-white rounded-md shadow-btn transition-all cursor-pointer"
        >
          {text}
        </Link>
      )}
    </>
  );
};

export default Button;
