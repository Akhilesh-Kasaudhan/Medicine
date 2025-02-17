import React from "react";
import Images from "../../Constants/Images";

function NoRecord() {
  return (
    <React.Fragment>
      <div className="no-record">
        <img src={Images.noData} className="img-fluid" />
      </div>
    </React.Fragment>
  );
}

export default NoRecord;
