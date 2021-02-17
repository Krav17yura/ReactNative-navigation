import React, {useEffect} from 'react';
import {Main} from "./src/Main";

import {Provider} from "react-redux";
import store from "./src/redux/store";
import {projectAuth} from "./src/firebase-config";
import {authInfoSuccess} from "./src/redux/ducks/auth/actionCreators";
import FlashMessage from "react-native-flash-message";

export default  function App() {
    projectAuth.onAuthStateChanged(user => store.dispatch(authInfoSuccess(user)))
    return (
        <Provider store={store}>
            <Main/>
            <FlashMessage position="top" animated={true} duration={500} />
        </Provider>
    );

}




