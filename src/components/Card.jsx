import React from "react";
import card from "./stylesheet/card.module.css";
import image from "../images/IMG_20231007_094400_001.jpg";

function Card({data}) {
  return (
    <div className={card.main}>
      <div className={card.thecard}>
        <div className={card.front}>
          <div className={card.top}>{data.cardTitle}</div>
          <div className={card.bottom}>
            <img className={card.image} src={data.projectImg} />
          </div>
        </div>
        <div className={card.back}>
          <div className={card.title}> Projet Title</div>
          <div className={card.desc}>
           {data.projectdesc}
          </div>
          {data.link && (
             <a href={data.projectlink}>
             <button
                className={card.btn}
              >
                Explore website
              </button>
             </a>
          )}
        </div>
      </div>
    </div>
  );
}

export default Card;
