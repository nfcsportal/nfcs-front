import React, { useState } from 'react';

export const HeaderAuthView: React.FC = () => {
  const [open, setOpen] = useState<boolean>(false);

  const handleOpen = () => {
    setOpen(!open);
  };
  return (
    <div onClick={handleOpen}>
      ANGELA MERKEL
      {open && <div>DROPDOWN</div>}
    </div>
  );
};
