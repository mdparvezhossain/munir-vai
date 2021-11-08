import React from 'react'

const CardSection = ({item}) => {
    return (
        <>
            <section className="one">
                <img src={`${process.env.PUBLIC_URL}/asets/${item.logo}`} alt="car-icon" className="icon" />
                <h2 className="title">{item.title}</h2>
                <p className="description">{item.subTitle}</p>
                <button className="btn btn1">Learn More</button>
            </section> 
        </>
    )
}

export default CardSection;
