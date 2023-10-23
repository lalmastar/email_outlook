import { useEffect, useState } from "react";
import Favorite from "./components/Favorite";
import Read from "./components/Read";
import Unread from "./components/Unread";
import EmailBody from "./components/emailbody/EmailBody";
import EmailList from "./components/emails/EmailList";
import Header from "./components/header/Header";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ReadPages from "./components/ReadPages";

function App() {
  const url = "https://flipkart-email-mock.vercel.app/";
  const [data, setData] = useState([]);
  
  const fetchInfo = () => {
    return fetch(url)
      .then((res) => res.json())
      .then((d) => {
        setData(d.list);
      });
  };

  useEffect(() => {
    fetchInfo();
  }, []);

  useEffect(() => {
    localStorage.setItem('data', JSON.stringify(data));
  }, [data]);

  return (
    <div className="App">
      <BrowserRouter>
      <Header/>
      <Routes>
      <Route path="/" element={<Unread />} />
      <Route path="/unread" element={<Unread />} />
      <Route path="/read/:id" element={<Read />} />
      <Route path="/read" element={<ReadPages />} />
      <Route path="/favorites" element={<Favorite />} />
      </Routes>
      </BrowserRouter>
      
    </div>
  );
}

export default App;
