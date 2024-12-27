import { Typography } from '@mui/material'
import { MdOutlineQrCodeScanner } from "react-icons/md";
import { MdOutlineCameraAlt } from "react-icons/md";
import { BsThreeDotsVertical } from "react-icons/bs";
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';


import React from 'react'

export const Navbar = () => {
  const [anchorEl, setAnchorEl] = React.useState<boolean>(false);
  const open = Boolean(anchorEl);
  const handleClick = () => {
    setAnchorEl(!anchorEl);
  };
  const handleClose = () => {
    setAnchorEl(false);
  };
  return (
    <>
    <div className='flex justify-between w-full px-2 my-2 pl-4'>

    <Typography variant='h5' color='#075E54'>WhatsApp</Typography>

    <div className='flex gap-6'>
    <MdOutlineQrCodeScanner color='black' size={25}/>
    <MdOutlineCameraAlt color='black' size={25}/>
    <BsThreeDotsVertical color='black' size={25} onClick={() => handleClick}/>
    {
      anchorEl && 
      <Menu
      id="basic-menu"
      // anchorEl={anchorEl}
      open={open}
      onClose={handleClose}
      MenuListProps={{
        'aria-labelledby': 'basic-button',
      }}
    >
      <MenuItem onClick={handleClose}>Profile</MenuItem>
      <MenuItem onClick={handleClose}>Add User</MenuItem>
      {/* <MenuItem onClick={handleClose}>Logout</MenuItem> */}
    </Menu>
    }

    </div>
    </div>
    </>
  )
}
