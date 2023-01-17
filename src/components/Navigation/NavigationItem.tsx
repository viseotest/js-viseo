import React, { useState, useEffect, CSSProperties } from 'react';
import { navItem, DataProps } from '../../data/mockContent';
import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';
import { NavLink, useSearchParams } from 'react-router-dom';


export function NavigationItem () {

    const [menuItem, setMenuItem] = useState<DataProps[]>([]);
    const [fixedNav, setFixedNav] = useState<CSSProperties>({});
    const [searchParams] = useSearchParams();

    function fetchData() {
        setMenuItem(navItem)
    }

    function setFixedNavScroll ( e : Event) {
        const window = e.currentTarget as Window;
        const scroll = window.scrollY;
        if (scroll >= 150) setFixedNav({ position: 'fixed', top: 20 })
        if (scroll < 150) setFixedNav({})

    }

    useEffect( () => {
        fetchData()
        window.addEventListener( 'scroll', setFixedNavScroll );
    },[searchParams])

    return (
        <Card style={ fixedNav }>
            <ListGroup style={{ height: 'auto' }}>
                { menuItem.map( 
                    ( item,key ) =>
                        <ListGroup.Item 
                            key={key}
                            style={ item.subTitle ? { height: '100%' } : { height: 'auto' } }>
                            { 
                                item.url ? 
                                    <NavLink to={`/article/${item.url}`}>
                                        <h6>{item.title}</h6>
                                    </NavLink>
                                    : 
                                    <h6 className="list-group-item-alone">
                                        {item.title}
                                    </h6> 
                            }
                            { 
                                item.subTitle ? 
                                <div>
                                    { 
                                        item.subTitle.map( (subItem,key) =>  
                                            <div key={key} style={{ padding: 8, marginLeft: 10 }}>
                                                <NavLink to={`/article/${subItem.url}`}>{`${subItem.title}`}</NavLink>
                                            </div>
                                        )
                                    }
                                </div>
                                :
                                null
                            }
                        </ListGroup.Item>
                    )
                }
            </ListGroup>
        </Card>    
    )
}