import React from 'react';
import Button from '@material-ui/core/Button';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';

export default function SimpleMenu({name,option1,option2,option3}) {
  const [anchorEl, setAnchorEl] = React.useState(null);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <div>
      <Button aria-controls="simple-menu" style={{fontFamily:" -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen','Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue','sans-serif';", fontWeight:"400", fontSize:"20px", textTransform:"capitalize"}}
      aria-haspopup="true" onMouseEnter={handleClick} onClick={handleClick}>
        {name}
      </Button>
      <Menu
        id="simple-menu"
        anchorEl={anchorEl}
        open={Boolean(anchorEl)}
        onMouseLeave={handleClose}
      >
        <MenuItem onClick={handleClose}>{option1}</MenuItem>
        <MenuItem onClick={handleClose}>{option2}</MenuItem>
        <MenuItem onClick={handleClose}>{option3}</MenuItem>
      </Menu>
    </div>
  );
}