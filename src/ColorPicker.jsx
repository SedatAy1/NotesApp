import React from 'react';

const ColorPicker = ({ selectedColor, setSelectedColor }) => {
  const colors = ['pink', 'purple', 'yellow', 'blue', 'green'];

  return (
    <div className="color-picker">
      {colors.map((color) => (
        <div
          key={color}
          className={`color-dot ${color} ${selectedColor === color ? 'selected' : ''}`}
          onClick={() => setSelectedColor(color)}
        />
      ))}
    </div>
  );
};

export default ColorPicker;