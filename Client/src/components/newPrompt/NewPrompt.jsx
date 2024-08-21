import { useEffect, useRef, useState } from "react";
import "./newPrompt.css";
import Upload from "../upload/Upload";
import { IKImage } from "imagekitio-react";
import model from "../../lib/gemini";
import Markdown from "react-markdown";

const NewPrompt = () => {
  const endRef = useRef(null);
  const [question, setQuestion] = useState("");
  const [asnswer, setAnswer] = useState("");
  const [img, setImg] = useState({
    isLoading: false,
    error: "",
    dbData: {},
    aiData: {},
  });

  const chat = model.startChat({
    history: [
      {
        role: "user",
        parts: [{ text: "Hello" }],
      },
      {
        role: "model",
        parts: [{ text: "Great to meet you. What would you like to know?" }],
      },
    ],
  });

  useEffect(() => {
    endRef.current.scrollIntoView({ behavior: "smooth" });
  }, [question, asnswer, img.dbData]);

  const add = async (text) => {
    setQuestion(text);
    const result = await chat.sendMessageStream(
      Object.entries(img.aiData).length ? [img.aiData, text] : [text]
    );
    let accumulatedText = "";
    for await (const chunk of result.stream) {
      const chunkText = chunk.text();
      console.log(chunkText);
      accumulatedText += chunkText;
      setAnswer(accumulatedText);
    }
    setImg({ isLoading: false, error: "", dbData: {}, aiData: {} });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const text = e.target.text.value;
    if (!text) {
      console.log("No text");
    }
    add(text);
    
    e.target.text.value = "";
  };

  return (
    <>
      {img.isLoading && <div className="loading">Loading...</div>}
      {img.dbData?.filePath && (
        <IKImage
          urlEndpoint={import.meta.env.VITE_IMAGE_KIT_ENDPOINT}
          path={img.dbData.filePath}
          transformation={[{ width: 480 }]}
        />
      )}
      {question && <div className="message user">{question}</div>}
      {asnswer && (
        <div className="message">
          <Markdown>{asnswer}</Markdown>
        </div>
      )}
      <div className="endChat" ref={endRef}></div>
      <form className="newForm" onSubmit={handleSubmit}>
        <Upload setImg={setImg} />
        <input type="file" id="file" multiple={false} hidden />
        <input type="text" name="text" placeholder="Ask me anything..." />
        <button>
          <img src="/arrow.png" alt="send" />
        </button>
      </form>
    </>
  );
};

export default NewPrompt;
