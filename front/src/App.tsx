import { StyledEngineProvider } from '@mui/material';
import React, {DragEvent, MouseEvent, useCallback, useState} from 'react';
import {BrowserRouter} from "react-router-dom";
import RouteComp from "./Components/RouteComp";

interface St{
  id:string
}

function App() {

  const [state, setState] = useState<St[]>([]);




  const onButtonDrag = useCallback((event: DragEvent<HTMLButtonElement>) => {

  }, []);

  return (
      <BrowserRouter>
          <StyledEngineProvider injectFirst>
                <RouteComp/>
              </StyledEngineProvider>
      </BrowserRouter>
  );
}

export default App;
