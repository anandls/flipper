import React from 'react';
import './App.css';

const Button = ({ handleChange, ...props }) => {
  return(
    <button
      onClick={handleChange}
      style={{ backgroundColor:  props.color}}
    >
    {props.color}
    </button>
  );
};

const App = () => {

  const [color, setColor] = React.useState(0);
  const colors = ['#FFC000', '#3386FF', '#247BA0', '#FF0000'];

  const handleChange = () => {
    color === colors.length - 1
    ? setColor(0)
    : setColor((prev) => prev + 1);
  };

  return (
    <section>
      <Button
        handleChange={handleChange}
        color={colors[color]}
      />
    </section>
  );
};

export default App;
