// import React from 'react'
// import Box from '@mui/material/Box';
// import TextField from '@mui/material/TextField';
// import { FilledInput, Input, InputAdornment } from '@mui/material';
// import { IoSearchSharp } from "react-icons/io5";


const SearchBar = () => {
    return (
        <div className="_aoq2 _ai01 relative z-[100] box-border flex flex-none items-center h-[var(--h-pane-subheader)] bg-[color:#F0F2F5] px-3 py-0;
        transition: box-shadow 0.18s ease-out, background-color-[#F0F2F5] 0.25s ease-out">
            
        <div />
        <div className="_ai04 relative box-border flex-1 overflow-hidden">
          <button
            className="_ai0b _ai08 _ash5 absolute z-[100] left-3 top-[5px] w-6 h-6 cursor-pointer p-0 border-0"
            aria-label="Search or start new chat"
            tabIndex={-1}
          >
            <div className="_ah_x _ai0a">
              <span aria-hidden="true" data-icon="back" className="">
                <svg
                  viewBox="0 0 24 24"
                  height={24}
                  width={24}
                  preserveAspectRatio="xMidYMid meet"
                  className=""
                  version="1.1"
                  x="0px"
                  y="0px"
                  enableBackground="new 0 0 24 24"
                >
                  <title>back</title>
                  <path
                    fill="currentColor"
                    d="M12,4l1.4,1.4L7.8,11H20v2H7.8l5.6,5.6L12,20l-8-8L12,4z"
                  />
                </svg>
              </span>
            </div>
            <div className="_ah_x _ai09 text-[15px] font-normal leading-5 text-[color:var(--filters-item-color)] absolute z-[100] h-5 overflow-hidden text-sm leading-5 text-[color:var(--input-placeholder)] text-ellipsis whitespace-nowrap pointer-events-none transition-opacity duration-[0.14s] ease-linear left-[65px] right-2.5 top-[7px]">
              <span aria-hidden="true" data-icon="search" className="">
                <svg
                  viewBox="0 0 24 24"
                  height={24}
                  width={24}
                  preserveAspectRatio="xMidYMid meet"
                  className=""
                  version="1.1"
                  x="0px"
                  y="0px"
                  enableBackground="new 0 0 24 24"
                >
                  <title>search</title>
                  <path
                    fill="currentColor"
                    d="M15.009,13.805h-0.636l-0.22-0.219c0.781-0.911,1.256-2.092,1.256-3.386 c0-2.876-2.332-5.207-5.207-5.207c-2.876,0-5.208,2.331-5.208,5.207s2.331,5.208,5.208,5.208c1.293,0,2.474-0.474,3.385-1.255 l0.221,0.22v0.635l4.004,3.999l1.194-1.195L15.009,13.805z M10.201,13.805c-1.991,0-3.605-1.614-3.605-3.605 s1.614-3.605,3.605-3.605s3.605,1.614,3.605,3.605S12.192,13.805,10.201,13.805z"
                  />
                </svg>
              </span>
            </div>
          </button>
          <span className="" />
          <div className="_ah_-">Search</div>
          <div className="x9f619 x78zum5 x6s0dn4 x1s1d1n7 xqmdsaz x1lj6vcq x1bmedo x1lq5wgf xgqcy7u x30kzoy x9jhf4c">
            <div className="x1n2onr6 xh8yej3 lexical-rich-text-input">
              <div
                aria-autocomplete="list"
                aria-owns="emoji-suggestion"
                className="x1hx0egp x6ikm8r x1odjw0f x6prxxf x1k6rcq7 x1whj5v"
                contentEditable="true"
                role="textbox"
                spellCheck="true"
                tabIndex={3}
                data-tab={3}
                data-lexical-editor="true"
                style={{
                  minHeight: "1.47em",
                  userSelect: "text",
                  whiteSpace: "pre-wrap",
                  wordBreak: "break-word"
                }}
              >
                <p className="selectable-text copyable-text x15bjb6t x1n2onr6">
                  <br />
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      
    )

    
//   return (
// <>
// <Box sx={{ width: '100%', my: 1 }}>
//       {/* <TextField fullWidth placeholder="Search..." id="fullWidth" sx={{
//       bgcolor: '#EEEEEE',
//       boxShadow: undefined,
//       borderRadius: 16,
//     //   padding: 2,
//       minWidth: 300,
//       }}
     
//      /> */}
//       <Input
//       placeholder='Search...'
//             // id="filled-adornment-amount"
//             startAdornment={<InputAdornment position="start"><IoSearchSharp size="18px" /></InputAdornment>}
//             sx={{
//                 bgcolor: '#EEEEEE',
//                 boxShadow: 0,
//                 height: "full",
//                 borderRadius: 12,
//                 px: 1.5,
//                 py: 0.50,
//                 margin: 0,
//                 width: "97%"
//                 // minWidth: 300,
//                 }}
//           />
//     </Box>
// </>
//   )
}

export default SearchBar



