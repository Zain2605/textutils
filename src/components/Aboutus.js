import React from 'react'

export default function () {
  return (
      <>
    <div>
    <div className="accordion my-5" id="accordionExample">
  <div className="accordion-item">
    <h2 className="accordion-header" id="headingOne">
      <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
        About TextUtils
      </button>
    </h2>
    <div id="collapseOne" className="accordion-collapse collapse show" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
      <div className="accordion-body">
        This is a text utility which helps to manipulate text. <br/>Shows number of words and characters too. <br/>Has dark mode for better readabilty.
      </div>
    </div>
  </div>
  <div className="accordion-item">
    <h2 className="accordion-header" id="headingTwo">
      <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
        Techs Used
      </button>
    </h2>
    <div id="collapseTwo" className="accordion-collapse collapse" aria-labelledby="headingTwo" data-bs-parent="#accordionExample">
      <div className="accordion-body">
        
        <ul>
            <li>ReactJS</li>
            <li>Bootstrap</li>
            <li>HTML</li>
        </ul>
        
      </div>
    </div>
  </div>
 
</div>
    </div>
    </>
  )
}
