import React from "react";
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";

import store, { persistor } from "./store/store";
import Routes from "./routes/routes";
import { PersistGate } from "redux-persist/integration/react";

const AppComponent = () => {
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <BrowserRouter>
          <Routes />
        </BrowserRouter>
      </PersistGate>
    </Provider>
  );
};

export default AppComponent;
