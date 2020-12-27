import React, { useState } from "react";

const Option = ({ item }) => {
  const [open, setOpen] = useState(false);

  return (
    <div className='menu'>
      <div
        className='option'
        style={{ cursor: `${!!item.children.length && "pointer"}` }}
        onClick={() => {
          setOpen((prevState) => !prevState);
        }}
      >
        {!!item.children.length && (
          <div>
            {!open ? (
              <div className='arrow'> &#9654; </div>
            ) : (
              <div className='arrow'> &#9660; </div>
            )}
          </div>
        )}
        <div className='option-name'>{item.name}</div>
        {!open && !!item.children.length && (
          <div className='badge'>
            {item.children.map((el) => "+" + el.length)}
          </div>
        )}
      </div>
      {open && (
        <div className='childs'>
          {item.children.map((el) =>
            el.map((item) => <Option item={item} key={item.id} />)
          )}
        </div>
      )}
    </div>
  );
};

export default Option;
