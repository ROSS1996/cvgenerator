import React, { useState } from "react";
import { v4 as uniqueKey } from "uuid";


function SocialMedias(props) {
  const [mediasList, setMedias] = useState([
    { website: "LinkedIn", address: "linkedin.com/johnutw" },
    { website: "Github", address: "github.com/johnutw" },
  ]);

  const myMedias = mediasList.map((item) => (
    <li key={uniqueKey()}>
      <h4>{item.website}</h4>
      <a href={"http://" + item.address} rel="external">
        <p>{item.address}</p>
      </a>
    </li>
  ));
  return <>{myMedias} </>;
}

function KeySkills(props) {
  const [skillsList, setSkills] = useState([
    "Project Management",
    "Team Management",
    "Budget Management",
    "Change Management",
    "IT Strategy Development",
    "IT Process Analysis",
    "IT Integration and Migrations",
  ]);

  const mySkills = skillsList.map((item) => (
    <li key={uniqueKey()}>{item}</li>
  ));
  return <>{mySkills} </>;
}

function TechSkills(props) {
  const [skillsList, setSkills] = useState([
    "MS Windows Server 2003/2008",
    "Linux/Unix",
    "LAN, WAN, WLAN, SD-WAN",
    "Active Directory",
    "Cisco Routers",
    "SAP",
  ]);

  const mySkills = skillsList.map((item) => (
    <li key={uniqueKey()}>{item}</li>
  ));
  return <>{mySkills} </>;
}

function Languages(props) {
  const [languagesList, setLanguages] = useState([
    { language: "Spanish", level: "Intermediate" },
    { language: "Portuguese", level: "Fluent" },
    { language: "French", level: "Basic" },
  ]);

  const myLanguages = languagesList.map((item) => (
    <li key={uniqueKey()}>
      <h4>{item.language}</h4>
      <p>{item.level}</p>
    </li>
  ));
  return <>{myLanguages} </>;
}

export { SocialMedias, KeySkills, TechSkills, Languages };
