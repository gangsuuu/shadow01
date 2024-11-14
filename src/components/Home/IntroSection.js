import { useEffect, useRef } from "react";
import IntroSvgs from "./Intro/IntroSvgs";
import IntroTexts from "./Intro/IntroTexts";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";


// gsap.registerPlugin(ScrollTrigger);

export default function IntroSection() {
  const secRef = useRef()
  const containerRef = useRef()
  useEffect(()=>{
    gsap.registerPlugin(ScrollTrigger);
    const sec = secRef.current
    const container = secRef.current
    let pinWrapWidth
    let horizontalScrollLength
    // console.log(container.offsetWidth, container.offsetWidth - window.innerWidth);


    function refresh() {
      pinWrapWidth = container.offsetWidth;
      horizontalScrollLength = pinWrapWidth - window.innerWidth;
      console.log(horizontalScrollLength,pinWrapWidth);
    }



    gsap.to(container, {
      scrollTrigger: {
        scrub: true,
        trigger: sec,
        pin: true,
        start: "top top",
        end: () => `+=${container.offsetWidth}`,
        invalidateOnRefresh: true,
        onUpdate: () => {
          console.log('update');
          refresh()
        }
      },
      // x: () => -`${container.offsetWidth - window.innerWidth}`,
      x: 100,
      ease: "none"
    });

  },[])




  return(
    <section 
      ref={secRef}
      className="section__intro">
      <div
        ref={containerRef}
        className="section__introContainer">
        <IntroSvgs></IntroSvgs>
        <IntroTexts></IntroTexts>
      </div>
    </section>
  )
}