// "use client";
import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import MenuIcon from "@mui/icons-material/Menu";
import Container from "@mui/material/Container";
import MenuItem from "@mui/material/MenuItem";
import AddShoppingCartOutlinedIcon from "@mui/icons-material/AddShoppingCartOutlined";
import SearchOutlinedIcon from "@mui/icons-material/SearchOutlined";
import theme from "@/utils/theme";
import FavoriteBorderOutlinedIcon from "@mui/icons-material/FavoriteBorderOutlined";
import PersonOutlineOutlinedIcon from "@mui/icons-material/PersonOutlineOutlined";
import ExpandMoreOutlinedIcon from "@mui/icons-material/ExpandMoreOutlined";
import { useSelector } from "react-redux";
import { pages, responsiveMenu } from "@/constants";
import SimpleDialog from "../dialog";
import Link from "next/link";

function LowerNav() {
  const [isClient, setIsClient] = React.useState(false);
  // const [selectedValue, setSelectedValue] = React.useState("email");
  const [open, setOpen] = React.useState(false);

  React.useEffect(() => {
    setIsClient(true);
  }, []);

  const wishlistItems = useSelector((state: any) => state.wishlist.totalItems);
  const cartItems = useSelector((state: any) => state.cart.items);

  const [anchorElNav, setAnchorElNav] = React.useState<null | HTMLElement>(
    null
  );

  const handleOpenNavMenu = (event: React.MouseEvent<HTMLElement>) => {
    anchorElNav ? handleCloseNavMenu() : setAnchorElNav(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <>
      <AppBar position="static" sx={classes.root}>
        <Container maxWidth="xl">
          <Toolbar disableGutters>
            <Link href="/" style={{ textDecoration: "none" }}>
              <Typography
                variant="h6"
                noWrap
                component="a"
                sx={classes.logoText}
              >
                Bandage
              </Typography>
            </Link>
            <Box sx={classes.navWrapper}>
              {pages.map((page) => (
                <Typography
                  key={page}
                  onClick={handleCloseNavMenu}
                  sx={classes.navItem}
                >
                  {page}
                  {page === "Shop" && (
                    <ExpandMoreOutlinedIcon fontSize="small" />
                  )}
                </Typography>
              ))}
            </Box>
            <Box sx={classes.rightContainer}>
              <Box sx={classes.loginButton}>
                <PersonOutlineOutlinedIcon color="primary" fontSize="small" />
                <Typography sx={classes.loginText}>Login / Register</Typography>
              </Box>
              <IconButton
                aria-label="Search"
                color="primary"
                sx={classes.searchIcon}
              >
                <SearchOutlinedIcon fontSize="small" />
              </IconButton>
              <IconButton
                aria-label="Cart"
                color="primary"
                sx={classes.cartIcon}
                onClick={() => {
                  setOpen(true);
                }}
              >
                <AddShoppingCartOutlinedIcon fontSize="small" />
                {isClient && cartItems?.length > 0 && cartItems?.length}
              </IconButton>
              <IconButton
                aria-label="Menu"
                onClick={handleOpenNavMenu}
                sx={classes.menuIcon}
              >
                <MenuIcon fontSize="medium" />
              </IconButton>
              <IconButton aria-label="Favorite" sx={classes.favoriteIcon}>
                <FavoriteBorderOutlinedIcon fontSize="small" />
                {isClient && wishlistItems > 0 && wishlistItems}
              </IconButton>
            </Box>
          </Toolbar>
        </Container>
        {anchorElNav && (
          <Box sx={classes.mobNavContainer}>
            {responsiveMenu.map((page) => (
              <MenuItem key={page}>
                <Typography key={page} sx={classes.mobNavItem}>
                  {page}
                </Typography>
              </MenuItem>
            ))}
          </Box>
        )}
      </AppBar>
      <div>
        <SimpleDialog open={open} onClose={handleClose} cartItems={cartItems} />
      </div>
    </>
  );
}
export default LowerNav;

const classes = {
  root: {
    backgroundColor: theme.palette.background.default,
    boxShadow: "none",
  },
  logoText: {
    flexGrow: { xs: 1, md: 0 },
    mr: 3,
    fontFamily: "monospace",
    fontWeight: 700,
    fontSize: "24px",
    letterSpacing: ".3rem",
    color: theme.palette.text.primary,
    textDecoration: "none",
  },
  navWrapper: {
    flexGrow: 1,
    display: { xs: "none", md: "flex" },
  },
  navItem: {
    fontSize: 14,
    fontWeight: "700",
    margin: "0 12px",
    color: theme.palette.primary.light,
    display: "flex",
    alignItems: "center",
    cursor: "pointer",
  },
  rightContainer: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    flexGrow: 0,
  },
  loginButton: {
    display: { xs: "none", md: "flex", cursor: "pointer" },
  },
  loginText: {
    color: theme.palette.primary.main,
    fontSize: 14,
    mr: 2,
  },
  searchIcon: {
    color: {
      xs: theme.palette.text.primary,
      md: theme.palette.primary.main,
    },
  },
  menuIcon: {
    display: { md: "none" },
    color: {
      xs: theme.palette.text.primary,
      md: theme.palette.primary.main,
    },
  },
  cartIcon: {
    fontSize: 14,
    color: {
      xs: theme.palette.text.primary,
      md: theme.palette.primary.main,
    },
  },
  favoriteIcon: {
    color: theme.palette.primary.main,
    display: { xs: "none", md: "flex" },
    fontSize: 14,
    alignItems: "center",
  },
  mobNavContainer: {
    flexGrow: 1,
    display: { xs: "flex", md: "none" },
    alignItems: "center",
    justifyContent: "center",
    flexDirection: "column",
    backgroundColor: "transparent",
    marginTop: "50px",
    marginBottom: "50px",
  },
  mobNavItem: {
    fontSize: 30,
    margin: "0 10px",
    color: theme.palette.primary.light,
    display: "block",
    textAlign: "center",
  },
};
