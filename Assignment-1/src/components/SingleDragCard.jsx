/* eslint-disable react/prop-types */
import Drag from "../assets/drag.png";
import DownIcon from "../assets/icons/DownIcon";
import RemoveIcon from "../assets/icons/RemoveIcon";
import UpIcon from "../assets/icons/UpIcon";
import Menu from "../assets/menu.png";

const SingleDragCard = ({ course, dragHandleProps, handleMenuAction, openMenuId, setOpenMenuId }) => {
  const { courseName, courseType, img, coursePrice, id } = course;
  const isMenuOpen = openMenuId === id;

  const handleListView = () => {
    setOpenMenuId(isMenuOpen ? null : id);
  };

  return (
    <div className="flex flex-col md:flex-row items-center text-center gap-2 md:gap-8  box-shadow my-5 p-3 rounded-sm">
      <div {...dragHandleProps}>
        <img src={Drag} alt="drag_img" width="30px" height="30px" />
      </div>
      <img src={img} alt={courseName} width="150px" />
      <h1 className="text-sm md:w-1/3 md:text-md md:font-semibold">{courseName}</h1>
      <p className="w-24">{coursePrice}</p>
      <p className="mx-5 w-24 bg-[#dbffce] text-center p-1">{courseType}</p>
      <div>
        <img src={Menu} className="cursor-pointer" alt="menu_img" width="30px" height="30px" onClick={handleListView} />
        {isMenuOpen && (
          <div className="flex flex-col gap-2 text-left shadow-md p-2 absolute bg-white rounded-md z-10">
            <button className="text-left flex items-center" onClick={() => handleMenuAction("top", id)}>
              <UpIcon /> Move To Top
            </button>
            <button className="text-left flex items-center" onClick={() => handleMenuAction("down", id)}>
              <DownIcon /> Move To Bottom
            </button>
            <button className="text-left flex items-center gap-1" onClick={() => handleMenuAction("remove", id)}>
              <RemoveIcon /> Remove
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default SingleDragCard;
