import React from 'react'
import { Link } from "react-router-dom";

const Nav = (props) => {
    const { managePageActive } = props

    return (
      <div className="fs-3 mb-3">
          { managePageActive ?
              <div>
                  <Link to="/players/list" className="fw-bold">Manage Players</Link>
                  <span className="text-primary mx-2"> | </span>
                  <Link to="/status/game/1">Manage Players Status</Link>
              </div>
              :
              <div>
                  <Link to="/players/list">Manage Players</Link>
                  <span className="text-primary mx-2"> | </span>
                  <Link to="/status/game/1" className="fw-bold">Manage Players Status</Link>
              </div>
          } 
      </div>
    );
}

export default Nav