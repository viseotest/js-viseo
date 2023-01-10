import React, { useState, useEffect } from 'react';
import { mockNav, NavItemProps, DataProps } from '../../data/mockContent';
import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';
import { NavLink, useSearchParams } from 'react-router-dom';


export function NavigationItem ( { widthConfig }: NavItemProps ) {

    const [menuItem, setMenuItem] = useState<DataProps[]>([]);
    const [searchParams, setSearchParams] = useSearchParams();
    const [currentView,setCurrentView] = useState<String | null>(null);

    const fetchData = () => {
        setMenuItem(mockNav)
    }

    useEffect( () => {
        fetchData()
        setCurrentView(searchParams.get('view'));
    },[searchParams])

    const handleShowItems = ({ code = null }:DataProps) => {
        if(code!=null) document.getElementById(code)?.classList.toggle('is-visible')
    }

    return (
        <Card style={{ width: widthConfig }}>
            <Card.Header>
                <h2>Menu</h2>
            </Card.Header>
            <ListGroup style={{ height: 'auto' }}>
                { menuItem.map( 
                    ( item,key ) =>
                        <ListGroup.Item 
                            key={key}
                            style={ item.subTitle ? { height: '100%' } : { height: 'auto' } }>
                            { 
                                item.url ? 
                                    <NavLink to={`/js/${item.url}`}>
                                        <h6>{item.title}</h6>
                                    </NavLink>
                                    : 
                                    <h6 onClick={ (e) => handleShowItems(item) } className="list-group-item-alone">
                                        <span className="list-group-special-item">+</span> {item.title}
                                    </h6> 
                            }
                            { 
                                item.subTitle ? 
                                <div id={`${item.code}`} className={ currentView === item.code ? '':'is-visible' }>
                                    { 
                                        item.subTitle.map( (subItem,key) =>  
                                            <div id={``} key={key} style={{ padding: 8 }}>
                                                <NavLink to={`/js/${subItem.url}?view=${item.code}`}>{`${subItem.title}`}</NavLink>
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