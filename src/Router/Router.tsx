import React from 'react';
import { Routes , Route, Navigate } from 'react-router-dom';
import { Index } from '../Pages/Index'
import { Page } from '../Pages/Page' 

export function RouterGroup () {
    return (
        <Routes>
            <Route index path='/' element={ <Index /> }></Route>
            <Route path='/article'>
                <Route path=':docTitle' element={ <Page /> }></Route>
            </Route>
            <Route path='*' element={ <Navigate to="/" /> }></Route>
        </Routes>
    )
}
