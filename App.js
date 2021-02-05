import React from 'react';
import {Main} from "./src/Main";

import {Provider} from "react-redux";
import store from "./src/redux/store";
import {projectAuth} from "./src/firebase-config";
import {authInfoSuccess} from "./src/redux/ducks/auth/actionCreators";

export default function App() {
    projectAuth.onAuthStateChanged(user => store.dispatch(authInfoSuccess(user)))
    return (
        <Provider store={store}>
            <Main/>
        </Provider>
    );

}


