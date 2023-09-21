'use client'

import { CarCard, CustomFilter, Hero, SearchBar, ShowMore } from '@/components'
import { fuels, yearsOfProduction } from '@/constants';
import { fetchCars } from '@/utils'
import { useEffect, useState } from 'react';

export default function Home() {

  const [allCars, setAllcars] = useState([])
  const [loading, setLoading] = useState(false)

  const [manufacturer, setManufacturer] = useState("")
  const [model, setModel] = useState("")

  const [fuel, setFuel] = useState("")
  const [year, setYear] = useState(2023)

  const [limit, setLimit] = useState(10)

  const getCars = async () => {
    try {
      setLoading(true)
      const allCars = await fetchCars({
        'manufacturer': manufacturer || '',
        'year': year || 2023,
        'fuel': fuel || '',
        'limit': limit || 10,
        'model': model || '',
      });
      setAllcars(allCars)
    } catch (error) {
      console.log(error)
    } finally {
      setLoading(false)
    }
  }

  useEffect(() => {
    getCars()
  }, [fuel, year, limit, manufacturer, model])



  const isDataEmpty = allCars?.length <= 0

  return (
    <main className="overflow-hidden">
      <Hero />
      <div className='mt-12 padding-x padding-y max-width' id='discover'>
        <div className='home__text-container'>
          <h1 className='text-4x1 font-extrabold'>Car catalogue</h1>
          <p>Explore the cars you might like</p>
        </div>
        <div className='home__filters'>
          <SearchBar
            setManufacturer={setManufacturer}
            setModel={setModel}
          />
          <div className='home__filter-container'>
            <CustomFilter title='Fuel' options={fuels} setFilter={setFuel}/>
            <CustomFilter title='Year' options={yearsOfProduction} setFilter={setYear} />
          </div>
        </div>
        {!isDataEmpty ? (
          <section>
            <div className='home__cars-wrapper'>
              {allCars?.map((car: any) => (
                <CarCard car={car} />
              ))}
            </div>
            <ShowMore
              setLimit={setLimit}
              pageNumber={(limit || 10) / 10}
              isNext={(limit || 10) > allCars.length}
            />
          </section>
        ) : (
          <div className='home__error-container'>
            <h2 className='text-black text-xl font-bold'>Oops, no result</h2>
          </div>
        )}
      </div>
    </main>
  )
}
