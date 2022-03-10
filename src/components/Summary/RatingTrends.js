import React from 'react';
import HelpIcon from '@mui/icons-material/Help';
import ToolTip from '@mui/material/Tooltip';
import Rating from '@mui/material/Rating';

const starsTip = 'Star rating subject to change depending on measures and other resources. For more information, please contact NCQA.';

function RatingsTrends() {
  return (
    <div className="rating-trends">
      <div className="flex flex-col ">
        <div className="flex mt-2">
          <h1 className="rating-trends__h2-header">
            Ratings & Trends
          </h1>
        </div>
        <p className="rating-trends__summary">
          Descriptive text about this section and impacts and events that
          contribute to star rating ...
        </p>
      </div>
      <div className="rating-trends__panel-box">
        <div className="flex">
          <div className="flex flex-col text-center mt-0 width-25 StarRate">
            <div className="rating-trends__header-align">
              <h3 className="rating-trends__h3-header">
                Star Rating
              </h3>
              <ToolTip title={starsTip}>
                <HelpIcon className="rating-trends__help" />
              </ToolTip>
            </div>
            <Rating
              className="rating-trends__star-rating"
              name="plan-rating"
              value={3.5}
              precision={0.5}
              readOnly
            />
          </div>
          <div className="rating-trends__border" />
          <div className="rating-trends__panel">
            <h3 className="rating-trends__h3-header">
              Measure % Compliance
            </h3>
            Coming soon.
          </div>
          <div className="rating-trends__border" />
          <div className="rating-trends__panel">
            <h3 className="rating-trends__h3-header">
              Measure % Compliance
            </h3>
            Coming soon.
          </div>
          <div className="rating-trends__border" />
          <div className="flex flex-col text-center mt-0 width-25 ">
            <h3 className="rating-trends__h3-header">
              Projected Yearly Bonus per Plan
            </h3>
          </div>
        </div>
        <div className="flex justify-end mt-6 width-75">
          <button
            type="button"
            className="rating-trends__view-rating-details-button"
          >
            View Rating Details
          </button>
        </div>
      </div>
    </div>
  );
}

export default RatingsTrends;
