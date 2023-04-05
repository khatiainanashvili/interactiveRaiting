import "./App.css";
import CardContent from "./CardContent";
import CardSubmited from "./CardSubmited";
import { useState } from "react";

function App() {
  const [submit, setSubmit] = useState(false);
  const [raiting, setRaiting] = useState(null);
  console.log(submit);
  const Click = () => {
    if (raiting == null) return;
    else return setSubmit(true);
  };
  return (
    <>
      {!submit ? (
        <div className="card">
          <div className="card-content">
            <CardContent raiting={raiting} setRaiting={setRaiting} />
            <button className="submit" onClick={Click}>
              SUBMIT
            </button>
          </div>
        </div>
      ) : (
        <div className="card">
          <CardSubmited raiting={raiting} />
        </div>
      )}
    </>
  );
}

export default App;
