import React from 'react'

// import css
import classes from './ProjectCard.module.css';

//import icons
import * as FaIcons from 'react-icons/fa';

//import image
import projectImg from '../../../assets/images/projects.jpg'

const ProjectCard=(props)=> {

  let web = props.cardTags["web"];
  let ml = props.cardTags["ml"];
  let app = props.cardTags["app"];

  const webList = web.map((tag)=>{
    return (
      <li key={tag}>
        <div className={`${classes.singleTag} ${classes.web}`}>
          {tag}
        </div>
      </li>
    )
  });

  const mlList = ml.map((tag)=>{
    return (
      <li key={tag}>
        <div className={`${classes.singleTag} ${classes.ml}`}>
          {tag}
        </div>
      </li>
    )
  });

  const appList = app.map((tag)=>{
    return (
      <li key={tag}>
        <div className={`${classes.singleTag} ${classes.app}`}>
          {tag}
        </div>
      </li>
    )
  });

  let borderStyle = {};

  let orderClass = [classes.cardImg];
  if(!props.order){
    orderClass = [classes.cardImg,classes.order];
    borderStyle= {
      borderLeft:"0.5px solid var(--border-color)",
      borderRight:"none"
    };
  }

  return (
    <div className={classes.ProjectCard}>
      <div className={`${classes.card}`}>
        <div className={orderClass.join(" ")} style={borderStyle}>
          <img src={projectImg} alt="project"/>
        </div>
        <div className={classes.cardBody}>
          <div className={classes.cardInfo}>
            <h1 className={classes.cardHeader}>
              {props.cardHeader}
            </h1>
            <ul className={classes.tags}>
              {webList}
              {mlList}
              {appList}
            </ul>
          </div>
          <div className={classes.cardText}>
            {props.cardText}
            <ul  className={classes.links}>
              <li>
                <a href={props.links.github}>
                  <FaIcons.FaGithub />
                  <span>
                    &nbsp;Github
                  </span>
                </a>
              </li>
            </ul>
          </div>
        </div> 
      </div>
    </div>
  )
}

export default ProjectCard
