import gsap from "gsap"
import { useEffect } from "react"

export default function IntroImg({href, opacity=1, index, duration, delay, number, length}) {

  useEffect(()=>{
    if(number !== 0){
      gsap.to(`#clipImage_${index}_${number}`,{
        duration: duration,
        delay: (delay*length) - delay*(number-1) + 0.28,
        opacity:0,
      })
    }


  },[])
  
  return (
    <image
      id={`clipImage_${index}_${number}`}
      href={href}
      opacity={opacity}
      width="100%"
      height="100%"
      clipPath={`url(#path_${index})`}
    >
    </image>
  )
}