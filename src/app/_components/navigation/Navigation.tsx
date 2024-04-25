'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { FC } from 'react';

interface INav {
  routes: {
    path: string;
    name: string;
  }[];
}

const Navigation: FC<INav> = ({ routes }) => {
  const pathname = usePathname();

  return (
    <nav>
      <ul className="flex gap-x-[50px]">
        {routes?.map((route, index) => (
          <li key={index}>
            <Link
              href={route.path}
              className={`font-semibold text-sm tracking-wider ${
                pathname === route.path
                  ? 'text-golden'
                  : 'text-silver hover:text-silverGray transition-all'
              } `}
            >
              {route.name}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Navigation;
