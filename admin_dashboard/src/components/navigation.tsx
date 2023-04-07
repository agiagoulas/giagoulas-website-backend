import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import IconButton from "@mui/material/IconButton";
import RefreshIcon from "@mui/icons-material/Refresh";

export default function Navigation() {
  return (
    <AppBar position="static" color="primary">
      <Toolbar>
        <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
          Giagoulas Photography Admin Dashboard
        </Typography>
        <IconButton
          size="large"
          edge="start"
          color="inherit"
          aria-label="rebuild"
        >
          <Typography variant="button" sx={{ mr: 1 }}>
            Trigger Frontend Build
          </Typography>
          <RefreshIcon />
        </IconButton>
      </Toolbar>
    </AppBar>
  );
}
