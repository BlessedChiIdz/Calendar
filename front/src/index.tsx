import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import {DevSupport} from "@react-buddy/ide-toolbox";
import {ComponentPreviews, useInitial} from "./dev";
import "./index.css"
import {Provider} from "react-redux";
import {setupStore} from "./store";





const store = setupStore()
const root = ReactDOM.createRoot(
    document.getElementById('root') as HTMLElement
);
root.render(
    <React.StrictMode>
        <DevSupport ComponentPreviews={ComponentPreviews}
                    useInitialHook={useInitial}
        >
            <Provider store={store}>
                <App/>
            </Provider>
        </DevSupport>
    </React.StrictMode>

);
