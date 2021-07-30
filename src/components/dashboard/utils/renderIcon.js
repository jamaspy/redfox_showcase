import {
  AiOutlineDollar,
  AiOutlinePhone,
  AiOutlineFire,
  AiOutlineClockCircle,
} from "react-icons/ai";
import { BsTrash } from "react-icons/bs";
import { GiPirateGrave, GiArcheryTarget } from "react-icons/gi";
import { GoThumbsup, GoThumbsdown } from "react-icons/go";
export const renderIcon = (iconName) => {
  switch (iconName) {
    case "deal":
      return <AiOutlineDollar className="text-green-500" />;
    case "call":
      return <AiOutlinePhone className="text-red-500" />;
    case "fire":
      return <AiOutlineFire className="text-yellow-700" />;
    case "clock":
      return <AiOutlineClockCircle className="text-indigo-700" />;
    case "trash":
      return <BsTrash className="text-gray-600" />;
    case "pirate":
      return <GiPirateGrave className="text-black" />;
    case "thumbup":
      return <GoThumbsup className="text-green-600" />;
    case "thumbdown":
      return <GoThumbsdown className="text-blue-500" />;
    case "target":
      return <GiArcheryTarget className="text-pink-500" />;
    default:
      break;
  }
};
