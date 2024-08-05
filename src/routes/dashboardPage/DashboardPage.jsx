import './dashboardPage.css'

const DashboardPage = () => {
  return (
    <div className='dashboardPage'>
      <div className="texts">
          <div className="logo">
            <img src='/logo.png' alt='logo'/>
            <h1>LAMA AI</h1>
          </div>
          <div className="options">
            <div className="option">
              <img src='/chat.png' alt='chat'/>
              <span>Create a new chat</span>
            </div>
            <div className="option">
              <img src='/image.png' alt='chat'/>
              <span>Analyze my Image</span>
            </div>
            <div className="option">
              <img src='/code.png' alt='chat'/>
              <span>Help me with my code</span>
            </div>
          </div>
      </div>

      <div className="formContainer">
        <form>
          <input placeholder='Ask me anything...' type='text'/>
          <button>
            <img src='/arrow.png' alt='arrow'/>
          </button>
        </form>
      </div>
    </div>
  )
}

export default DashboardPage