
import { Outlet } from "react-router-dom";
import Header from "./Header";

const UserWrapper = () => {
  return (
    <>
      <Header />
      <Outlet />
    </>
  );
};

export default UserWrapper;
