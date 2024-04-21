import React, { useState } from 'react';
import './EasyButton.css'; // Make sure you import your CSS

function ToggleSwitch() {
  const [isToggled, setIsToggled] = useState(false);

  const toggle = () => {
    setIsToggled(!isToggled);
  };

  return (
    <div className="toggle-switch-container"> {/* Container for alignment */}
      <label className="toggle-switch">
        <input
          type="checkbox"
          checked={isToggled}
          onChange={toggle}
          className="toggle-switch-checkbox"
        />
        <span className="toggle-switch-slider"></span>
      </label>
      <span className="toggle-switch-label">{isToggled ? 'Easy' : 'Hard'}</span> {/* Label to show state */}
    </div>
  );
}

export default ToggleSwitch;
