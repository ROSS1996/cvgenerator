import React from "react";
import { v4 as uniqueKey } from "uuid";

function Attributions (props) {
    const attributionsList = props.listOf.map((item) => (
        <li key={uniqueKey()}>
            {item}
        </li>
    ))
    return <>{attributionsList}</>;
}

function Experience(props) {
  const myHistory = props.listOf.map((item) => (
    <div key={uniqueKey()} className="experienceItem">
      <div className="experienceInfo">
        <h4 className="companyName">{item.company}</h4>
        <div className="rolePeriod">
          <h4 className="companyRole">{item.role}</h4>
          <span> | </span>
          <div className="period">
            <h4 className="jobStart">{item.dateStarted}</h4>
            <span>-</span>
            <h4 className="jobEnd">{item.dateFinished}</h4>
          </div>
        </div>
      </div>
      <ul>
        <Attributions listOf={item.mainAttributions}/>
      </ul>
    </div>
  ));
  return <>{myHistory} </>;

  /*
      <ul>

        <li>
          Responsible for creating, improving and developing IT project
          strategies
        </li>
        <li>Manage project teams and constructors</li>
        <li>Plan and monitor IT budgets</li>
        <li>Initiate and manage projects</li>
        <li>Manage key projects</li>
      </ul> */
}

export default Experience;
