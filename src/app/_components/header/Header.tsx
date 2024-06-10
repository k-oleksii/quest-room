import { routes } from '@/app/_util/routes';
import Link from 'next/link';
import { FC } from 'react';
import Logo from '../logo/Logo';
import Navigation from '../navigation/Navigation';

const Header: FC = () => {
  return (
    <div className="sticky top-0 z-50 py-4 px-8 bg-header-pattern">
      <div className="flex justify-between items-center gap-x-2">
        <Logo />
        <Navigation routes={routes} />
        <Link
          href="tel:+38(099)5559955"
          className="font-semibold text-sm text-silver tracking-wider"
        >
          +38 (099) 555-99-55
        </Link>
      </div>
    </div>
  );
};

export default Header;
