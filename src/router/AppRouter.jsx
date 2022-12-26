import React from 'react'
import { Route, Routes } from 'react-router-dom'
import { HeroesRoutes } from '../heroes'
import { Login } from '../auth'
import { PrivateRouter } from './PrivateRouter'
export const AppRouter = () => {
    return (
        <>

            <Routes>
                <Route path='login' element={<Login />} />

                <Route path='/*' element={
                    <PrivateRouter >
                        <HeroesRoutes />
                    </PrivateRouter >
                } />


                {/* <Route path='/*' element={<HeroesRoutes />} /> */}
            </Routes>
        </>
    )
}
