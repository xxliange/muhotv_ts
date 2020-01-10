/**
 * web - nav
 * pc端nav
 */

import React, {useState, useEffect} from 'react';
import {Link, NavLink} from 'react-router-dom';
import './index.scss';
import {request} from './../../../utils/utils';

/**
 * @constructor WNav
 * WNav - Hook
 */
const WNav = () =>{
    const [title, setTitle] = useState<string | null>('web nav');
    useEffect(()=>{
        document.title = '首页';
        setTitle('这是pc端的nav');
        console.log(request({url:'', headers:'', method:'', data:{a:1}}));
    },[]);
    return(
        <nav className="w-nav-container">
            <section className="w-nav-wrap">

            </section>
        </nav>
    )
};

export default WNav;