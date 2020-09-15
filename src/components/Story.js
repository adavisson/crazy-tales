import React from 'react';

const Story = (props) => {
  
  const renderStory = () => {
    return(
      <>
        {props.template.value.map((string, index) => {
          if(string !== 0 && props.values[index]){
            return(
              string  + props.values[index]
            )
          } else if (!string && props.values[index]){
            return(
              props.values[index]
            )
          } else if (string !== 0){
            return(
              string
            )
          } else {
            return ''
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