import { useRef, useState } from "react";
import { MessagesInt } from './model';
import Message from "./components/Message";

const App: React.FC = () => {
  const inputMessage = useRef<HTMLInputElement>(null);
  const [messData, setMessData] = useState<MessagesInt[]>([]);

  const handleSubmit = (event:any) => {
    event.preventDefault();

    if (inputMessage) {
      const mess:MessagesInt = {
        id: Math.round(Math.random() * Date.now()),
        message: inputMessage?.current?.value,
        date: Date.now()
      }
      setMessData((previousData) => [...previousData, mess]);
    }

    (document.getElementById("inputMessage") as HTMLInputElement).value = "";
  }

  return (
    <div>
      <h2>Poster un message</h2>
      <form onSubmit={(event) => handleSubmit(event)}>
        <input type="text" placeholder="Entrez un message" id="inputMessage" ref={inputMessage} />
        <input type="submit" value="Envoyer" placeholder="Envoyer" />
      </form>
      <h2>Liste des messages</h2>
      <div>{messData?.map((mess) => (
        <Message mess={mess} messData={messData} setMessData={setMessData} key={mess.id} />
      ))}</div>
    </div>
  );
};

export default App;