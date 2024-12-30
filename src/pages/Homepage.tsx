import { Navbar } from '../components/Navbar'
import UserChatItem from '../components/UserChatItem'
import inshort from "../assets/inshot.mp4"
import Footer from '../assets/Footer.jpg'
import { Typography } from '@mui/material'
import floating from "../assets/floating.jpg"
import { useNavigate } from "react-router";
// import Statusbar from '../components/Statusbar'
import status from "../assets/status.jpg"


// UserData;
interface userInterface {
  name: String,
  message: String | any,
  status: "Sent" | "Delivered" | "Recieved" | "None",
  unread: Number,
  icon: String | undefined,
  lastMessageDate: String | null | any,
  story: "Seen" | "Unseen"  | "None"
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

  const today = new Date();
  const currHr = today.getHours();
  const currMin = today.getMinutes();



  const battery = Math.floor((Math.random() * 10) + 40);
  const existingUsers = JSON.parse(localStorage.getItem("users") || "[]");
const Data = existingUsers;
const usersWithUnreadMessages = existingUsers.filter((user: any) => user.unread> 0).length;
// console.log(usersWithUnreadMessages);

// Data.map((element: userInterface, index: number) => (
//   console.log("datte:" , new Date(element?.lastMessageDate).getTime())
//   ))
  return (
    <>
          <div className="h-10">

<span className="z-20 relative top-[4px] left-4 text-sm color-[#4B4B4B] opacity-80">{currHr}:{currMin}
</span>
<span className="z-20 relative top-[4px] left-[290px] text-sm color-[#4B4B4B] opacity-80 text-end">{battery}%
</span>
<img className='top-[-25px] relative' src={status} />
</div>
     <div className='absolute bottom-0 w-full bg-none top-8'>
      {/* <div className='h-[30px]'> */}

{/* <Statusbar/> */}
      {/* </div> */}
     <Navbar/> 
<div className="h-[32rem] overflow-y-scroll">
    <video src={inshort} width={"100%"} autoPlay muted loop/>

    {Data.map((element: userInterface, index: number) => (
      <UserChatItem key={index} userData={element} index={index} />
      ))}

</div>

    <div className='absolute bottom-0 w-full bg-none pointer-events-none'>
      <div className='w-full flex justify-end items-end pr-3 flex flex-col gap-2'>
<div className='w-10 h-10 bg-slate-100 drop-shadow-lg p-1.5 mr-2 border rounded-xl'>
      <img  src="https://static.whatsapp.net/rsrc.php/v4/ye/r/W2MDyeo0zkf.png"/>
  </div>

      <div className='bg-[#1DAB61] w-14 h-14 border rounded-2xl  flex justify-center align-center right-[-400] relative drop-shadow-lg'>
      <img src={floating} className='w-10 h-[2.9rem] mt-1 pointer-events-auto py-1' onClick={() => {
        navigate("/adduser");
      }}/>
      </div>
      </div>
{
usersWithUnreadMessages != 0 && 
    <span className='size-[0.9rem] bg-[#1AAE62] item-center place-items-center rounded-xl text-white items-center flex justify-center relative bottom-[-27px] left-[3.2rem] z-30 w-fit px-1'><Typography variant='caption' className=''>{usersWithUnreadMessages}</Typography></span>
}
  <img src={Footer} className='relative fixed '/>
    </div>
     </div>
    </>
  )
}
