import { Avatar } from "@mui/material";

const UserInfoInChat = ({name, } : {name?: String}) => {
  return (
    <div className="user-bar">
    <div className="back">
      <i className="zmdi zmdi-arrow-left" />
    </div>
    <div className="avatar">
      {/* <img src="" alt="Avatar" /> */}
      <Avatar  sx={{ bgcolor: "#DFE5E7" , margin: "auto"}}>{
// userData?.icon?.slice(0,1).toUpperCase()
undefined
}</Avatar>
    </div>
    <div className="name">
      <span>{name ?? "AS"}</span>
      <span className="status">online</span>
    </div>
    <div className="actions more">
      <i className="zmdi zmdi-more-vert" />
    </div>
    <div className="actions attachment">
      <i className="zmdi zmdi-attachment-alt" />
    </div>
    <div className="actions">
      <i className="zmdi zmdi-phone" />
    </div>
  </div>
  )
}

export default UserInfoInChat
