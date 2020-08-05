import React from 'react';
import './Tab.css';

export default function Tab({ onClick, children, tabType, highlight }) {
  
  function getStyle() {
    let tabStyle = {};
    
    if (tabType === 'left') {
      tabStyle = {...tabStyle, borderTopRightRadius: 0 };
    }
    else if (tabType === 'right') {
      tabStyle = {...tabStyle, borderTopLeftRadius: 0 };
    }
    else if (tabType === 'middle') {
      tabStyle = {...tabStyle, borderTopRightRadius: 0, borderTopLeftRadius: 0 };
    }

    if (highlight) {
      tabStyle = {...tabStyle, backgroundColor: "#F3C13A" }
    }

    return tabStyle;
  };

  return (
    <div
      onClick={onClick}
      className="tab-container"
      style={
        getStyle()
      }
    >
      <div className="tab-title">
        { children }
      </div>
    </div>
  );
}