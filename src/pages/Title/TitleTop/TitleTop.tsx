import React from 'react';
import { faStar } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import './TitleTop.css';

type TitleTopProps = {
  titleName: string;
  year: number;
  contentRating: string;
  runtimeStr: string;
  imDbRating: number;
  imDbRatingVotes: number;
};

const TitleTop = (props: TitleTopProps) => {
  return (
    <div className="title-top">
      <div className="wrapper">
        <div className="movie-main-info-container">
          <h1 className="title">{props.titleName}</h1>
          <ul className="movie-main-info">
            <li className="year">{props.year}</li>
            <li>{props.contentRating}</li>
            <li>{props.runtimeStr}</li>
          </ul>
        </div>
        <div className="imdb-rating">
          <p className="imdb-rating-title">IMDB RATING</p>
          <div className="imdb-rating-container">
            <FontAwesomeIcon icon={faStar} color="gold" />
            <div className="imdb-rating-block">
              <p className="imdb-rating-value">
                <b className="imdb-rating-number">{props.imDbRating}</b>/10
              </p>
              <p className="imdb-rating-votes">{props.imDbRatingVotes}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TitleTop;
