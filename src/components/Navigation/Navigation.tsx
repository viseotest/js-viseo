import React from 'react'
import { NavLink } from 'react-router-dom'
import { NavigationItem } from './NavigationItem';
import { ReactComponent as Viseosvg } from '../../resources/viseo.svg'

interface NavProps {
    width: number
}

export function Navigation( { width }: NavProps ) {
    return (
        <section style={{ width: width }}>
            <NavLink to="/" style={{ marginBottom: 30, display: 'flex', justifyContent: 'center', width: 'auto' }}>
                <Viseosvg />
            </NavLink>
            <h6 style={{ padding: 10 }}>
                <strong>Module</strong>: 
                <p>Javascript & Lightning Web Component</p>
            </h6>
            <NavigationItem />
        </section>
    )
}