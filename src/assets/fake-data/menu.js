import { RiCompassLine, RiTimerFlashFill } from "react-icons/ri";
import { MdHome, MdMovie, MdCamera } from "react-icons/md";

export const menu = [
  {
    id: 1,
    title: "Home",
    path: "/",
    icon: <MdHome className="icon" />,
  },
  {
    id: 2,
    title: "Movies",
    path: "/movie",
    icon: <MdMovie className="icon" />,
  },
  {
    id: 3,
    title: "TV Series",
    path: "/tv",
    icon: <MdCamera className="icon" />,
  },
  {
    id: 4,
    title: "Discovery",
    path: "/discovery",
    icon: <RiCompassLine className="icon" />,
  },
  {
    id: 5,
    title: "Coming soon",
    path: "/coming",
    icon: <RiTimerFlashFill className="icon" />,
  },
];
