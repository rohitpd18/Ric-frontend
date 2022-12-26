import React from 'react'
import facebook from "../Assets/Image/facebook.svg"
import linkedin from "../Assets/Image/linkedin.svg"
 
const MemberCard = (props) => {
  return (
    <div>
      <div className="card mx-auto m-3 border border-3 border-primary p-2" style={{ width: '23rem' }}>
        <img src="https://drive.google.com/open?id=1uxrGeEnmCtGkrzgWre6X9ZPLOHyb7wzq" className="card-img-top img-thumbnail border border-2 border-info rounded-circle p-2" style={{ height: '50vh', boxShadow:' rgba(0, 0, 0, 0.3) 0px 19px 38px, rgba(0, 0, 0, 0.42) 0px 15px 12px'}} alt="..." />
        <div className="card-body mx">
          <h3 className="card-title">{props.name}</h3>
          <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>

            <a href={props.facebook} className="btn btn-light rounded-circle mx-5">
              <img src={facebook}  style={{ height: '30px', width: '30px' }} alt="FB-icon" />
            </a>
            <a href={props.linkedin} className="btn btn-light mx-5">
              <img src={linkedin}  style={{ height: '33px', width: '33px' }} alt="linkedin-icon" />
            </a>
        </div>
      </div>
    </div>
  )
}

export default MemberCard
