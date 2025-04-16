import React from 'react'
import HeroText from './components/hero-text/HeroText'
import HeroCode from './components/hero-code/HeroCode'

const HeroBlock = () => {
  return (
    <div className="container mx-auto">
        <div className="flex flex-row justify-evenly ">
            <HeroText />
            <HeroCode />

        </div>
    </div>
  )
}

export default HeroBlock