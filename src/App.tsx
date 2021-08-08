import { useEffect, useState } from "react";
import "./App.css";
import Api from "apiClient/api";
import { Sample } from "./apiClient/sample/models";

const App = () => {
  const [view, serView] = useState<Sample>();
  useEffect(() => {
    (async () => {
      const {responseData} = await Api.GetSample()
      responseData && serView(responseData);
    })();
  }, []);

  return (
    <>
      <p>{view?.greeting}</p>
      {view?.instructions?.map((item, index) => {
        return <p key={index}>{item}</p>;
      })}
    </>
  );
};

export default App;
