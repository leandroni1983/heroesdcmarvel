import React from 'react'
import { Link } from 'react-router-dom'


export const HeroData = ({ id, superhero, alter_ego, characters, first_appearance }) => {
    const imgUrl = `/assets/heroes/${id}.jpg`
    return (
        <div className='col animate__animated animate__fadeIn'>

            <div className='card'>

                <div className='row no-gutters'>

                    <div className='col-4'>
                        <img src={imgUrl} className={'card-img'} alt={superhero} />
                    </div>
                    <div className='col-8'>
                        <div className="card-body">

                            <div className="card-title">{superhero} </div>

                            <div className="card-text">{alter_ego}</div>

                            <p className='card-text'>
                                <small className='text-muted'>{first_appearance}</small>
                            </p>
                            <Link to={`/heroe/${id}`}> Mas...</Link>
                        </div>

                    </div>
                </div>
            </div>
        </div>
    )
}
