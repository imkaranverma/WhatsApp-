import './ReceivedMessage.css'

const ReceivedMessage = ({message} : {message: String}) => {
  return (
    <div className="message received">
    {message}
    <span className="metadata">
      <span className="time" />
    </span>
  </div>
  )
}

export default ReceivedMessage
