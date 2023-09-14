import React from "react";
import Movies from "./Movies";
// import '../styles/body-style.css';

export default function BodySection() {
    return (
        <div className="container">
            <h2 className='featured'>Featured Movies</h2>
            <div className="row">
                <Movies start = {0} end = {4}/>
            </div>
            <div className="row">
                <Movies start={4} end={8}/>
            </div>
            <div className="row">
                <Movies start={8} end={12}/>
            </div>
      </div>
    )
}
