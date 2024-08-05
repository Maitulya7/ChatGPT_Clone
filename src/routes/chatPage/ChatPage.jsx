import { useRef } from "react";
import "./chatPage.css";
import { useEffect } from "react";
import NewPrompt from "../../components/newPrompt/NewPrompt";

const ChatPage = () => {
  const endRef = useRef(null);

  useEffect(() => {
    endRef.current.scrollIntoView({ behavior: "smooth" });
  }, []);

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
          <div ref={endRef} />
        </div>
      </div>
    </div>
  );
};

export default ChatPage;
