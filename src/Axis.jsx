import React, { useEffect, useState } from 'react';

const Axis = () => {
  const [mouse, setMouse] = useState({x: 0, y: 0});

  useEffect(() => {
    window.addEventListener('mousemove', handleMouse);

    return () => {
      window.removeEventListener('mousemove', handleMouse);
    }
  },[]);

  const handleMouse = (e) => {
    setMouse({x:e.pageX, y:e.pageY});
  }
 
 
  return (
    <>
      <p>X Axis = {mouse.x} </p>
      <p>Y Axis = {mouse.y} </p>
    </>
  )
}

export default Axis;
