import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./Home.css";
function Home() {
  const [state, setstate] = useState(false);
  return (
    <div >
      <div>
        <button onClick={() => setstate(!state)} className="button1">
          Open
        </button>
        <div className={state ? "sidebaroff" : "sidebaron"}>
          <button className="button2" onClick={() => setstate(!state)}>Close</button>
          <ul>
            <li>
              <Link to="/" className="LinkOn">
                Home
              </Link>
            </li>
            <li>
              <Link to="/ToDo App" className="LinkOn">
                ToDo App
              </Link>
            </li>
            <li>
              <Link to="/Ram" className="LinkOn">
                Ram
              </Link>
            </li>
            <li>
              <Link to="/Vijay" className="LinkOn">
                Vijay
              </Link>
            </li>
            <li>
              <Link to="/Das" className="LinkOn">
                Das
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Home;
