import React from 'react'

import { useForm } from '../../hooks/useForms'
import { useLocation, useNavigate } from 'react-router-dom'
import queryString from 'query-string'
import { getHeroesByName } from '../helpers'
import { HeroData } from '../components/HeroData'

export const Search = () => {
    const navigate = useNavigate()
    // npm i query-string con use location y el parse a querystring 
    const location = useLocation()
    const { q = '' } = queryString.parse(location.search)
    const heroes = getHeroesByName(q);

    const showHero = (q.length !== 0);
    const showError = (q.length > 0) && heroes.length === 0

    //useForm cargo el nombre del heroe
    const { searchText, onInputChange } = useForm(
        {
            searchText: q
        })

    const handleOnSubmit = (e) => {
        e.preventDefault()
        if (searchText.trim().length <= 1) return;

        navigate(`?q=${searchText}`)
    }
    return (
        <>
            <h1>Search</h1>
            <hr />
            <div className="row">

                <div className="col-5">
                    <h4>Searching</h4>
                    <hr />
                    <form onSubmit={handleOnSubmit}>
                        <input
                            value={searchText}
                            onChange={onInputChange}
                            autoComplete='off'
                            className='form-control'
                            name='searchText'
                            placeholder='Buscar Heroe'
                            type="text" />
                        <button className='btn btn-success btn-sm mt-2'>Buscar</button>

                    </form>
                </div>
                <div className="col-7">
                    <h4>Resultado</h4>
                    <hr />

                    {/* {
                        (q === '')
                            ?
                            <div className="alert alert-primary">
                                Buscar Heroe
                            </div>
                            : (heroes.length === 0) &&
                            <div className="alert alert-danger">
                                <b>  {q} </b> heroe no encontrado
                            </div>
                    } */}
                    <div className="alert alert-primary animate__animated animate__fadeIn" style={{ display: showHero ? 'none' : "" }}>
                        Buscar Heroe
                    </div>
                    <div className="alert alert-danger animate__animated animate__fadeIn" style={{ display: showError ? '' : "none" }}>
                        <b>  {q} </b> heroe no encontrado
                    </div>

                    {
                        heroes.map(hero => (
                            < HeroData key={hero.id} {...hero} />

                        ))
                    }
                </div>
            </div>
        </>
    )
}
