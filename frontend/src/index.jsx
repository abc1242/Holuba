import React from "react";
import ReactDOM from "react-dom";
import App from "App";
import { store } from "state/store";
import { Provider } from "react-redux";
import * as serviceWorker from "serviceWorker";

//web3
//App root의 provider로 제공하고 web3 객체를 인스턴스화 하는 getLibrary 함수 정의
// import { Web3ReactProvider } from "@web3-react/core";
// import { Web3Provider } from "@ethersproject/providers";

// function getLibrary(provider) {
//   const library = new Web3Provider(provider, "any");
//   return library;
// }

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById("root")
);

serviceWorker.unregister();
