import React from 'react';
import './App.css';

const Button = (props) => {
  const [color, setColor] = React.useState(0);

  const handleAssignColorClick = () => {
    color === props.colors.length - 1
      ? setColor(0)
      : setColor((prev) => prev + 1);
  };

  return (
    <button
      onClick={handleAssignColorClick}
      style={{ backgroundColor: props.colors[color] }}
    >
      {props.colors[color]}
    </button>
  );
};

const App = () => {
  const colors = ['#FFC000', '#3386FF', '#247BA0', '#FF0000'];

  return (
    <section>
      <Button colors={colors} />
    </section>
  );
};

export default App;
