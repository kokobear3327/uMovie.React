import React from 'react';
import FontAwesome from 'react-fontawesome';
import PropTypes from 'prop-types';
import { calcTime, convertMoney } from '../../helpers';

import { StyledMovieInfoBar } from '../styles/StyledMovieInfoBar';

const MovieInfoBar = ({ time, budget, revenue, status, release_date, original_language, popularity, production_countries }) => (
  <StyledMovieInfoBar>

  
    <div className="movieinfobar-content">
      <div className="movieinfobar-content-col">
        <FontAwesome className="fa-time" name="clock-o" size="2x" />
        <span className="movieinfobar-info">
          Running time: {calcTime(time)}
        </span>
      </div>

      <div className="movieinfobar-content-col">
        <FontAwesome className="fa-budget" name="thermometer-full" size="2x" />
        <span className="movieinfobar-info">
              &nbsp;&nbsp;  status: {status}
        </span>
      </div>

      <div className="movieinfobar-content-col">
      <FontAwesome className="fa-budget" name="history" size="2x" />
      <span className="movieinfobar-info">
        Release Date: {release_date}
      </span>
    </div>


    <div className="movieinfobar-content-col">
    <FontAwesome className="fa-budget" name="globe" size="2x" />
    <span className="movieinfobar-info">
      Original_Language: {original_language}
    </span>
  </div>


  <div className="movieinfobar-content-col">
  <FontAwesome className="fa-budget" name="fire" size="2x" />
  <span className="movieinfobar-info">
    Popularity: {popularity}
  </span>
</div>

<div className="movieinfobar-content-col">
<FontAwesome className="fa-revenue" name="ticket" size="2x" />
<span className="movieinfobar-info">
  Revenue: {convertMoney(revenue)}
</span>
</div>









    </div>
  </StyledMovieInfoBar>
);

MovieInfoBar.propTypes = {
  time: PropTypes.number,
  budget: PropTypes.number,
  revenue: PropTypes.number,
}

export default MovieInfoBar;

