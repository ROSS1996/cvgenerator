import React, { useState } from "react";
import { v4 as uniqueKey } from "uuid";

function Attributions(props) {
  const attributionsList = props.listOf.map((item) => (
    <li key={uniqueKey()}>{item}</li>
  ));
  return <>{attributionsList}</>;
}

function Experience(props) {
  const [jobHistory, setJobs] = useState([
    {
      dateStarted: "2012/11",
      dateFinished: "Present",
      company: "Software House",
      role: "Project Manager",
      mainAttributions: [
        "Responsible for creating, improving and developing IT project strategies",
        "Manage project teams and constructors",
        "Plan and monitor IT budgets",
        "Initiate and manage projects",
        "Manage key projects",
      ],
    },
    {
      dateStarted: "2005/11",
      dateFinished: "2012/11",
      company: "Support Consultant",
      role: "Project Manager",
      mainAttributions: [
        "Prepared infrastructure performance analysis",
        "Managed projects and support related to SAP modules",
        "Recommended optimization measures",
        "Implemented systems",
      ],
    },
  ]);

  const myHistory = jobHistory.map((item) => (
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
        <Attributions listOf={item.mainAttributions} />
      </ul>
    </div>
  ));
  return <>{myHistory} </>;
}

export default Experience;
