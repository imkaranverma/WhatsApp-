import React from 'react'
import { Navbar } from '../components/navbar'
import SearchBar from '../components/SearchBar'
import UserChatItem from '../components/userChatItem'
import image from "image.png"
import inshort from "inshort.mp4"
import {UserListData} from "../constant/UserListData"

// UserData;
interface userInterface {
  name: String,
  message: String,
  status: "Sent" | "Delivered" | "Recieved",
  unread: Number,
  icon: String | undefined,
  date: String 
};

const Data:userInterface[] = UserListData;
export const Homepage = () => {
  return (
    <>
     <div>

     <Navbar/> 
     {/*
    <SearchBar/> 
     <img src={image} /> 
     */}
    <video src={inshort} width={"100%"} autoPlay muted loop/>

    {Data.map((element: userInterface, index: number) => (
          <UserChatItem key={index} userData={element} />
        ))}

    {/* <UserChatItem/>
    <UserChatItem/>
    <UserChatItem/> */}
     </div>
    </>
  )
}
