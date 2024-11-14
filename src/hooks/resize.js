import { useEffect, useState } from "react"


const useWindowSize = () => {
  const [windowSize,setWindowSize] = useState({
    width: window.innerWidth,
    height: window.innerHeight
  })

  useEffect(() => {
    const handleResize  = () => {
      setWindowSize({
        width: window.innerWidth,
        height: window.innerHeight
      })
    }

    window.addEventListener("resize",handleResize)
    
    return() => {
      window.removeEventListener("resize",handleResize)
    }
  }, [])

  return windowSize
}

const getPathPos = () => {
    let boxes = []
    const width = window.innerWidth
    const height = window.innerHeight
    const count = 7
    const grid = 20
    const xBlock = width/grid
    const YBlock = height/grid
    const delay = 1
    const duration = 1
    const ease = 'power4.inOut'


    //
    // 시작, 이동, 이동
    // 시작 4
    // 이동 4
    // 이동 4
    // 이동 4

    const box1 = [
      {
        start:[[13*xBlock,0*YBlock],[15*xBlock,0*YBlock],[15*xBlock,0*YBlock],[13*xBlock,0*YBlock]],
        end:[[13*xBlock,0*YBlock],[15*xBlock,0*YBlock],[15*xBlock,4*YBlock],[13*xBlock,4*YBlock]]
      },
      {
        end:[[11*xBlock,0*YBlock],[13*xBlock,0*YBlock],[13*xBlock,4*YBlock],[11*xBlock,4*YBlock]],
      },
      {
        end:[[11*xBlock,0*YBlock],[13*xBlock,0*YBlock],[13*xBlock,8*YBlock],[11*xBlock,8*YBlock]],
      },
      {
        end:[[11*xBlock,0*YBlock],[13*xBlock,0*YBlock],[13*xBlock,8*YBlock],[11*xBlock,8*YBlock]],
      }
    ]

    const box2 = [
      {
        start:[[3*xBlock,5*YBlock],[3*xBlock,5*YBlock],[3*xBlock,9*YBlock],[3*xBlock,9*YBlock]],
        end:[[3*xBlock,5*YBlock],[5*xBlock,5*YBlock],[5*xBlock,9*YBlock],[3*xBlock,9*YBlock]]
      },
      {
        end:[[3*xBlock,13*YBlock],[5*xBlock,13*YBlock],[5*xBlock,17*YBlock],[3*xBlock,17*YBlock]],
      },
      {
        end:[[3*xBlock,9*YBlock],[5*xBlock,9*YBlock],[5*xBlock,13*YBlock],[3*xBlock,13*YBlock]],
      },
      {
        end:[[1*xBlock,9*YBlock],[3*xBlock,9*YBlock],[3*xBlock,13*YBlock],[1*xBlock,13*YBlock]],
      }
    ]

    const box3 = [
      {
        start:[[7*xBlock,16*YBlock],[9*xBlock,16*YBlock],[9*xBlock,16*YBlock],[7*xBlock,16*YBlock]],
        end:[[7*xBlock,7*YBlock],[9*xBlock,7*YBlock],[9*xBlock,16*YBlock],[7*xBlock,16*YBlock]]
      },
      {
        end:[[7*xBlock,2*YBlock],[9*xBlock,2*YBlock],[9*xBlock,6*YBlock],[7*xBlock,6*YBlock]]
      },
      {
        end:[[5*xBlock,2*YBlock],[7*xBlock,2*YBlock],[7*xBlock,6*YBlock],[5*xBlock,6*YBlock]]
      },
      {
        end:[[5*xBlock,2*YBlock],[5*xBlock,2*YBlock],[5*xBlock,6*YBlock],[5*xBlock,6*YBlock]]
      }
    ]

    const box4 = [
      {
        start:[[12*xBlock,7*YBlock],[14*xBlock,7*YBlock],[14*xBlock,7*YBlock],[12*xBlock,7*YBlock]],
        end:[[12*xBlock,7*YBlock],[14*xBlock,7*YBlock],[14*xBlock,11*YBlock],[12*xBlock,11*YBlock]]
      },
      {
        end:[[12*xBlock,12*YBlock],[14*xBlock,12*YBlock],[14*xBlock,16*YBlock],[12*xBlock,16*YBlock]]
      },
      {
        end:[[8*xBlock,12*YBlock],[12*xBlock,12*YBlock],[12*xBlock,16*YBlock],[8*xBlock,16*YBlock]]
      },
      {
        end:[[8*xBlock,12*YBlock],[12*xBlock,12*YBlock],[12*xBlock,16*YBlock],[8*xBlock,16*YBlock]]
        // end:{pos:[10*xBlock,11*YBlock],r:xBlock/2, }
      }
    ]

    const box5 = [
      {
        start:[[14*xBlock,12*YBlock],[14*xBlock,12*YBlock],[14*xBlock,16*YBlock],[14*xBlock,16*YBlock]],
        end:[[17*xBlock,12*YBlock],[19*xBlock,12*YBlock],[19*xBlock,16*YBlock],[17*xBlock,16*YBlock]]
      },
      {
        end:[[17*xBlock,8*YBlock],[19*xBlock,8*YBlock],[19*xBlock,12*YBlock],[17*xBlock,12*YBlock]]
      },
      {
        end:[[14*xBlock,8*YBlock],[16*xBlock,8*YBlock],[16*xBlock,12*YBlock],[14*xBlock,12*YBlock]]
      },
      {
        end:[[14*xBlock,8*YBlock],[16*xBlock,8*YBlock],[16*xBlock,12*YBlock],[14*xBlock,12*YBlock]]
      }
    ]

    const box6 = [
      {
        start:[[12*xBlock,19*YBlock],[12*xBlock,19*YBlock],[12*xBlock,23*YBlock],[12*xBlock,23*YBlock]],
        end:[[8*xBlock,19*YBlock],[12*xBlock,19*YBlock],[12*xBlock,23*YBlock],[8*xBlock,23*YBlock]]
      },
      {
        end:[[7*xBlock,19*YBlock],[9*xBlock,19*YBlock],[9*xBlock,23*YBlock],[7*xBlock,23*YBlock]]
      },
      {
        end:[[5*xBlock,19*YBlock],[7*xBlock,19*YBlock],[7*xBlock,23*YBlock],[5*xBlock,23*YBlock]]
      },
      {
        end:[[5*xBlock,18*YBlock],[5*xBlock,18*YBlock],[5*xBlock,23*YBlock],[5*xBlock,23*YBlock]]
      }
    ]

    const box7 = [
      {
        start:[[17*xBlock,19*YBlock],[17*xBlock,19*YBlock],[17*xBlock,23*YBlock],[17*xBlock,23*YBlock]],
        end:[[15*xBlock,19*YBlock],[17*xBlock,19*YBlock],[17*xBlock,23*YBlock],[15*xBlock,23*YBlock]]
      },
      {
        end:[[13*xBlock,19*YBlock],[15*xBlock,19*YBlock],[15*xBlock,23*YBlock],[13*xBlock,23*YBlock]]
      },
      {
        end:[[13*xBlock,15*YBlock],[15*xBlock,15*YBlock],[15*xBlock,19*YBlock],[13*xBlock,19*YBlock]]
      },
      {
        end:[[13*xBlock,15*YBlock],[15*xBlock,15*YBlock],[15*xBlock,15*YBlock],[13*xBlock,15*YBlock]]
      }
    ]

    boxes.push(box1,box2,box3,box4,box5,box6,box7)
    // boxes.push(box4,box4,box4,box4)
    // boxes.push(box2)
    return boxes
}





export {useWindowSize, getPathPos}