import React from 'react';
import ColorPicker from './ColorPicker';

const App = () => {
  const colors = ['#ff0000', '#00ff00', '#0000ff'];

  return (
    <div>
      <h1>Color Picker</h1>
      <ColorPicker colors={colors} />
    </div>
  );
};

export default App;
