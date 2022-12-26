import React, { useMemo } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { getHeroesById } from '../helpers'
const CharactersHeros = ({ alter_ego, characters }) => {
    if (alter_ego === characters) return (<></>)
    return <p><b>Characters: </b> {characters}</p>
}
export const Hero = () => {
    const { id } = useParams()

    const imgUrl = `/assets/heroes/${id}.jpg`

    const { superhero, first_appearance, alter_ego, characters, publisher } = useMemo(() => getHeroesById(id), [id])
    const navigate = useNavigate()
    const onNavigateBack = () => {
        navigate(-1)
    }


    return (
        <>

            <div className=" card m-2 p-2">

                < div className='d-flex align-self-center'>
                    <h3> {superhero}</h3>
                </div >
                <div className='card-body row'>

                    <div className='animate__animated animate__fadeInLeft col-4' >
                        <img src={imgUrl} className=' img-thumbnail' alt="" />
                    </div>
                    <div className=' card-body col-8'>

                        <div className="card-title">
                            <p> <b> Alter ego:</b> {alter_ego}</p>
                        </div>
                        <div className="card-subtitle">
                            <p><b>Primera Aparicion:</b> {first_appearance}</p>
                        </div>
                        <div className="card-text">
                            <CharactersHeros characters={characters} alter_ego={alter_ego} />
                        </div>
                        <div className="card-text-muted">
                            <p> <b>  Publisher:</b> {publisher} </p>
                        </div>
                        <button
                            className='btn btn-outline-info'
                            onClick={onNavigateBack}
                        > Regresar</button>
                    </div>
                </div>
            </div>

        </>
    )
}
