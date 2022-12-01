import React, { useState } from "react";
import { v4 as uniqueKey } from "uuid";

function ContactData(props) {
  return (
    <section id="personalData">
      <div className="sectionTwo">
        <h3>Personal Data</h3>
      </div>
      <div>
        <h4>Address</h4>
        <p id="address">{props.address}</p>
      </div>
      <div>
        <h4>Phone</h4>
        <p>{props.phone}</p>
      </div>
      <div>
        <h4>Email</h4>
        <a href={"mailto://" + props.email}>
          {" "}
          <p>{props.email}</p>{" "}
        </a>
      </div>
    </section>
  );
}

function SocialMedias(props) {
  const myMedias = props.medias.map((item) => (
    <li key={uniqueKey()}>
      <h4>{item.website}</h4>
      <a href={"http://" + item.address} rel="external">
        <p>{item.address}</p>
      </a>
    </li>
  ));
  return (
    <section id="socialmedia">
      <h3 className="section">Social Media</h3>
      <ul>{myMedias}</ul>
    </section>
  );
}

function KeySkills(props) {
  const mySkills = props.skillsList.map((item) => (
    <li key={uniqueKey()}>{item}</li>
  ));
  return (
    <section id="keySkills">
      <div className="section">
        <h3>Key Skills</h3>
      </div>
      <ul>{mySkills}</ul>
    </section>
  );
}

function TechSkills(props) {
  const mySkills = props.skillsList.map((item) => (
    <li key={uniqueKey()}>{item}</li>
  ));
  return (
    <section id="techSkills">
      <h3 className="section">Technical Skills</h3>
      <ul>{mySkills}</ul>
    </section>
  );
}

function Languages(props) {
  const myLanguages = props.languagesList.map((item) => (
    <li key={uniqueKey()}>
      <h4>{item.language}</h4>
      <p>{item.level}</p>
    </li>
  ));
  return (
    <section id="languages">
      <div className="section">
        <h3>Languages</h3>
      </div>
      <ul>
        <li>
          <h4>{props.native}</h4>
          <p>Native</p>
        </li>
        {myLanguages}
      </ul>
    </section>
  );
}

export { ContactData, SocialMedias, KeySkills, TechSkills, Languages };
