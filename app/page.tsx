import FooterBar from '@/components/footer-bar/FooterBar';
import NavigationBar from '@/components/navigation-bar/NavigationBar';
import React from 'react'
import HeroBlock from './blocks/hero-block/HeroBlock';
import FeatureBlock from './blocks/features-block/FeatureBlock';

const page = () => {
  return (
    <div className="flex flex-col justify-between">
      <div className="sticky top-0 container mx-auto py-6 backdrop-blur-xl bg-base-100/50">
        <NavigationBar />
      </div>
      <div className="p-24 container mx-auto ">
        <HeroBlock />
      </div>
      <div className="p-24 container mx-auto ">
        <FeatureBlock />
      </div>

      <FooterBar />
    </div>
  );
}

export default page