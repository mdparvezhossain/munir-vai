import React from 'react';
import './style.css';
import { card } from '../../data/card.json';
import CardSection from './CardSection';

const Home = () => {
    return (
        <>
            <main className="container">
                {card.map((items) => {
                    return <CardSection key={items.id} item={items} />
                })}           
            </main>
            <footer 
                className="attribution">Challenge by 
                <a href="https://www.frontendmentor.io?ref=challenge" 
                    target="_blank">Frontend Mentor
                </a> Coded by 
                <a href="https://github.com/tahoeboelat">Muhamad Nur Alfi Syahrin
                </a>.
            </footer>  
                
        </>
    )
}

export default Home;
