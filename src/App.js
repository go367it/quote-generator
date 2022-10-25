import "./styles.css";
import { useEffect, useState } from "react";
import Navbar from "./components/Navbar";
import axios from "axios";
import QuoteContainer from "./components/quoteContainer";

export default function App() {
  const [quotes, setQuotes] = useState([]);

  useEffect(() => {
    const config = {
      url: "https://zenquotes.io/api/quotes",
      method: "get"
    };
    axios(config)
      .then((res) => {
        console.log(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <div className="App">
      <Navbar />
      <QuoteContainer />
    </div>
  );
}
