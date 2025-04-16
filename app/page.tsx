import FooterBar from '@/components/footer-bar/FooterBar';
import NavigationBar from '@/components/navigation-bar/NavigationBar';
import React from 'react'
import HeroBlock from './blocks/hero-block/HeroBlock';

const page = () => {
  return (
    <div className="flex flex-col justify-between">
      <NavigationBar />
      <div className="p-24 container mx-auto">
        <HeroBlock />
      </div>
      <div className="h-48 bg-red-500" />
      <FooterBar />
    </div>
  );
}

export default page