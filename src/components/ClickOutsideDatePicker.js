import React, { useRef, useEffect } from "react";
import DatePicker from 'sassy-datepicker';

export function ClickOutsideDatePicker(props) {
    const ref = useRef(null);
    const { onClickOutside } = props;
  
    useEffect(() => {
      const handleClickOutside = (event) => {
        if (ref.current && !ref.current.contains(event.target)) {
          onClickOutside && onClickOutside();
        }
      };
      document.addEventListener('click', handleClickOutside, true);
      return () => {
        document.removeEventListener('click', handleClickOutside, true);
      };
    }, [ onClickOutside ]);
  
    if(!props.show)
      return null;
  
    return (
      <div ref={ref}>
          <DatePicker className="datepicker" value={props.date} onChange={props.changeDate} />
      </div> );
  }