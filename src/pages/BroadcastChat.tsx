// import ReceivedMessage from "../components/receivedMessage";
import SentMessage from "../components/SentMessage";
import  "./Chats.css"
import { Avatar } from "@mui/material";
import sticker from "../assets/sticker.jpeg";
import voice from "../assets/voice.png"
import { IoMdArrowBack } from "react-icons/io";
import { BsThreeDotsVertical } from "react-icons/bs";
import status from "../assets/status.jpg"
import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import { format, isYesterday, isToday } from "date-fns"; 
import React from "react";
import broadcastItem from "../assets/broadcastIcon.png";
import ElasticScroll from "../components/ElasticScroll";
import { motion } from "framer-motion";

const BroadcastChat = () => {
    const Navigate = useNavigate();
    const today = new Date();
    const currHr = today.getHours();
    const currMin = today.getMinutes();
  
    const battery = JSON.parse(localStorage.getItem("battery") || "");
  
  //   const [data , setData] = useState([]);
  // useEffect(() => {

  //   async function apiCall ()  {
  //     try{
  //       const response = await fetch('https://whatsapp-backend-1707.onrender.com/broadcastMessage/list');
  //       const json = await response.json();
  //       // setData(json?.);
  //       console.log("json: ", json?.data)
  //       setData(json?.data);
  //       if (!response.ok) {
  //         throw new Error('failed to fetch messages.');
  //       }
  
  //       // alert('');
  
  //     } catch(error) {
  // alert(error);
  //     }
  //   }
  //   apiCall();

  // }, [])

  // const Messages: any = data;
    const Messages:any = JSON.parse(localStorage.getItem("broadcastMessages") || "[]");
    const BroadcastName = JSON.parse(localStorage.getItem("broadcastName") || "{}");

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

    console.log("message: ", Messages)
  return (
    <motion.div
    key="page"
    initial={{ y: "100%", opacity: 0 }} // Start from below (down)
    animate={{ y: 0, opacity: 1 }} // Move to the center
    exit={{ y: "-100%", opacity: 0, transition: { duration: 0.1 } }} // Exit upwards (up)
    transition={{ delay: 0, duration: 0.1 }} //
  >
    <>
    <div className="h-7 fixed z-20">

<span className="z-20 relative top-[4px] left-4 text-sm color-[#4B4B4B] opacity-80">{currHr.toString().padStart(2, "0")}:{currMin.toString().padStart(2, "0")}
</span>
<span className="z-20 relative top-[4px] left-[292px] text-sm color-[#4B4B4B] opacity-80 text-end">{battery?.battery}%
</span>
<img className='top-[-25px] relative' src={status} />
</div>
    <div className="page">
    <div className="marvel-device nexus5">
      <div className="top-bar" />
      <div className="sleep" />
      <div className="volume" />
      <div className="camera" />
      <div className="screen">
        <div className="screen-container">
          <div className="status-bar">
            <div className="time" />
            <div className="battery">
              <i className="zmdi zmdi-battery" />
            </div>
            <div className="network">
              <i className="zmdi zmdi-network" />
            </div>
            <div className="wifi">
              <i className="zmdi zmdi-wifi-alt-2" />
            </div>
            <div className="star">
              <i className="zmdi zmdi-star" />
            </div>
          </div>
          <div className="chat">
            <div className="chat-container">
              <div className="user-bar" >
                <div className="back" 
                onClick={() => Navigate(-1)}
                >
                <IoMdArrowBack />
                </div>
                <div className="avatar">
                    
                  {/* <img src="" alt="Avatar" /> */}
                  <Avatar  sx={{ bgcolor: "#DFE5E7" , margin: "auto" , width: "35px" , height: "35px" , padding: "0.45rem"}} src={broadcastItem}/>
                </div>
                <div className="name" onClick={() => Navigate("/broadcastinfo")}>
                  <span>{BroadcastName?.name}</span>
                  <span className="status">{
  [...localUserList, ...data]
    .map((element: any) => element?.name)
    .filter((name) => name) // Ensure names are not null or undefined
    .join(", ")
}</span>
                </div>
                <div className="actions more">
                  <i className="zmdi zmdi-more-vert" />
                </div>
                <div className="actions attachment">
                  <i className="zmdi zmdi-attachment-alt" />
                </div>
                <div className="actions">
                <BsThreeDotsVertical />
                </div>
              </div>
              <div className="conversation">
                <ElasticScroll>

               
                <div className="conversation-container">
                    {
                        Messages.map((element:any, index:any) => {
                          const currentDate = new Date(element?.MessageDate); 
                          const previousDate =
                              index > 0 ? new Date(Messages[index - 1]?.MessageDate) : null;
          
                          const showDateLabel =
                              !previousDate || currentDate.toDateString() !== previousDate.toDateString();

                              
                          return (
                            <React.Fragment key={element.id}> 
                            {showDateLabel && (
                                <div className="date-label h-fit relative flex justify-center text-center bg-none w-full">
                                   
                                   <span className="bg-white text-[0.70rem] text-gray-700 opacity-85 px-2 py-0 rounded-md my-2">
                                     {isToday(currentDate)
                                        ? "Today"
                                        : isYesterday(currentDate)
                                        ? "Yesterday"
                                        : format(currentDate, "dd MMMM yyyy")}
                                        </span>
                                </div>
                            )}
                            {
                              element?.messageType == "Sent" ?
                              <SentMessage data={element} index={index}/> :
                              element?.messageType == "Info" ?
                              <div className="date-label h-fit relative flex justify-center text-center bg-none w-full"> 
                                   <span className="bg-white text-[0.70rem] text-gray-700 opacity-85 px-2 py-0 rounded-md my-1" onClick={async () => {
      console.log("Clicked")
      if(confirm("Do you want to delete this message: "))
      {
        const oldMessages = JSON.parse(localStorage?.getItem("broadcastMessages") || "[]");

        if (oldMessages.length > 0 && oldMessages[index]) {

          oldMessages.splice(index , 1);
          localStorage.setItem('broadcastMessages', JSON.stringify(oldMessages));

          
          console.log("Updated Users Array: ", oldMessages);

      } else {
          // Handle the case where the index is invalid or user does not exist
          alert("Invalid user index or no broadcastMessages found!");
        }
        console.log("key: ", JSON.parse(localStorage.getItem("broadcastMessages") || "[]"));
        alert("Message Deleted Successfully!");
      }



    }}>
                                     {element?.message}
                                        </span>
                                </div>
                              :
                              // <></>
                              <img src={element?.name}/>
                                   
                            }
                        </React.Fragment>
                            )
                        }

                        )
                    }
          
               
                  
                  {/* <SentMessage data="What happened last night?"/> */}
                  {/* <ReceivedMessage message="You were drunk."/> */}
                </div>
                </ElasticScroll>
                {/* <form className="conversation-compose">
                  <div className="emoji">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width={24}
                      height={24}
                      id="smiley"
                      x={3147}
                      y={3209}
                    >
                      <path
                        fillRule="evenodd"
                        clipRule="evenodd"
                        d="M9.153 11.603c.795 0 1.44-.88 1.44-1.962s-.645-1.96-1.44-1.96c-.795 0-1.44.88-1.44 1.96s.645 1.965 1.44 1.965zM5.95 12.965c-.027-.307-.132 5.218 6.062 5.55 6.066-.25 6.066-5.55 6.066-5.55-6.078 1.416-12.13 0-12.13 0zm11.362 1.108s-.67 1.96-5.05 1.96c-3.506 0-5.39-1.165-5.608-1.96 0 0 5.912 1.055 10.658 0zM11.804 1.01C5.61 1.01.978 6.034.978 12.23s4.826 10.76 11.02 10.76S23.02 18.424 23.02 12.23c0-6.197-5.02-11.22-11.216-11.22zM12 21.355c-5.273 0-9.38-3.886-9.38-9.16 0-5.272 3.94-9.547 9.214-9.547a9.548 9.548 0 0 1 9.548 9.548c0 5.272-4.11 9.16-9.382 9.16zm3.108-9.75c.795 0 1.44-.88 1.44-1.963s-.645-1.96-1.44-1.96c-.795 0-1.44.878-1.44 1.96s.645 1.963 1.44 1.963z"
                        fill="#7d8489"
                      />
                    </svg>
                  </div>
                  <input
                    className="input-msg"
                    name="input"
                    placeholder="Type a message"
                    autoComplete="off"
                    autoFocus= {false}
                  />
                 
                </form> */}
                <div className="w-full px-2 flex fixed bottom-4">
                    <div className="INPUTBOX bg-white rounded-2xl w-[87%] py-0.5">
                        <div className="bg-white px-2 rounded-xl h-9 "><img src={sticker} className=" "/></div>

                    </div>
                    <div className="SENDICON h-10 w-10 bg-[#1DAB61] rounded-3xl m-auto flex justify-center items-center">
                    <img src={voice} className="h-6"/>
                    </div>

                </div>
                 {/* <button className="send">
                    <div className="circle">
                      <i className="zmdi zmdi-mail-send" />
                    </div>
                  </button> */}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  </>
  </motion.div>
  )
}

export default BroadcastChat
