import React, { useState } from 'react'
import Draggable from 'react-draggable';
const Text = () => {
  
  const [editMode, setEditMode] = useState(false);
  
  return (
   <Draggable>


   <h1>This is a text</h1>
   </Draggable>
       
  
  )
}

export default Text;