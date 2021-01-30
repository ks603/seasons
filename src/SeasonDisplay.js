import React from 'react'

let timeOfyear = new Date().getMonth()

const SeasonDisplay = (props) => {
  console.log(props.lat)
  
  if (timeOfyear >= 3 &&  timeOfyear <= 8) {
  return ( <div>its summer</div>
  )
  } else {
    return (<div>its winter</div>)
  }
}


export default SeasonDisplay