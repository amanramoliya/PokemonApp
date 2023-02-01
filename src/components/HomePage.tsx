import { useContext, useEffect, useState } from "react";
import { Outlet, useNavigate } from "react-router-dom";
import Routercontext, { Color } from "../Routercontext";

const PokeAPI = () => {
  const [searchinput, setSearchinput] = useState<string | null>();
  const searchfunction = () => {
    const ele = document.getElementById("searchbox") as HTMLInputElement;

    setSearchinput(ele.value);
  };

  const formSubmit = (e: any) => {
    e.preventDefault();
    navigate(`details/${searchinput}`);
  };

  const navigate = useNavigate();
  useEffect(() => {
    // console.log(searchinput);
  }, [searchinput]);

  const { mode, setMode } = useContext(Routercontext);
  return (
    <>
      <div className="display-3 text-center">PokeAPI</div>
      <button
        onClick={() => {
          setMode(mode === Color.black ? Color.white : Color.black);
        }}
      >
        Change Mode
      </button>
      <form onSubmit={formSubmit}>
        <input
          type={"text"}
          id="searchbox"
          defaultValue={""}
          placeholder="Search here.."
          onChange={searchfunction}
        ></input>
        <button type="submit" onClick={formSubmit}>
          {"->"}
        </button>
      </form>
      <Outlet></Outlet>
    </>
  );
};

export default PokeAPI;
