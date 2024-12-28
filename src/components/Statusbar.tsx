import status from "../assets/status.jpg"

const Statusbar = () => {
    const today = new Date();
    const currHr = today.getHours();
    const currMin = today.getMinutes();
  return (
    <div className="w-full h-fit">
        <div className="absolute">

        <span className="z-20 relative top-8">{currHr} : {currMin}</span>
      <img src={status} />
        </div>
    </div>
  )
}

export default Statusbar
