import * as React from 'react';

const Overlay = (props) => {

  function getClassName() {
    if (props.visible) {
      return "overlay overlay--visible";
    }
    return "overlay";
  }

  return <div className={getClassName()}>
    {props.children}
  </div>;
};

export default Overlay;
