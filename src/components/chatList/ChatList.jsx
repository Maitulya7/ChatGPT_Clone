import { Link } from 'react-router-dom'
import './chatList.css'

const ChatList = () => {
  return (
    <div className='chatList'>
        <span className='title'>Dashboard</span>
        <Link to='/dashboard'>Create a new chat</Link>
        <Link to='/dashboard'>Explore LAMA AI</Link>
        <Link to='/dashboard'>Contact</Link>
        <hr />
        <span className='title'>Recent Chats</span>
        <div className="list">
            <Link to="/">My chat list</Link>
            <Link to="/">My chat list</Link>
            <Link to="/">My chat list</Link>
            <Link to="/">My chat list</Link>
            <Link to="/">My chat list</Link>
            <Link to="/">My chat list</Link>
            <Link to="/">My chat list</Link>
            <Link to="/">My chat list</Link>
            <Link to="/">My chat list</Link>

   
        </div>
        <hr />
        <div className="upgrade">
            <img src='/logo.png' alt='logo'/>
            <div className="texts">
                <span>Upgrade to LAMA AI Pro</span>
                <span>Get unlimited access to all features</span>
            </div>
        </div>
    </div>
  )
}

export default ChatList