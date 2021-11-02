import React from "react";
import './styles.css';
import StarIcon from '@mui/icons-material/Star';
function Cards(props) {
    return (
      <div className="card">
          <img className="card__image" src={props.photo} alt="room-photo"/>
          <div className="card__description">
            {props.superHost && <p className="card__description__sh">SUPER HOST</p>}
            <p className="card__description__type">
                {props.type}
                {props.beds && `. ${props.beds} beds`}
            </p>
            <div className="card__description__rating">
              <StarIcon className="card__description__rating__icon"/>
              {props.rating}</div>
        </div>
        <p className="card__title">
            {props.title}
        </p>
      </div>
    );
  }
  
  export default Cards;