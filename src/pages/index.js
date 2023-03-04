import useColor from "@/hook/useColor";
import { useEffect, useRef, useState } from "react"
import MainLayout from "@/layouts/MainLayout";

export default function Home() {
  const {
    eventType, 
    color, 
    inputChange, 
    buttonOkClicked
  } = useColor('black');

  const boxRef = useRef();

  useEffect(() => {
    // boxRef.current.style.backgroundColor = 'blue';
  }, [])

  return (
    <MainLayout>
      <input className="border border-blue-800" type="text" 
          onChange={(event) => inputChange(event, eventTypes.ONCHANGE)}
          onKeyDown={(event) => inputChange(event, eventTypes.KEYDOWN)}
      />
      <button className="bg-black text-white ml-2 p-1" 
        onClick={buttonOkClicked}>
        OK
      </button>

      <div ref={boxRef} 
          id="box"
          className="w-10 h-10 m-10"
          style={{ backgroundColor: color }}
      >
      </div>
    </MainLayout>
  )
}
