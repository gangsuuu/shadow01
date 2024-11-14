import gsap from "gsap";
import IntroSvg from "./IntroSvg";
import { useEffect, useState } from "react";
import { getPathPos } from "../../../hooks/resize";
import IntroClipPath from "./IntroClipPath";



const boxes = getPathPos()
const duration = .88
const delay = 1.3


export default function IntroSvgs() {

  useEffect(() => {
  },[])




  return(
   <div className="IntroSvgsWrapper">
      {boxes.map((item, index) =>( 
        <IntroSvg key={index} index={index} item={item} delay={delay} duration={duration} />
      ))}
      {boxes.map((item, index)=>(
        <IntroClipPath key={index} index={index} delay={delay} duration={duration}/>
      ))} 
   </div>
  )

}