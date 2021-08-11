import React, { useMemo } from 'react'
import queryString from 'query-string';

import { useLocation } from 'react-router-dom';
import { useForm } from '../../hooks/useForm';
import { HeroCard } from '../heroes/HeroCard';
import { getHeroesByName } from '../../Selectors/getHeroesByName';

export const SearchScreen = ({history}) => {

    const location = useLocation();
    const {q = ''} = queryString.parse(location.search);
    
    const [ formValue, handleInputChange] = useForm ({
        searchText: q
    });

    const {searchText} = formValue

    const heroesFilter = useMemo(() => getHeroesByName(q), [q])
    

    const handleSearch = (e) => {
        e.preventDefault();
        history.push(`?q=${searchText}`)
        console.log(searchText)
    }

    return (
        <div>
            <h1>Search Screen</h1>
            <div className="row">
                <div className="col-5">
                    <hr />

                    <form onSubmit={handleSearch}>
                        <input
                            type="text"
                            placeholder="Find your hero"
                            className="form-control"
                            name="searchText"
                            value= {searchText}
                            onChange={handleInputChange}
                        />
                        <button
                            type="submit"
                            className="btn m-1 btn-block btn-outline-primary"
                        >
                            Search...
                        </button>
                    </form>
                </div>

                <div className="col-7">

                    <h4>Results</h4>
                    <hr/>

                       { 
                        (q === '') 
                        &&<div className="alert alert-info">
                            Search a hero
                        </div>
                       }
                       {
                           (q !== '' && heroesFilter.length === 0)
                           &&<div className="alert alert-danger">
                               There is not a hero with { q }
                            </div>
                       }
                        {
                            heroesFilter.map(hero =>(
                                <HeroCard 
                                    key= {hero.id}
                                    {...hero}
                                />
                            ))
                        }
                </div>
            </div>
        </div>
    )
}
