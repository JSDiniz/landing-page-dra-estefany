import { useState } from 'react';
import { motion } from 'framer-motion';
import { Link, useLocation } from 'react-router-dom';

import { NavLinks } from './NavLinks';
import { MobileMenu } from './MobileMenu';

import Logo from '/logo.svg'

const MotionLink = motion(Link);

export const Header = () => {
  const location = useLocation();

  const [isOpen, setIsOpen] = useState(false);

  const isTeethWhitening =
    location.pathname !== '/clareamento-dental-caseiro';

  return (
    <header className="fixed w-full bg-white/90 backdrop-blur-sm z-50 shadow-sm">
      <section className="container mx-auto px-4 md:px-6 py-4">
        <div className="flex items-center justify-between">
          <MotionLink
            to="/"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="flex items-center space-x-2"
          >
            <img src={Logo} className="text-purple-600 w-9 h-9" />
            <span className="text-xl font-bold text-gray-900">Dra. Estefany</span>
          </MotionLink>

          {isTeethWhitening &&
            <>
              <NavLinks className="hidden md:flex space-x-8" />
              <MobileMenu isOpen={isOpen} setIsOpen={setIsOpen} />
            </>
          }



        </div>
      </section>
    </header>
  );
};