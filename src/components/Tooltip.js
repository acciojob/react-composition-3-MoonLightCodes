import React, { useState, cloneElement, isValidElement } from "react";

const Tooltip = ({ text, children }) => {
  const [visible, setVisible] = useState(false);

  if (!isValidElement(children)) return children;

  const handleMouseEnter = (e) => {
    setVisible(true);
    children.props.onMouseEnter && children.props.onMouseEnter(e);
  };

  const handleMouseLeave = (e) => {
    setVisible(false);
    children.props.onMouseLeave && children.props.onMouseLeave(e);
  };

  // Clone the child element, inject our event handlers and tooltip class, 
  // and append the tooltip text as a child, so that the structure becomes:
  // (for example, for an h2):
  // <h2 class="tooltip" onMouseEnter={} onMouseLeave={}>
  //   {original children}
  //   {visible && <div class="tooltiptext">...</div>}
  // </h2>
  const clonedChild = cloneElement(
    children,
    {
      onMouseEnter: handleMouseEnter,
      onMouseLeave: handleMouseLeave,
      className: children.props.className
        ? `${children.props.className} tooltip`
        : "tooltip",
    },
    <>
      {children.props.children}
      {visible && <div className="tooltiptext">{text}</div>}
    </>
  );

  return clonedChild;
};

export default Tooltip;
