import { IoSearchSharp } from "react-icons/io5";
import { MdOutlineShoppingCart } from "react-icons/md";
import { NavLink, useNavigate } from "react-router";

const NavBar = () => {
  const navigate = useNavigate();
  return (
    <div className=" bg-blue-50 text-xl text-black font-medium flex justify-between w-full h-fit py-3 items-center px-20">
      <div onClick={() => navigate("/")}>
        <img src="./logo.ico" alt="" className="h-16 w-17 rounded-full" />
      </div>
      <div className=" flex gap-6">
        <div className="flex bg-slate-100 border-gray-600 items-center border rounded-md p-1 px-3">
          <input type="text" placeholder="Search" className="outline-none" />
          <IoSearchSharp className="text-gray-700" />
        </div>
        <NavLink to={"/cart"}>
          <MdOutlineShoppingCart className="text-4xl text-gray-600" />
        </NavLink>
      </div>
    </div>
  );
};

export default NavBar;