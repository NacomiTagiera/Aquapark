import { ReactNode, useState } from "react";
import { Link } from "react-scroll";

import {
  AppBar,
  Box,
  Button,
  Divider,
  Drawer,
  IconButton,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
  Toolbar,
  Typography,
} from "@mui/material";
import {
  Call,
  Help,
  Home,
  HotTub,
  Menu,
  PhotoCamera,
} from "@mui/icons-material";

const drawerWidth = 240;

interface NavItem {
  icon: ReactNode;
  text: string;
}

const navItems: NavItem[] = [
  {
    icon: <Home />,
    text: "Home",
  },
  {
    icon: <HotTub />,
    text: "Oferta",
  },
  {
    icon: <PhotoCamera />,
    text: "Galeria",
  },
  {
    icon: <Help />,
    text: "FAQ",
  },
  {
    icon: <Call />,
    text: "Kontakt",
  },
];

export default function Navbar() {
  const [open, setOpen] = useState<boolean>(false);

  const handleMenuToggle = () => setOpen((prevState) => !prevState);

  const drawer = (
    <Box onClick={handleMenuToggle}>
      <Typography
        variant="h3"
        component="h3"
        sx={{ my: 2, fontStyle: "italic", textAlign: "center" }}
      >
        NA FALI
      </Typography>
      <Divider />
      <List>
        {navItems.map((navItem, index) => (
          <Link to={navItem.text} spy={true} key={index}>
            <ListItem disablePadding>
              <ListItemButton sx={{ textAlign: "center" }}>
                <ListItemText primary={navItem.text} />
              </ListItemButton>
            </ListItem>
          </Link>
        ))}
      </List>
    </Box>
  );

  return (
    <Box
      sx={{
        display: "flex",
      }}
    >
      <AppBar
        component="nav"
        sx={{
          backgroundColor: "transparent",
          boxShadow: "none",
        }}
      >
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={handleMenuToggle}
            size="large"
          >
            <Menu />
          </IconButton>
        </Toolbar>
      </AppBar>
      <Box component="nav">
        <Drawer
          variant="temporary"
          open={open}
          onClose={handleMenuToggle}
          ModalProps={{
            keepMounted: true,
          }}
          sx={{
            display: "block",
            "& .MuiDrawer-paper": {
              boxSizing: "border-box",
              width: drawerWidth,
              backgroundColor: "rgba(255, 255, 255, 0.3)",
              backdropFilter: "blur(4px)",
              WebkitBackdropFilter: "blur(4px)",
              borderRadius: "10px",
              border: "1px solid rgba(255, 255, 255, 0.18)",
            },
          }}
        >
          {drawer}
        </Drawer>
      </Box>
    </Box>
  );
}
