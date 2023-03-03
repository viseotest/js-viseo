import React, { useState, useEffect, CSSProperties } from 'react';
import items from '../../data/navigation.json';
import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';
import { NavLink, useSearchParams } from 'react-router-dom';

console.log(items)

export function NavigationItem () {

    const [menuItem] = useState<any[]>(items.items);
    const [fixedNav, setFixedNav] = useState<CSSProperties>({});
    const [searchParams] = useSearchParams();

    function setFixedNavScroll ( e : Event) {
        const window = e.currentTarget as Window;
        const scroll = window.scrollY;
        if (scroll >= 150) setFixedNav({ position: 'fixed', top: 20 })
        if (scroll < 150) setFixedNav({})

    }

    useEffect( () => {
        window.addEventListener( 'scroll', setFixedNavScroll );
    },[searchParams])

    return (
        <Card style={ fixedNav }>
            <ListGroup style={{ height: 'auto' }}>
                { menuItem.map( 
                    ( item,key ) =>
                        <ListGroup.Item 
                            key={key}
                            style={ item.subTitle ? { height: '100%' } : { height: 'auto' } }
                            >
                                { 
                                    item.subTitle ? 
                                    <>
                                        { 
                                            item.url ? 
                                            <h6 className="list-group-item-alone">
                                                <NavLink to={`/article/${item.url}`}>
                                                    {item.title}
                                                </NavLink>
                                            </h6>
                                            :
                                            <h6 className="list-group-item-alone">
                                                {item.title}
                                            </h6> 
                                        }
                                        { 
                                            item.subTitle.map( (subItem:any) =>  
                                                <div key={subItem} style={{ padding: 8, marginLeft: 10 }}>
                                                    <NavLink to={`/article/${subItem.url}`}>{`${subItem.title}`}</NavLink>
                                                </div>
                                            )
                                        }   
                                    </>
                                    :
                                    <h6 style={{ fontWeight: 800 }}>
                                        <NavLink to={`/article/${item.url}`}>
                                            {item.title}
                                        </NavLink>
                                    </h6>
                                }
                        </ListGroup.Item>
                    )
                }
            </ListGroup>
        </Card>    
    )
}