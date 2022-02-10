import React from 'react';

function Alert(props) {
  const isalertnull = props.alert;

  
  
  const capitalize = (word) => {
    const lower = word.toLowerCase();
    return lower.charAt(0).toUpperCase() + lower.slice(1);
    
  };
  
  
  

  if (isalertnull !== null) {
    return (
      <>
         <div className={`alert alert-${props.alert.type} alert-dismissible fade show`} role="alert">
          <strong>{capitalize(props.alert.type)}</strong>: {props.alert.message}
          
        </div>
      </>
    )
  }
  else
  {
    return(
      <>
      </>
    )
  }
}

export default Alert;
