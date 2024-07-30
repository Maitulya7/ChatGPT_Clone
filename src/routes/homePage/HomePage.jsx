import { Link } from 'react-router-dom'
import './homePage.css'

const HomePage = () => {
  return (
    <div className='homePage'>
      <Link to="/dashboard">
        Dashboard
      </Link>
    </div>
  )
}

export default HomePage