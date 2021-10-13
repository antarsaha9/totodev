import React from "react";
import TimeFromNow from 'date-fns/formatDistanceToNow';

import StarRating from '~components/Widgets/StarRating';
import { Link } from "~components/core";

const RatingCard = ({ star, title, text, userName, userId, date, children }) => {
  return (
    <div className="card shadow-none">
      <div className="card-header bg-light shadow-none">
        <div className="rating-stars d-flex">
          <StarRating rating={star} starSize="lg" editable={false} />
        </div>
        <div className="card-options">
          <span>
            by{""}
            <Link to={"/profile?id=" + userId} className="text-primary">
              {userName}
            </Link>{" "}
            {date && <span className="text-muted">{TimeFromNow(new Date(date), { addSuffix: true })}</span>}
          </span>
        </div>
      </div>
      <div className="card-body">
        <h4 className=" dark-grey-text mb-2">{title}</h4>
        <p className="font-weight-normal dark-grey-text mb-0">
          {text}
        </p>
      </div>
      {children}
    </div>
  );
}
export default RatingCard;