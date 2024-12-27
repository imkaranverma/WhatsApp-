import { Navbar } from '../components/Navbar'
import UserChatItem from '../components/UserChatItem'
import inshort from "../assets/inshot.mp4"
import Footer from '../assets/Footer.jpg'
import { Typography } from '@mui/material'

// UserData;
interface userInterface {
  name: String,
  message: String,
  status: "Sent" | "Delivered" | "Recieved",
  unread: Number,
  icon: String | undefined,
  lastMessageDate: String 
};
// interface RootObject {
//   name: string;
//   icon: string;
//   message: string;
//   lastMessageDate: string;
//   status: "Sent" | "Delivered" | "Recieved";
//   unread: number | String;
// }

// const Data:userInterface[] = UserListData;
export const Homepage = () => {
  const existingUsers = JSON.parse(localStorage.getItem("users") || "[]");
const Data = existingUsers;
const usersWithUnreadMessages = existingUsers.filter((user: any) => user.unread> 0).length;
// console.log(usersWithUnreadMessages);
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
    <div className='absolute bottom-0 w-full'>
{
usersWithUnreadMessages != 0 && 
    <span className='size-6 bg-[#25d366] item-center place-items-center border rounded-xl text-white items-center flex justify-center relative bottom-[-30px] left-16 z-30 '><Typography variant='caption' className=''>{usersWithUnreadMessages}</Typography></span>
}
  <img src={Footer} className='relative fixed '/>
    </div>
     </div>
    </>
  )
}
