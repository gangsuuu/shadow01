import gsap from "gsap"
import { useEffect } from "react"

export default function IntroPath({item, index, duration, delay}) {
  useEffect(()=>{
    const ease = 'power4.inOut'

    gsap.to(`#path_${index}`,{
      attr: {d:`M ${item[0].end[0][0]} ${item[0].end[0][1]} L ${item[0].end[1][0]} ${item[0].end[1][1]} L ${item[0].end[2][0]} ${item[0].end[2][1]} L ${item[0].end[3][0]} ${item[0].end[3][1]} Z`},
      duration: duration,
      delay: delay*1,
      ease: ease
    })
    gsap.to(`#path_${index}`,{
      attr: {d:`M ${item[1].end[0][0]} ${item[1].end[0][1]} L ${item[1].end[1][0]} ${item[1].end[1][1]} L ${item[1].end[2][0]} ${item[1].end[2][1]} L ${item[1].end[3][0]} ${item[1].end[3][1]} Z`},
      duration: duration,
      delay: delay*2,
      ease: ease
    })
    gsap.to(`#path_${index}`,{
      attr: {d:`M ${item[2].end[0][0]} ${item[2].end[0][1]} L ${item[2].end[1][0]} ${item[2].end[1][1]} L ${item[2].end[2][0]} ${item[2].end[2][1]} L ${item[2].end[3][0]} ${item[2].end[3][1]} Z`},
      duration: duration,
      delay: delay*3,
      ease: ease
    })

    if(index !== 3){
      gsap.to(`#path_${index}`,{
        attr: {d:`M ${item[3].end[0][0]} ${item[3].end[0][1]} L ${item[3].end[1][0]} ${item[3].end[1][1]} L ${item[3].end[2][0]} ${item[3].end[2][1]} L ${item[3].end[3][0]} ${item[3].end[3][1]} Z`},
        duration: duration,
        delay: delay*4,
        ease: ease
      })
    } else {
      // gsap.to(`#path_${index}`,{
      //   attr: {d:`M ${item[3].end.pos[0]} ${item[3].end.pos[1]} A ${item[3].end.r} ${item[3].end.r} 0 1 0 ${item[3].end.pos[0]} ${item[3].end.pos[1] + 0.1}`},
      //   duration: duration,
      //   delay: delay*4,
      //   ease: ease
      // })
    }

  },[])
  
  
  return(

    <defs>
      <clipPath id={`path_${index}`}>
        <path
          d={`M ${item[0].start[0][0]} ${item[0].start[0][1]} L ${item[0].start[1][0]} ${item[0].start[1][1]} L ${item[0].start[2][0]} ${item[0].start[2][1]} L ${item[0].start[3][0]} ${item[0].start[3][1]} Z`}
          id={`path_${index}`}
        ></path>
      </clipPath>
    </defs>
  )

}