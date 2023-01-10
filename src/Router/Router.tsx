import React from 'react';
import { Routes , Route } from 'react-router-dom';
import { Index } from '../Pages/Index'
import { Page } from '../Pages/Page' 

export function RouterGroup () {
    return (
        <Routes>
            <Route index path='/' element={ <Index /> }></Route>
            <Route path='/js'>
                <Route path=':docTitle' element={ <Page /> }></Route>
            </Route>
            <Route path='*' element={ <div>{'Page Error'}</div> }></Route>
        </Routes>
    )
}
