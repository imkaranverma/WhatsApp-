// import React from 'react'
import Avatar from '@mui/material/Avatar';
// import { deepOrange} from '@mui/material/colors';
import { Typography } from '@mui/material';
// import Tick from 'Tick.png';
// import { userData } from '../constant/UserListData';
import { useNavigate } from 'react-router';
// import { NumericFormat } from 'react-number-format';
import broadcastItem from "../assets/broadcastIcon.png";
import pin from "../assets/pin.png";

// interface userInterface {
//     name: String,
//     message: String | any,
//     status: "Sent" | "Delivered" | "Recieved" | "None",
//     unread: Number,
//     icon: String | undefined,
//     lastMessageDate: String | null  | any,
//     story: "Seen" | "Unseen"  | "None";
// };
const BroadcastChatItem = () => {
    const Navigate = useNavigate();
    // const Data: userInterface = {
    //     name: "Karan",
    //     message: "This is message lorem23lksdfjnbvevny ewfiewfmn uwehidniewyidwewnweiuhwinexubygueiuqgeg",
    //     status: "Sent",
    //     unread: 1,
    //     icon: "A",
    //     date: "Yesterday"
    // }

    const BroadcastName = JSON.parse(localStorage.getItem("broadcastName") || "{}");
    const BroadcastMessage = JSON.parse(localStorage.getItem("broadcastMessages") || "[]");
    console.log("message: ", BroadcastMessage);
    const latestMessage = BroadcastMessage?.length >=1 ? BroadcastMessage[BroadcastMessage?.length - 1 ]?.message : "You created a broadcast";
    var date = new Date(new Date(BroadcastMessage[BroadcastMessage?.length - 1]?.MessageDate).getTime() - (5.5 * 60 * 60 * 1000));
    var today = new Date();
// console.log("index:" , index)
    // const dataImage=  userData?.icon;
    // console.log(dataImage);
    // var bannerImg = document.getElementById("avatarIcon");
    // console.log(bannerImg);
//    const Iconsrc = dataImage;

// if(BroadcastName.length !== 0 && BroadcastMessage.length !== 0)
  return (
    <>
<div className='flex my-5 pl-2' onClick={() => {Navigate("/broadcastchat" )}}>
    <div className={`flex justify-center m-0 w-[58.5px]`}>
<Avatar id="avatarIcon"  sx={{ bgcolor: "#DFE5E7" , margin: "auto", padding: "0.5rem" ,width: "42px", height: "42px"}} src={broadcastItem}/>
    </div>
<div className='flex flex-col w-full items-start ml-2'>
    <div className='flex justify-between w-full pr-3'>

    <Typography variant='body1'>{BroadcastName?.name}</Typography>
    <Typography variant='subtitle2'>{date?.toDateString() == today?.toDateString() ? 
    (date?.getHours().toString().padStart(2,  "0") + ":" + date?.getMinutes().toString().padStart(2,  "0")) 
    : 
  (  date?.getFullYear() == today?.getFullYear() && date?.getMonth()  == today?.getMonth() && today?.getDate() - date?.getDate() == 1 ) ? 
  "Yesterday" :
    (date?.getDate() + "/" + (date?.getMonth() + 1) + "/" + date?.getFullYear().toString().substr(-2))}</Typography>
    </div>
    <div className='flex gap-1 justify-between w-full pr-4 '>
        <div className='flex gap-1 items-center'>
            {
                BroadcastMessage[BroadcastMessage?.length - 1 ]?.status === "Sent" ? 
  <span aria-hidden="false"  aria-label=" Sent " data-icon="msg-check" className="h-3">
            <svg viewBox="0 0 12 11" color='#BBC4CA' height="13" width="13" preserveAspectRatio="xMidYMid meet" className="" fill="none"><title>msg-check</title><path d="M11.1549 0.652832C11.0745 0.585124 10.9729 0.55127 10.8502 0.55127C10.7021 0.55127 10.5751 0.610514 10.4693 0.729004L4.28038 8.36523L1.87461 6.09277C1.8323 6.04622 1.78151 6.01025 1.72227 5.98486C1.66303 5.95947 1.60166 5.94678 1.53819 5.94678C1.407 5.94678 1.29275 5.99544 1.19541 6.09277L0.884379 6.40381C0.79128 6.49268 0.744731 6.60482 0.744731 6.74023C0.744731 6.87565 0.79128 6.98991 0.884379 7.08301L3.88047 10.0791C4.02859 10.2145 4.19574 10.2822 4.38194 10.2822C4.48773 10.2822 4.58929 10.259 4.68663 10.2124C4.78396 10.1659 4.86436 10.1003 4.92784 10.0156L11.5738 1.59863C11.6458 1.5013 11.6817 1.40186 11.6817 1.30029C11.6817 1.14372 11.6183 1.01888 11.4913 0.925781L11.1549 0.652832Z" fill="currentcolor"></path></svg>
            </span> 
            :
            BroadcastMessage[BroadcastMessage?.length - 1 ]?.status === "Delivered" ?
            <svg viewBox="0 0 18 18" color='#BBC4CA' height="18" width="18" preserveAspectRatio="xMidYMid meet" className="" version="1.1" x="0px" y="0px" enable-background="new 0 0 18 18"><title>status-dblcheck</title><path fill="currentColor" d="M17.394,5.035l-0.57-0.444c-0.188-0.147-0.462-0.113-0.609,0.076l-6.39,8.198 c-0.147,0.188-0.406,0.206-0.577,0.039l-0.427-0.388c-0.171-0.167-0.431-0.15-0.578,0.038L7.792,13.13 c-0.147,0.188-0.128,0.478,0.043,0.645l1.575,1.51c0.171,0.167,0.43,0.149,0.577-0.039l7.483-9.602 C17.616,5.456,17.582,5.182,17.394,5.035z M12.502,5.035l-0.57-0.444c-0.188-0.147-0.462-0.113-0.609,0.076l-6.39,8.198 c-0.147,0.188-0.406,0.206-0.577,0.039l-2.614-2.556c-0.171-0.167-0.447-0.164-0.614,0.007l-0.505,0.516 c-0.167,0.171-0.164,0.447,0.007,0.614l3.887,3.8c0.171,0.167,0.43,0.149,0.577-0.039l7.483-9.602 C12.724,5.456,12.69,5.182,12.502,5.035z"></path></svg>
            :
            BroadcastMessage[BroadcastMessage?.length - 1 ]?.status === "Recieved" ?
            <span aria-hidden="false" aria-label=" Read " data-icon="msg-dblcheck" className="x1q15gih"><svg viewBox="0 0 16 11" height="11" width="16" color='#1776cd' preserveAspectRatio="xMidYMid meet" className="" fill="none"><title>msg-dblcheck</title><path d="M11.0714 0.652832C10.991 0.585124 10.8894 0.55127 10.7667 0.55127C10.6186 0.55127 10.4916 0.610514 10.3858 0.729004L4.19688 8.36523L1.79112 6.09277C1.7488 6.04622 1.69802 6.01025 1.63877 5.98486C1.57953 5.95947 1.51817 5.94678 1.45469 5.94678C1.32351 5.94678 1.20925 5.99544 1.11192 6.09277L0.800883 6.40381C0.707784 6.49268 0.661235 6.60482 0.661235 6.74023C0.661235 6.87565 0.707784 6.98991 0.800883 7.08301L3.79698 10.0791C3.94509 10.2145 4.11224 10.2822 4.29844 10.2822C4.40424 10.2822 4.5058 10.259 4.60313 10.2124C4.70046 10.1659 4.78086 10.1003 4.84434 10.0156L11.4903 1.59863C11.5623 1.5013 11.5982 1.40186 11.5982 1.30029C11.5982 1.14372 11.5348 1.01888 11.4078 0.925781L11.0714 0.652832ZM8.6212 8.32715C8.43077 8.20866 8.2488 8.09017 8.0753 7.97168C7.99489 7.89128 7.8891 7.85107 7.75791 7.85107C7.6098 7.85107 7.4892 7.90397 7.3961 8.00977L7.10411 8.33984C7.01947 8.43717 6.97715 8.54508 6.97715 8.66357C6.97715 8.79476 7.0237 8.90902 7.1168 9.00635L8.1959 10.0791C8.33132 10.2145 8.49636 10.2822 8.69102 10.2822C8.79681 10.2822 8.89838 10.259 8.99571 10.2124C9.09304 10.1659 9.17556 10.1003 9.24327 10.0156L15.8639 1.62402C15.9358 1.53939 15.9718 1.43994 15.9718 1.32568C15.9718 1.1818 15.9125 1.05697 15.794 0.951172L15.4386 0.678223C15.3582 0.610514 15.2587 0.57666 15.1402 0.57666C14.9964 0.57666 14.8715 0.635905 14.7657 0.754395L8.6212 8.32715Z" fill="currentColor"></path></svg></span>
           
        :
        <>
        </>}
       
   
        {/* <img src={Tick} width={10} height={6}/> */}
    <Typography variant='subtitle1'>{latestMessage?.substring(0, 35)} {latestMessage?.length >= 35 && '...'}</Typography>
        </div>
        <span ><img src={pin} className='h-6'/></span>
        {/* <span aria-hidden="true" data-icon="pinned2" className=""><svg height="15" width="13" preserveAspectRatio="xMidYMid meet" className=""><title>pinned2</title><path fill="currentColor" d="M12.074 4.21 8.7 8.232l.116 4.233a.4.4 0 0 1-.657.318L.43 6.297a.4.4 0 0 1 .199-.702l4.196-.622L8.196.957a.63.63 0 0 1 .887-.078l2.914 2.445a.63.63 0 0 1 .077.887ZM1.294 14.229a.713.713 0 0 1-1.09-.915l2.674-3.64 1.536 1.288-3.12 3.267Z"></path></svg></span> */}
    </div>
</div>

</div>

</>
  )
//   else return (
//     <></>
//   )
}

export default BroadcastChatItem
