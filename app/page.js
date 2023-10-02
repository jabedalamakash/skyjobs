import Banner from '@/components/Banner'
import Categories from '@/components/Categories'
import Jobs from '@/components/Jobs'
import Btn from '@/uicomponents/Btn'
import Image from 'next/image'

export default function Home() {
  return (
    <>
    <section className='mb-32'>
    <Banner/>
    </section>
    <section className='mb-32'>
    <Categories/>
      </section>
      <section className='mb-32'>
    <Jobs/>
      </section>
   
    
   
    
    
    </>
   
  )
}
