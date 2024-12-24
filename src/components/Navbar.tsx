import { Typography } from '@mui/material'
import { MdOutlineQrCodeScanner } from "react-icons/md";
import { MdOutlineCameraAlt } from "react-icons/md";
import { BsThreeDotsVertical } from "react-icons/bs";


import React from 'react'

export const Navbar = () => {
  return (
    <>
    <div className='flex justify-between w-full px-2 my-2 pl-4'>

    <Typography variant='h5' color='#075E54'>WhatsApp</Typography>

    <div className='flex gap-6'>
    <MdOutlineQrCodeScanner color='black' size={25}/>
    <MdOutlineCameraAlt color='black' size={25}/>
    <BsThreeDotsVertical color='black' size={25}/>
    </div>
    </div>
    </>
  )
}
