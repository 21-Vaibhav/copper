import FooterBar from '@/components/footer-bar/FooterBar';
import NavigationBar from '@/components/navigation-bar/NavigationBar';
import React from 'react'

const page = () => {
  return (
    <div className="flex flex-col justify-between">
      <NavigationBar />
      <div className='h-48 bg-blue-500'/>
      <div className='h-48 bg-red-500'/>
      <FooterBar />
    </div>
  );
}

export default page