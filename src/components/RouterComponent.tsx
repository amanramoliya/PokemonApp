import { useState } from "react";
import Routercontext, { Color } from "../Routercontext";

interface RoutePropInterface {
  children: React.ReactElement;
}

const RouterComponent = (props: RoutePropInterface) => {
  const [mode, setMode] = useState(Color.black);
  return (
    <Routercontext.Provider value={{ mode: mode, setMode: setMode }}>
      {props.children}
    </Routercontext.Provider>
  );
};

export default RouterComponent;
