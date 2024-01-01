import React, { useEffect } from "react";
import { DarkMode, LightMode } from "@mui/icons-material";
import {
    AppBar as MUIAppBar,
    Toolbar,
    IconButton,
    Typography,
    Button,
    Box,
    MenuItem,
    //   InputBase,
    OutlinedInput,
    ListItemIcon,
} from "@mui/material";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import LoginIcon from "@mui/icons-material/Login";
import StorefrontIcon from "@mui/icons-material/Storefront";
import SearchIcon from "@mui/icons-material/Search";
import Logout from "@mui/icons-material/Logout";
import { useNavigate } from "react-router-dom";
import { toastError, toastSuccess } from "../../utils/toastUtils.js";
import { store } from "../../../../redux/store.js";
import { logout } from "../../../users/userSlice.js";
import { changeMode } from "../../themes/modeSlice.js";
import { useAppSelector } from "../../../../redux/hooks.js";
const AppBar = () => {
    const {userInfo} = useAppSelector((store) => store.user);
    const navigate = useNavigate();
    console.log("this is userInfo in app bar", userInfo);
    const mode = store.getState().mode.mode;
    const [searchQuery, setSearchQuery] = React.useState<any>([]);

    const handleLogin = () => {
        navigate("/login");
    };

    const handleLogout = async () => {
        try {
            store.dispatch(logout());
            toastSuccess("User logged out successfully");
        } catch (err) {
            toastError((err as Error).message);
        }
    };

    const handleSearch = (query: any) => {
        console.log("this is query", query)
        const handleSearchProduct = async () => {
            try {
                const search = "d";
                navigate("/store/search", { state: search });
            } catch (error) {
                console.error("Error fetching cart:", error);
            }
        };
        handleSearchProduct();
    };

    // useEffect(() => {}, [userInfo]);

    const handleSearchChange = (event: any) => {
        setSearchQuery(event.target.value);
    };

    return (
        <MUIAppBar position="static">
            <Toolbar sx={{ display: "flex", justifyContent: "space-between" }}>
                <Box
                    onClick={() => navigate("/store")}
                    sx={{
                        display: "flex",
                        alignItems: "center",
                        cursor: "pointer",
                    }}
                >
                    <StorefrontIcon sx={{ marginRight: 2 }} />
                    <Typography
                        variant="h6"
                        component="div"
                        sx={{ marginRight: 2 }}
                    >
                        Event Stream
                    </Typography>
                </Box>
                <Box sx={{ display: "flex", alignItems: "center" }}>
                    <OutlinedInput
                        placeholder="Search..."
                        value={searchQuery}
                        onChange={handleSearchChange}
                        startAdornment={
                            <IconButton
                                color="inherit"
                                onClick={() => handleSearch(searchQuery)}
                                edge="start"
                            >
                                <SearchIcon />
                            </IconButton>
                        }
                        sx={{
                            width: "250px", // Adjust the width as needed
                            marginLeft: 2,
                            borderRadius: "20px", // Adjust the border radius for rounded corners
                            "&.Mui-focused": {
                                borderColor: "rgba(0, 0, 0, 0.7)", // Adjust the focused border color
                            },
                        }}
                    />
                    <IconButton
                        color="inherit"
                        onClick={() => store.dispatch(changeMode())}
                        sx={{ marginLeft: 1 }}
                    >
                        {mode === "dark" ? <LightMode /> : <DarkMode />}
                    </IconButton>
                    <ShoppingCartIcon />

                    {!userInfo && (
                        <Button
                            color="inherit"
                            startIcon={<LoginIcon />}
                            onClick={handleLogin}
                        >
                            Login
                        </Button>
                    )}

                    {userInfo && (
                        <Box sx={{ flexGrow: 0 }}>
                                <MenuItem key={"email"} disabled>
                                </MenuItem>
                                <MenuItem key={"logOut"} onClick={handleLogout}>
                                    <ListItemIcon>
                                        <Logout fontSize="small" />
                                    </ListItemIcon>
                                    Logout
                                </MenuItem>
                        </Box>
                    )}
                </Box>
            </Toolbar>
        </MUIAppBar>
    );
};

export default AppBar;
