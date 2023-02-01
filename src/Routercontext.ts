import { createContext } from "react";

export enum Color {
  black = 1,
  white = 2,
}

interface RoutercontextI {
  mode: Color;
  setMode: Function;
}

export default createContext<RoutercontextI>({
  mode: Color.black,
  setMode: () => {},
});
