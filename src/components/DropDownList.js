import React from 'react';
import "../styles/DropDownList.css";

const DropDownList = ({children, title}) => {
  const toggleDropdown = (e) => {
    let dc = e.target.nextElementSibling;

    if (dc.classList.contains("hidden")) {
      dc.classList.remove("hidden");
      dc.classList.add("visible");
      setTimeout(function () {
        dc.classList.remove("visually-hidden");
      }, 0);
    } else {
      dc.classList.remove("visible");
      dc.classList.add("visually-hidden");
      dc.addEventListener(
        "transitionend",
        function (e) {
          dc.classList.add("hidden");
        },
        {
          capture: false,
          once: true,
          passive: false,
        }
      );
    }
  };

  return (
    <div className="dropdown">
      <div className='dropdown-button' onClick={((e) => toggleDropdown(e))}>{title}</div>
      <ul id="dropdown-content" className="dropdown-content visually-hidden hidden">
        {children}
      </ul>
    </div>
  );
}

export default DropDownList;
