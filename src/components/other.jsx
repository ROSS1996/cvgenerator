import React, { useState } from "react";
import { v4 as uniqueKey } from "uuid";


function SocialMedias(props) {
  const myMedias = props.medias.map((item) => (
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
  const mySkills = props.skillsList.map((item) => (
    <li key={uniqueKey()}>{item}</li>
  ));
  return <>{mySkills} </>;
}

function TechSkills(props) {
  const mySkills = props.skillsList.map((item) => (
    <li key={uniqueKey()}>{item}</li>
  ));
  return <>{mySkills} </>;
}

function Languages(props) {
  const myLanguages = props.languagesList.map((item) => (
    <li key={uniqueKey()}>
      <h4>{item.language}</h4>
      <p>{item.level}</p>
    </li>
  ));
  return <>{myLanguages} </>;
}

export { SocialMedias, KeySkills, TechSkills, Languages };
