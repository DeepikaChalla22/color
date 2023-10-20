

import React, { useState } from 'react';
import './ColorPickerStyles.css'

function ColorPicker({ colors }) {
  const [showColorList, setShowColorList] = useState(false);
  const [selectedColor, setSelectedColor] = useState(null);

  const handleButtonClick = () => {
    setShowColorList(!showColorList);
  };

  const handleColorClick = (color) => {
    setSelectedColor(color);
    setShowColorList(false);
  };

  return (
    
    <div className="color-picker" style={{ backgroundColor: selectedColor }}>
      {/* <button onClick={handleButtonClick}>Pick a color</button> */}
      
      <button onClick={handleButtonClick} style={{ backgroundColor: selectedColor,
      border:"1px solid black" }}>
        Pick a Color
      </button>
      {showColorList && (
        <div className="color-list">
          {colors.map((color, index) => (
            <div
              key={index}
              className="color-option"
              style={{ backgroundColor: color,border:"1px solid black"}}
              onClick={() => handleColorClick(color)}
            ></div>
          ))}
        </div>
      )}

      {selectedColor && (
        <div className="selected-color" style={{ backgroundColor: selectedColor }}>
          {/* Selected Color: <div className='full'>{selectedColor}</div> */}
        </div>
      )}
    </div>
  );
}

export default ColorPicker;
