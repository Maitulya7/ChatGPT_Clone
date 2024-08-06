import "./chatPage.css";
import NewPrompt from "../../components/newPrompt/NewPrompt";

const ChatPage = () => {
 
  return (
    <div className="chatPage">
      <div className="wrapper">
        <div className="chat">
          
          <div className="message">Text Message from AI</div>
          <div className="message user">
            Text Message from User Lorem ipsum dolor, sit amet consectetur
            adipisicing elit. Ut, minima facere voluptate distinctio quidem
            praesentium nostrum consectetur perferendis enim eligendi.
          </div>
          <div className="message">Text Message from AI</div>
          <div className="message user">Text Message from User</div>
          <div className="message">
            Text Message from AI Lorem, ipsum dolor sit amet consectetur
            adipisicing elit. Quae, reprehenderit.
          </div>
          <div className="message user">Text Message from User</div>
          <div className="message">Text Message from AI</div>
          <div className="message user">Text Message from User</div>
          <div className="message">Text Message from AI</div>
          <div className="message user">
            Text Message from User Lorem ipsum dolor, sit amet consectetur
            adipisicing elit. Ut, minima facere voluptate distinctio quidem
            praesentium nostrum consectetur perferendis enim eligendi.
          </div>
          <div className="message">Text Message from AI</div>
          <div className="message user">Text Message from User</div>
          <div className="message">
            Text Message from AI Lorem, ipsum dolor sit amet consectetur
            adipisicing elit. Quae, reprehenderit.
          </div>
          <div className="message user">Text Message from User</div>
          <div className="message">Text Message from AI</div>
          <div className="message user">Text Message from User</div>
          <div className="message">Text Message from AI</div>
          <div className="message user">
            Text Message from User Lorem ipsum dolor, sit amet consectetur
            adipisicing elit. Ut, minima facere voluptate distinctio quidem
            praesentium nostrum consectetur perferendis enim eligendi.
          </div>
          <div className="message">Text Message from AI</div>
          <div className="message user">Text Message from User</div>
          <div className="message">
            Text Message from AI Lorem, ipsum dolor sit amet consectetur
            adipisicing elit. Quae, reprehenderit.
          </div>
          <div className="message user">Text Message from User</div>
          <div className="message">Text Message from AI</div>
          <div className="message user">Text Message from User</div>
          <NewPrompt />
        </div>
      </div>
    </div>
  );
};

export default ChatPage;
