import React from "react";

//import Css
import classes from "./TeamMember.module.css";

//import icons
import * as FiIcons from "react-icons/fi";

const TeamMember = (props) => {
  let cardClassDomain, cardImgDomain;
  switch (props.domain) {
    case 1:
      cardClassDomain = classes.card1;
      cardImgDomain = classes.cardImg1;
      break;
    case 2:
      cardClassDomain = classes.card2;
      cardImgDomain = classes.cardImg2;
      break;
    case 3:
      cardClassDomain = classes.card3;
      cardImgDomain = classes.cardImg3;
      break;
    case 4:
      cardClassDomain = classes.card4;
      cardImgDomain = classes.cardImg4;
      break;
    default:
      break;
  }

  return (
    <div className={classes.TeamMember}>
      <div className={`${classes.card} ${cardClassDomain}`}>
        <div>
          <div className={`${classes.cardImg} ${cardImgDomain}`}>
            <img src={props.image} alt={props.cardName} />
          </div>
          <div className={classes.cardBody}>
            <h1 className={classes.cardName}>{props.cardName}</h1>
            <h2 className={classes.cardDesignation}>{props.cardDesignation}</h2>
            <ul className={classes.linkList}>
              <li>
                <a href={props.links.github}>
                  <FiIcons.FiGithub />
                </a>
              </li>
              <li>
                <a href={props.links.linkedin}>
                  <FiIcons.FiLinkedin />
                </a>
              </li>
              <li>
                <a href={props.links.instagram}>
                  <FiIcons.FiInstagram />
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TeamMember;
