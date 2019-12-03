import React from 'react';
import { Button } from 'react-bootstrap';

const Story = (props) => {
  
  const renderStory = () => {
    // console.log(props.template);
    // console.log(props.values);
    return(
      <>
        {props.template.value.map((string, index) => {
          console.log(string);
          if(string != 0 && props.values[index]){
            return(
              `${string}` + `${props.values[index]}`
            )
          } else if (!string && props.values[index]){
            return(
              `${props.values[index]}`
            )
          } else if (string != 0){
            return(
              `${string}`
            )
          }
        })}
      </>
    )
  }
  
  return (
    <div className="story">
      <p>
        {renderStory()}
      </p>
    </div>
  );
}
 
export default Story;