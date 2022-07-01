import { useEffect, useRef, useState } from "react";
import "./App.css";

const useNotification = (title, options) => {
  if (!("Notification" in window)) {
    return;
  }
  const fireNotification = () => {
    if (Notification.permission !== "granted") {
      Notification.requestPermission().then((permission) => {
        if (permission === "granted") {
          new Notification(title, options);
        } else {
          return;
        }
      });
    } else {
      new Notification(title, options);
    }
  };
  return fireNotification;
};

const App = () => {
  const triggerNotification = useNotification("Do you need any help?", {
    body: "Yes",
  });
  return (
    <div className="App">
      <button onClick={triggerNotification}>Btn</button>
    </div>
  );
};

export default App;
