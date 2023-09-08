import React from 'react'
import { Link } from 'react-router-dom'

const SubNav2 = (props) => {
    const { gameId } = props

  return (
    <div>
        <div className='mb-3 text-center'>
            {
                ( gameId === "1" ) &&
                    <div>
                        <Link to="/status/game/1" className="fw-bold fs-4">Game 1</Link>
                        <span className="text-primary mx-2"> | </span>
                        <Link to="/status/game/2" className="fs-4">Game 2</Link>
                        <span className="text-primary mx-2"> | </span>
                        <Link to="/status/game/3" className="fs-4">Game 3</Link>
                        <span className="text-primary mx-2"> | </span>
                    </div>
            }
            {
                ( gameId === "2" ) &&
                    <div>
                        <Link to="/status/game/1" className="fs-4">Game 1</Link>
                        <span className="text-primary mx-2"> | </span>
                        <Link to="/status/game/2" className="fw-bold fs-4">Game 2</Link>
                        <span className="text-primary mx-2"> | </span>
                        <Link to="/status/game/3" className="fs-4">Game 3</Link>
                        <span className="text-primary mx-2"> | </span>
                    </div>
            }
            {
                ( gameId === "3" ) &&
                    <div>
                        <Link to="/status/game/1" className="fs-4">Game 1</Link>
                        <span className="text-primary mx-2"> | </span>
                        <Link to="/status/game/2" className="fs-4">Game 2</Link>
                        <span className="text-primary mx-2"> | </span>
                        <Link to="/status/game/3" className="fw-bold fs-4">Game 3</Link>
                        <span className="text-primary mx-2"> | </span>
                    </div>
            }
        </div>
    </div>
  )
}

export default SubNav2