import React from "react";
import ReactDOM from "react-dom";
import Main from "./Entryfile/Main";
import store from "./app/store";
import { Provider } from "react-redux";
window.Popper = require("popper.js").default;

ReactDOM.render(
    <Provider store={store} >
        <Main />
    </Provider>,
    document.getElementById('app'));

if (module.hot) { // enables hot module replacement if plugin is installed
    module.hot.accept();
}