import { StyledEngineProvider } from '@mui/material';
import React, {DragEvent, MouseEvent, useCallback, useState} from 'react';
import {BrowserRouter} from "react-router-dom";
import RouteComp from "./Components/RouteComp";



function App() {


  return (
      <BrowserRouter>
          <StyledEngineProvider injectFirst>
                <RouteComp/>
              </StyledEngineProvider>
      </BrowserRouter>
  );
}

export default App;
