import { Flex, Box } from "@chakra-ui/react";
import { Link, useLocation } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import {
  selectActiveItem,
  setActiveItem,
} from "../../redux/reducers/slices/navbar";
import style from "./navbar.module.css";
import { useEffect } from "react";

function Navbar() {
  const activeItem = useSelector(selectActiveItem);
  const dispatch = useDispatch();
  const location = useLocation();

  const handleItemClick = (item: string) => {
    dispatch(setActiveItem(item));
  };

  // Parse the active item from the URL pathname when the location changes
  useEffect(() => {
    const pathname = location.pathname;
    const activeItemFromPath =
      pathname.substring(1).charAt(0).toUpperCase() + pathname.substring(2);
    dispatch(setActiveItem(activeItemFromPath || "Home"));
  }, [location, dispatch]);

  return (
    <Box p={4} className={style.navbar}>
      <Flex justifyContent="space-between" alignItems="center">
        <div className={style.brand}>
          <Link to="/">D Sherpa</Link>
        </div>
        <Flex className={style.navLinks}>
          <Link
            to="/"
            className={activeItem === "Home" ? style.active : ""}
            onClick={() => handleItemClick("Home")}
          >
            Home
          </Link>
          <Link
            to="/projects"
            className={activeItem === "Projects" ? style.active : ""}
            onClick={() => handleItemClick("Projects")}
          >
            Projects
          </Link>
        </Flex>
      </Flex>
    </Box>
  );
}

export default Navbar;
