import { Typography } from '@mui/material'
import { MdOutlineQrCodeScanner } from "react-icons/md";
import { MdOutlineCameraAlt } from "react-icons/md";
import { BsThreeDotsVertical } from "react-icons/bs";
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';


import React from 'react'
import { useNavigate } from 'react-router-dom';

export const Navbar = () => {

  const navigate = useNavigate();
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
    <div className='flex justify-between w-full px-2 mt-2 mb-1 pl-4'>

    <Typography variant='h5' color='#00A884'>WhatsApp</Typography>

    <div className='flex gap-6'>
    <MdOutlineQrCodeScanner color='black' size={25}/>
    <MdOutlineCameraAlt color='black' size={25}/>
    <BsThreeDotsVertical color='black' size={25} onClick={handleClick}/>
    {
      anchorEl && 
      <Menu
      id="basic-menu"
      // anchorEl={anchorEl}
      open={open}
      onClose={handleClose}
      className='top-0'
      MenuListProps={{
        'aria-labelledby': 'basic-button',
      }}
    >
      <MenuItem onClick={() => navigate("/battery")}>Battery</MenuItem>
      <MenuItem onClick={handleClose}>Add User</MenuItem>
      {/* <MenuItem onClick={handleClose}>Logout</MenuItem> */}
    </Menu>
    }

    </div>
    </div>
    </>
  )
}
