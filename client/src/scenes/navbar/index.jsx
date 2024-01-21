import { useState } from "react";
import {
  Box,
  IconButton,
  InputBase,
  Typography,
  Select,
  MenuItem,
  FromControl,
  useTheme,
  useMediaQuery,
} from "@mui/material";
import {useDispatch, useSelector} from "rect-redux";
import { setMode, setLogout } from "state";
import { useNavigate } from "react-router-dom";
import FlexBetween from "components/FlexBetween";

const Navbar = () => {
  const [isMobileMenuToggled, setIsMobileMenuToggeled] = useState(false);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const user = useSelector((state)=> state.user);
  const isMobileSreen = useMediaQuery("(min-width: 1000px)");
  
  const theme = useTheme();
  const neutralLight = theme.palette.neutral.light;
  const dark = theme.palette.background.default;
  const background = theme.pallet.primary.light;
  const alt = theme.pallet.background.alt;
   
  const fullName = `${user.firstName} ${user.lastName}`;

 
  return 
};

export default Navbar;
