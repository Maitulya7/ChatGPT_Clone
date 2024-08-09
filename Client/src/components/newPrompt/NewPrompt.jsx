import { useEffect, useRef, useState } from "react";
import "./newPrompt.css";
import Upload from "../upload/Upload";
import { IKImage } from "imagekitio-react";
import model from "../../lib/gemini";

const NewPrompt = () => {
  const endRef = useRef(null);

  const [img, setImg] = useState({
    isLoading: false,
    error: "",
    dbData: {},
  });

  useEffect(() => {
    endRef.current.scrollIntoView({ behavior: "smooth" });
  }, []);

  const add = async () => {
    const prompt = "Write a story about an AI and magic";

    const result = await model.generateContent(prompt);
    const response = await result.response;
    const text = response.text();
    console.log(text);
  };

  return (
    <>
      {img.isLoading && <div className="loading">Loading...</div>}
      {img.dbData?.filePath && (
        <IKImage
          urlEndpoint={import.meta.env.VITE_IMAGE_KIT_ENDPOINT}
          path={img.dbData.filePath}
          transformation={[{ width: 380 }]}
        />
      )}
      <button onClick={add}>Test</button>
      <div className="endChat" ref={endRef}></div>
      <form className="newForm">
        <Upload setImg={setImg} />
        <input type="file" id="file" multiple={false} hidden />
        <input type="text" placeholder="Ask me anything..." />
        <button>
          <img src="/arrow.png" alt="send" />
        </button>
      </form>
    </>
  );
};

export default NewPrompt;
