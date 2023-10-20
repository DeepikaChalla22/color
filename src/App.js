

import React from 'react';
import ColorPicker from './components/ColorPicker';

function App() {
 
  const colors = ['#FF5733', '#FFAB33', '#33FF57', '#33ABFF', '#5733FF', '#AB33FF', '#FF339D', '#FF33C8', '#33FFD4', '#33FF9D'];

  return (
    <div className="App">
      <ColorPicker colors={colors} />
    </div>
  );
}

export default App;

