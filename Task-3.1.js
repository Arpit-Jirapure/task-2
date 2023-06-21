import React, { useState } from 'react';

const ColorPicker = ({ colors }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedColor, setSelectedColor] = useState('');

  const handleButtonClick = () => {
    setIsOpen(!isOpen);
  };

  const handleColorClick = (color) => {
    setSelectedColor(color);
    setIsOpen(false);
  };

  return (
    <div>
      <button onClick={handleButtonClick}>Pick a color</button>
      {isOpen && (
        <div>
          {colors.map((color) => (
            <div
              key={color}
              style={{
                backgroundColor: color,
                width: '30px',
                height: '30px',
                display: 'inline-block',
                margin: '5px',
                cursor: 'pointer',
              }}
              onClick={() => handleColorClick(color)}
            ></div>
          ))}
        </div>
      )}
      {selectedColor && <p>You picked: {selectedColor}</p>}
    </div>
  );
};

export default ColorPicker;
