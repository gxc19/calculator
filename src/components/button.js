import React from 'react';

const Button = (props) => {
    return (
    <button className="button" onClick={()=>props.click(props.but)}>{props.but}</button>
    )
  }

  export default Button