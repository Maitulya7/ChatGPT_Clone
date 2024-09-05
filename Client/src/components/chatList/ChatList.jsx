import { Link } from 'react-router-dom'
import './chatList.css'
import { useQuery } from 'react-query'

const ChatList = () => {
  const { isLoading, error, data } = useQuery('repoData', () =>
    fetch(`${import.meta.env.VITE_API_URL}/api/userChat`,{
      credentials: 'include',
    }).then(res =>
      res.json()
    )
  )
  console.log(data)

  if (error) return 'An error has occurred: ' + error.message

  return (
    <div className='chatList'>
        <span className='title'>Dashboard</span>
        <Link to='/dashboard'>Create a new chat</Link>
        <Link to='/dashboard'>Explore LAMA AI</Link>
        <Link to='/dashboard'>Contact</Link>
        <hr />
        <span className='title'>Recent Chats</span>
        <div className="list">
           {isLoading ? "Loading..." : error ? "Something went wrong" :data?.map((chat)=>(
            <Link key={chat._id} to={`/dashboard/chat/${chat._id}`}>
                <span>{chat.title}</span>
            </Link>
           ))}
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