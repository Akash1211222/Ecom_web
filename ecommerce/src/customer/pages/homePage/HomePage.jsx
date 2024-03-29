import React from 'react'
import MainCarosel from '../../components/homeCarosel/MainCarosel'
import HomeSectionCarosel from '../../components/homeSectionCarosel/HomeSectionCarosel'
import { mens_kurta } from '../../../data/mens_kurta'
// import HomeSecCro from '../../components/homeSectionCarosel/HomeSecCro'

const HomePage = () => {
  return (
    <>
      <div className=' z-10'>
          <MainCarosel/>
    </div>
    <div className=' py-20 space-y-10 flex-col justify-center px-5 lg:px-10 z-0'>
        <HomeSectionCarosel data={mens_kurta} sectionName={"Men's Kurta" } />
        <HomeSectionCarosel data={mens_kurta} sectionName={"Men's Shirt" } />
        <HomeSectionCarosel data={mens_kurta} sectionName={"Men's Shirt" } />
        <HomeSectionCarosel data={mens_kurta} sectionName={"Men's Shirt" } />
        <HomeSectionCarosel data={mens_kurta} sectionName={"Men's Shirt" } />
    </div>
    </>
  )
}

export default HomePage