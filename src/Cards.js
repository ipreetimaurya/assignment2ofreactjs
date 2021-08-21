import React from 'react'

function Cards(props) {
  return (
    <>
      <div className="cards">
        <div className="image">
          <img src={props.image} className="imgWidth" alt="london" />
        </div>
        <div className="cards-content">
          <h4>Cards Title:{props.title} </h4>
          <h5>Cards Subtitle: {props.subtitle} </h5>
          <p>Description: {props.desc} </p>
          <button className="btnstyle">Read More</button>
        </div>
      </div>
    </>
  )
}

export default Cards;
