import { useState } from "react"
const useColor = (defaultColor) => {
  const eventTypes = {
    ONCHANGE:'onChange', 
    KEYDOWN:'onKeyDown', 
  }
  const [color, setColor] = useState(defaultColor);
  const [typedValue, setTypedValue] = useState('');

  const inputChange = (e, eventType) => {
    if(eventType === eventTypes.ONCHANGE){
      setTypedValue(e.target.value)
    }else if(eventType === eventTypes.KEYDOWN && e.key === "Enter"){
      setColor(typedValue);
    }
  }
  const buttonOkClicked = () => {
    setColor(typedValue);
  }

  return {
    eventTypes,
    color,
    inputChange,
    buttonOkClicked,
  }
}

export default useColor;