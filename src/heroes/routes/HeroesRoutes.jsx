import React from 'react'
import { Route, Routes } from 'react-router-dom'
import { Navbar } from '../../ui'
import { Marvel, DC, Search, Hero } from '../Pages'

export const HeroesRoutes = () => {
    return (
        <>
            <Navbar />
            <div className="container">
                <Routes>
                    <Route path='/marvel' element={<Marvel />} />
                    <Route path='/dc' element={<DC />} />
                    <Route path='/search' element={<Search />} />
                    <Route path='/heroe/:id' element={<Hero />} />

                    <Route path='/' element={<Marvel />} />

                </Routes>
            </div>
        </>

    )
}
