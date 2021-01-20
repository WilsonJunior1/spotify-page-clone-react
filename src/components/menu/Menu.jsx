import React from 'react'
import Logo from '../../assets/icons/Logo.png'
import './Menu.css'

export default (props) => {
    return(
        <div>
            <input id="menu-hamburguer" type="checkbox"/>
            <label htmlFor="menu-hamburguer">
                <div className="menu">
                    <span className="hamburguer"></span>
                </div>
            </label>
            <div className="lateral">
            <nav>
                <div className="item-menu">
                    <h1>Premium</h1>
                </div>
                <div className="item-menu">
                    <h1>Suporte</h1>
                </div>
                <div className="item-menu">
                    <h1>Baixar</h1>
                </div>
                <div className="item-menu">
                    <h1>__</h1>
                </div>
                <div className="item-menu item-menu-cinza">
                    <h3>Inscrever-se</h3>
                </div>
                <div className="item-menu item-menu-cinza">
                    <h3>Entrar</h3>
                </div>
                <div className="item-menu item-menu-logo">
                    <img src={Logo}/>
                </div>
            </nav>
            </div>  
        </div>
    )

}