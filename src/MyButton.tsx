import React, { useState } from 'react';

function MyButton({ href }) {
  // If href is not provided, render a button with a click counter
  if (!href) {
    const [count, setCount] = useState(0);

    function handleClick() {
      setCount(count + 1);
    }

    return (
      <button type="button" className="btn btn-dark" onClick={handleClick}>
        Clicked {count} times
      </button>
    );
  }

  // If href is provided, render a button with a link
  return (
    <a href={href} target="_blank" rel="noopener noreferrer">
      <button type="button" className="btn btn-dark">
        I'm a button with a link
      </button>
    </a>
  );
}

export default MyButton;


