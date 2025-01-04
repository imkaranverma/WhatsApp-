import encryption from "../assets/encryption.jpeg";
import recipients from '../assets/recipients.jpeg';
// import UserChatItem from '../components/UserChatItem';
import BroadcastUserList from '../components/BroadcastUserList';
// import { Typography } from '@mui/material';
import Avatar from '@mui/material/Avatar';
import broadcastFooter from "../assets/broadcastFooter.jpeg";
import broadcastItem from "../assets/broadcastIcon.png";
import { IoMdArrowBack } from "react-icons/io";
import { BsThreeDotsVertical } from "react-icons/bs";
import RevealOnScroll from "../components/RevealOnScroll";
import status from "../assets/status.jpg"
import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";

const BroadcastInfo = () => {
  const navigate = useNavigate();
  const today = new Date();
  const currHr = today.getHours();
  const currMin = today.getMinutes();

  const battery = JSON.parse(localStorage.getItem("battery") || "34");

  const BroadcastName = JSON.parse(localStorage.getItem("broadcastName") || "{}");
  const createdTime = new Date(new Date(BroadcastName?.createdTime).getTime() - (5.5 * 60 * 60 * 1000));
  const localUserList = JSON.parse(localStorage.getItem("broadcastUserList") || "[]");
 
  const [data , setData] = useState([]);
  useEffect(() => {

    async function apiCall ()  {
      try{
        const response = await fetch('https://whatsapp-backend-1707.onrender.com/broadcastUser/list');
        const json = await response.json();
        // setData(json?.);
        console.log("json: ", json?.data)
        setData(json?.data);
        if (!response.ok) {
          throw new Error('Failed to load users.');
        }
  
        // alert('');
  
      } catch(error) {
  alert(error);
      }
    }
    apiCall();

  }, [])

  console.log("data: ", data);
  const users = data;

  const numberOfUsers = localUserList.length + users.length;
    // const users = JSON.parse(localStorage.getItem("broadcastUserList") || "[]")
  return (
    <motion.div
    key="page"
    initial={{ y: "100%", opacity: 0 }} // Start from below (down)
    animate={{ y: 0, opacity: 1 }} // Move to the center
    exit={{ y: "-100%", opacity: 0, transition: { duration: 0.1 } }} // Exit upwards (up)
    transition={{ delay: 0, duration: 0.1 }} //
  >
    <>
        <div className="h-8 fixed z-10">

<span className="z-20 relative top-[4px] left-4 text-sm color-[#4B4B4B] opacity-80">{currHr.toString().padStart(2, "0")}:{currMin.toString().padStart(2, "0")}
</span>
<span className="z-20 relative top-[4px] left-[292px] text-sm color-[#4B4B4B] opacity-80 text-end">{battery?.battery ?? "34"}%
</span>
<img className='top-[-25px] relative' src={status} />
</div>
    <div className='bg-slate-200 h-[100vh] relative top-10'>
      <RevealOnScroll>
      <div className="w-full h-[3rem] bg-white fixed z-10 top-8">

      </div>
      </RevealOnScroll>
      <div className="bg-none flex w-full px-2 py-2  justify-between items-center fixed z-10 top-8">
        <div className="basis-4/12 flex gap-2 items-center ">
   <div className="" onClick={() => navigate(-1)}>
    <IoMdArrowBack size={24} />
    </div> 
    <div>
      <RevealOnScroll>

      <Avatar sx={{ bgcolor: "#DFE5E7", padding: "0.5rem", width: "2.4rem", height: "2.4rem" , zIndex: "tooltip"}} src={broadcastItem}/>
      </RevealOnScroll>
    </div>
    <div className="text-xl">
    <RevealOnScroll>
      B2
      </RevealOnScroll>
    </div>
        </div>
        <div className="basis-1/12">
    <BsThreeDotsVertical  size={24}/>
        </div>

      </div>
      <div className='drop-shadow-md mb-2 bg-white'>
        <div className="w-full flex justify-center py-3 z-30 ">
          <Avatar src={broadcastItem} sx={{ bgcolor: "#DFE5E7" ,width: "6rem" , height: "6rem", padding: "1.2rem"}}/>
        </div>
        <div className='w-full text-center text-xl pt-3 pb-2'>{BroadcastName?.name}</div>
        <div className='w-full text-center text-base text-gray-700 py-0'>Broadcast List - {numberOfUsers} recipients</div>
        <div className='w-full text-center text-sm text-gray-700 pt-2 pb-5'><span className='bg-slate-100 w-fit px-2 py-1 rounded-md'>Created {createdTime.getDate().toString().padStart(2, "0") + "/" + (createdTime?.getMonth() + 1).toString().padStart(2, "0")  + "/" + createdTime.getFullYear().toString().slice(2) + ", " + createdTime.getHours().toString().padStart(2, "0") + ":" + createdTime.getMinutes().toString().padStart(2, "0")}</span></div>

      </div>
      <div className='drop-shadow-md mb-2'>
        <img  src={encryption}/>
        </div>
        <div className="bg-white drop-shadow-md mb-2">
          <div className='w-full text-sm text-gray-500 font-medium pl-4 py-3 font-[#3b4a54]'>{numberOfUsers} recipients</div>
<img src={recipients}/>

    {
        localUserList.map((element:any , index:any)=> (
            <BroadcastUserList userData={{
                name: element?.name || "Unknown", 
                message: element?.status || "wq", 
                icon: element?.icon , 
                status: "None", 
                unread: 0 , 
                _id: element?._id,
                __v: element?.__v,
                // lastMessageDate: null, 
                story: "None" 
              }}  index={index} />
        ))
    }
    {
        users.map((element:any , index:any)=> (
            <BroadcastUserList userData={{
                name: element?.name || "Unknown", 
                message: element?.status || "wq", 
                icon: element?.icon , 
                status: "None", 
                unread: 0 , 
                _id: element?._id,
                __v: element?.__v,
                // lastMessageDate: null, 
                story: "None" 
              }}  index={index} />
        ))
    }
 
    

        </div>
        <div className='drop-shadow-md mb-2'>
<img src={broadcastFooter}/>
        </div>
    </div>
    </>
    </motion.div>
  )
}

export default BroadcastInfo
