import React from 'react';

function RetroButton({ type = 'A' }) {
  return (
    <div className={`new_retro type-${type}`}>
      <a href="#" className="button">
        <span className="text">ENTRY</span>
        <div className="button_bottom_line1"></div>
        <div className="button_bottom_line2"></div>
      </a>
      <div className="button_under">
        <div className="button_top_line1"></div>
        <div className="button_top_line2"></div>
        <div className="button_top_line3"></div>
      </div>
      <div className="bg_yellow"></div>
      <div className="bg_blue"></div>
      <div className="wrapper">
        <div className="material circle_1"></div>
        <div className="material circle_2">
          <div className="innerCircle"></div>
        </div>
        <div className="material circle_3"></div>
        <div className="material circle_4"></div>
        <div className="material circle_5"></div>
        <div className="material tryangle_1"></div>
        <div className="material tryangle_2"></div>
      </div>
      <div className="line line_blue"></div>
      <div className="line line_yellow"></div>
      <div className="line line_green"></div>
    </div>
  );
}

export default RetroButton;
