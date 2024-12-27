import { Navbar } from '../components/Navbar'
import UserChatItem from '../components/UserChatItem'
import inshort from "../assets/inshot.mp4"
import Footer from '../assets/Footer.jpg'
import { Typography } from '@mui/material'
import floating from "../assets/floating.jpg"
import { useNavigate } from "react-router";


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
  let navigate = useNavigate();
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
<div className="h-[24rem] overflow-y-scroll">

    {Data.map((element: userInterface, index: number) => (
      <UserChatItem key={index} userData={element} />
      ))}

</div>
    {/* <UserChatItem/>
    <UserChatItem/>
    <UserChatItem/> */}
    <div className='absolute bottom-0 w-full'>
      <div className='w-full flex justify-end items-end pr-3 flex flex-col gap-2'>
<div className='w-10 h-10 bg-slate-100 drop-shadow-lg p-1.5 mr-2 border rounded-xl'>
      <img  src="https://static.whatsapp.net/rsrc.php/v4/ye/r/W2MDyeo0zkf.png"/>
  </div>

      <div className='bg-[#1DAB61] w-14 h-14 border rounded-xl  flex justify-center align-center right-[-400] relative'>
      <img src={floating} className='w-9 h-12' onClick={() => {
        navigate("/adduser");
      }}/>
      </div>
      </div>
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
