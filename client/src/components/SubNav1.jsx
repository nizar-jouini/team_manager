// this component is the subnav of ListPlayer and AddPlayer

import React from "react";
import { Link } from "react-router-dom";

const SubNav1 = (props) => {
    const { pageActive } = props

  return (
    <div className="fs-3">
        { (pageActive === "ListPage") &&
            <div>
                <Link to="/players/list" className="fw-bold">List</Link>
                <span className="text-primary mx-2"> | </span>
                <Link to="/players/addplayer">Add Player</Link>
            </div>
        }
        { (pageActive === "AddPage") &&
            <div>
                <Link to="/players/list">List</Link>
                <span className="text-primary mx-2"> | </span>
                <Link to="/players/addplayer" className="fw-bold">Add Player</Link>
            </div>
        }
    </div>
  );
};

export default SubNav1;
