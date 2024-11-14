import gsap from "gsap"
import { useEffect, useState } from "react"
import IntroImg from "./IntroImg"

const hrefs = [
  'https://wallpapers.com/images/hd/1920x1080-aesthetic-glrfk0ntspz3tvxg.jpg',
  "https://i.pinimg.com/originals/6b/fa/12/6bfa1233b5138c63ceb96aaad3a9a07a.jpg",
  "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRMSe5UOIq7k_4NMINroIgZIkVqiIewrIckww&s",
  "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTwvbxpA3RefT2WIomxTk5NtJiFDBC0MwPwDeN-G4YOE76AZVnzMn-CPu0mN45uHm8N4YE&usqp=CAU",
]

export default function IntroClipPath({index,duration,delay}) {

  useEffect(()=>{
  },[])


  return(


    <svg className="Intro__ImagesBox"
      width={'100vw'}
      height={'100vh'}
    >
      <g>
        {hrefs.map((href, i) => (
          <IntroImg href={href} key={i} number={i} index={index} duration={duration} delay={delay} length={hrefs.length}></IntroImg>
        ))}
      </g>
    </svg>

  )
}