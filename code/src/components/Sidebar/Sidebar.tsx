import { ReactNode, useState } from "react";
import { Link } from "react-scroll";

import {
  AppBar,
  Box,
  Divider,
  Drawer,
  IconButton,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
  ListItemIcon,
  Toolbar,
  Typography,
} from "@mui/material";
import {
  Call,
  ChevronLeft,
  Help,
  Home,
  HotTub,
  Menu,
  PhotoCamera,
} from "@mui/icons-material";

const iconStyle = {
  color: "#fff",
  fontSize: "3.5rem",
};

const textStyle = {
  ...iconStyle,
  fontWeight: "bold",
};

interface NavItem {
  icon: ReactNode;
  text: string;
}

const navItems: NavItem[] = [
  {
    icon: <Home sx={iconStyle} />,
    text: "Start",
  },
  {
    icon: <HotTub sx={iconStyle} />,
    text: "Oferta",
  },
  {
    icon: <PhotoCamera sx={iconStyle} />,
    text: "Galeria",
  },
  {
    icon: <Help sx={iconStyle} />,
    text: "FAQ",
  },
  {
    icon: <Call sx={iconStyle} />,
    text: "Kontakt",
  },
];

export default function Navbar() {
  const [open, setOpen] = useState<boolean>(false);

  const handleMenuToggle = () => setOpen((prevState) => !prevState);

  const drawer = (
    <List
      sx={{
        height: "100%",
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-around",
        alignItems: "center",
      }}
    >
      {navItems.map((navItem, index) => (
        <Link to={navItem.text} spy={true} key={index}>
          <ListItem disablePadding>
            <ListItemButton
              sx={{
                p: 2,
              }}
            >
              <ListItemIcon>{navItem.icon}</ListItemIcon>
              <ListItemText>
                <Typography sx={textStyle}>{navItem.text}</Typography>
              </ListItemText>
            </ListItemButton>
          </ListItem>
        </Link>
      ))}
    </List>
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
            aria-label="open drawer"
            color="inherit"
            edge="start"
            onClick={handleMenuToggle}
          >
            <Menu
              sx={{
                ...iconStyle,
                ml: { xs: 0, sm: 1, lg: 2 },
                color: "#0066bb",
              }}
            />
          </IconButton>
        </Toolbar>
      </AppBar>
      <Box component="nav">
        <Drawer
          open={open}
          onClose={handleMenuToggle}
          ModalProps={{
            keepMounted: true,
          }}
          sx={{
            display: "block",
            "& .MuiDrawer-paper": {
              backdropFilter: "blur(8px)",
              backgroundColor: "rgba(255, 255, 255, 0.5)",
              border: "1px solid rgba(255, 255, 255, 0.28)",
              borderRadius: "1rem",
              WebkitBackdropFilter: "blur(8px)",
              width: { xs: "60vw", md: "30vw" },
            },
          }}
        >
          <ChevronLeft
            sx={{
              ...iconStyle,
              position: "absolute",
              left: 5,
              top: 15,
              cursor: "pointer",
            }}
            onClick={handleMenuToggle}
          />
          <Typography
            component="h3"
            sx={{
              fontSize: "3rem",
              fontStyle: "italic",
              fontWeight: 700,
              py: 2,
              textAlign: "center",
              textTransform: "uppercase",
              background: "-webkit-linear-gradient(darkblue, lightblue)",
              WebkitBackgroundClip: "text",
              backgroundClip: "text",
              WebkitTextFillColor: "transparent",
            }}
          >
            aquapark "na fali"
          </Typography>
          <Divider />
          {drawer}
        </Drawer>
      </Box>
    </Box>
  );
}
