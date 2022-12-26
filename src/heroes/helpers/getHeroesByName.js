import { heroes } from '../data/heroes'
export const getHeroesByName = (q) => {
    console.log(q)
    q = q .toLocaleLowerCase().trim();
    if(q.length === 0 ) return [];
    return heroes.filter(
        hero => hero.superhero.toLocaleLowerCase().includes(q)
        );
}


