import React from 'react'
import { Redirect, Route, Switch } from 'react-router-dom'
import { DcScreen } from '../Components/dc/DcScreen'
import { HeroScreen } from '../Components/heroes/HeroScreen'
import { MarvelScreen } from '../Components/marvel/MarvelScreen'
import { SearchScreen } from '../Components/search/SearchScreen'
import { Navbar } from '../Components/ui/Navbar'

export const DashboardRoute = () => {
    return (
        <>
            <Navbar/>

            <div className="container mt-2">
                
                <Switch>
                    <Route exact path="/marvel" component={MarvelScreen}/>
                    <Route export path="/hero/:heroeId" component={HeroScreen}/>
                    <Route export path="/dc" component={DcScreen}/>
                    <Route export path="/search" component={SearchScreen}/>

                    <Redirect to ="/marvel"/>
                </Switch>
            </div>
        </>
    )
}
