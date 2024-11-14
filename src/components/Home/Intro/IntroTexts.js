import { useEffect, useRef } from "react"

export default function IntroTexts() {
  const row1Ref = useRef()
  const row2Ref = useRef()
  const row3Ref = useRef()
  const row3_2Ref = useRef()
  const row4Ref = useRef()
  useEffect(()=>{
    const row1 = row1Ref.current
    const row2 = row2Ref.current
    const row3 = row3Ref.current
    const row3_2 = row3_2Ref.current
    const row4 = row4Ref.current
    const rows = [row1,row2,row3,row3_2,row4]

    rows.forEach((row) => {
      const texts = row.innerText.split("").map((char)=> `<span>${char}</span>`).join("")

      row.innerHTML = texts
      
    })

    setPosition(row1,row2,row3,row3_2,row4)
    
  },[])
  
  

  function setPosition(r1,r2,r3,r3_2,r4) {
    const x1 = 0;
    const x2 = 250;
    const x3 = 50;
    const x3_1 = 450;
    const x4 = 650;

    
    r1.style.transform = `translateX(${x1}px)`
    r2.style.transform = `translateX(${x2}px)`
    r3.style.transform = `translateX(${x3}px)`
    r3_2.style.transform = `translateX(${x3_1}px)`
    r4.style.transform = `translateX(${x4}px)`
    
  }


  return(
    <div className="Intro__Texts">
      <div className="Intro__TextRow" ><div ref={row1Ref} className="Intro__text">We're&nbsp;the</div></div>
      <div className="Intro__TextRow" ><div ref={row2Ref} className="Intro__text">Agency</div></div>
      <div className="Intro__TextRow doubleLine" ><div ref={row3Ref} className="Intro__text">for</div><div ref={row3_2Ref} className="Intro__text">the</div></div>
      <div className="Intro__TextRow" ><div ref={row4Ref} className="Intro__text">Ocean</div></div>
    </div>
  )
}