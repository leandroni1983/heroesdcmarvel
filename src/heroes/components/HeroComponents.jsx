import React, { useMemo } from 'react'
import { getHeroesByPublisher } from '../helpers'
import { HeroData } from './HeroData'

export const HeroComponents = (publisher) => {

  const heroes = useMemo(() => getHeroesByPublisher(publisher)
    , [publisher])
  return (
    <div className='row row-cols-1 row-cols-md-3 g-3'>
      {
        heroes.map(hero => (
          <HeroData key={hero.id}{...hero} />
        ))
      }
    </div>

  )
}
