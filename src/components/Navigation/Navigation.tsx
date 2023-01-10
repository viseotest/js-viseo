import React from 'react'
import { NavLink } from 'react-router-dom'
import { NavigationItem } from './NavigationItem';
import { ReactComponent as Viseosvg } from '../../resources/viseo.svg';

export function Navigation() {
    return (
        <section>
            <NavLink to="/" style={{ marginBottom: 30, display: 'flex', justifyContent: 'center', width: 'auto' }}>
                <Viseosvg />
            </NavLink>
            <h6 style={{ padding: 10 }}>
                <strong>Module</strong>: Javascript & Lightning Web Component
            </h6>
            <NavigationItem widthConfig={350} />
        </section>
    )
}