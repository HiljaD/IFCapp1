import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { initializeApp } from "firebase/app";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyC4gXrIWwjuh5q6x4KrwyyuTteQnUU16zQ",
  authDomain: "ifc-app1.firebaseapp.com",
  projectId: "ifc-app1",
  storageBucket: "ifc-app1.appspot.com",
  messagingSenderId: "642852850964",
  appId: "1:642852850964:web:bcdc1b50458a50e2c8c601"
};

// Initialize Firebase
// Initialize Firebase
initializeApp(firebaseConfig);

root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);