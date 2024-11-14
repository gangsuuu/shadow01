import { useState } from "react";
import IntroPath from "./IntroPath";

export default function IntroSvg({item, index, duration, delay}) {

  return(
      <div className="IntroSvg">
        <svg 
        >
          <IntroPath item={item} index={index} duration={duration} delay={delay}></IntroPath>
        </svg>
      </div>
    )
}