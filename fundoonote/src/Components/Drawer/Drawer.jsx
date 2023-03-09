import * as React from 'react';
import { styled, useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import MuiDrawer from '@mui/material/Drawer';
import List from '@mui/material/List';
import CssBaseline from '@mui/material/CssBaseline';
import IconButton from '@mui/material/IconButton';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import LightbulbOutlinedIcon from '@mui/icons-material/LightbulbOutlined';
import NotificationsOutlinedIcon from '@mui/icons-material/NotificationsOutlined';
import EditOutlinedIcon from '@mui/icons-material/EditOutlined';
import ArchiveOutlinedIcon from '@mui/icons-material/ArchiveOutlined';
import DeleteOutlinedIcon from '@mui/icons-material/DeleteOutlined';

const drawerWidth = 260;

const openedMixin = (theme) => ({
  width: drawerWidth,
  marginTop: '10vh',
  boxShadow: '0px 0px 5px grey',
  borderTop: '0px solid white',
  transition: theme.transitions.create('width', {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.enteringScreen,
  }),
  overflowX: 'hidden',
});

const closedMixin = (theme) => ({
  border: '0px solid white',
  marginTop: '10vh',
  transition: theme.transitions.create('width', {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  overflowX: 'hidden',
  width: `calc(${theme.spacing(2)} + 0px)`, [theme.breakpoints.up('sm')]: { width: `calc(${theme.spacing(8)} + 1px)`, },
});


const Drawer = styled(MuiDrawer, { shouldForwardProp: (prop) => prop !== 'open' })(
  ({ theme, open }) => ({
    width: drawerWidth,
    flexShrink: 0,
    whiteSpace: 'nowrap',
    boxSizing: 'border-box',
    ...(open && { ...openedMixin(theme), '& .MuiDrawer-paper': openedMixin(theme), }),
    ...(!open && { ...closedMixin(theme), '& .MuiDrawer-paper': closedMixin(theme), }),
  }),
);

export default function MiniDrawer(props) {
  const theme = useTheme();
  const [open, setOpen] = React.useState(false);

  const handleDrawerOpen = () => {
    setOpen(!open);
  };

  const setText = (label) => {
    props.selectText(label)
  }

  return (
    <Box sx={{ display: 'flex' }}>
      <CssBaseline />
      <Drawer variant="permanent" open={props.headerState}>

        <List>
          <ListItem disablePadding sx={{ display: 'block' }} onClick={()=>setText("Notes")}>
            <ListItemButton style={{ paddingLeft: 10, height: 50 }}>
              <IconButton size='large' style={{ marginRight: 15 }}>
                <LightbulbOutlinedIcon />
              </IconButton>
              <ListItemText primary="Notes" style={{ borderRadius: 5 }} />
            </ListItemButton>
          </ListItem>

          <ListItem disablePadding sx={{ display: 'block' }}onClick={()=>setText("Remainder")}>
            <ListItemButton style={{ paddingLeft: 10, height: 50 }}>
              <IconButton size='large' style={{ marginRight: 15 }}>
                <NotificationsOutlinedIcon />
              </IconButton>
              <ListItemText primary="Remainder" />
            </ListItemButton>
          </ListItem>

          <ListItem disablePadding sx={{ display: 'block' }}onClick={()=>setText("Edit")}>
            <ListItemButton style={{ paddingLeft: 10, height: 50 }}>
              <IconButton size='large' style={{ marginRight: 15 }}>
                <EditOutlinedIcon />
              </IconButton>
              <ListItemText primary="Edit Labels" />
            </ListItemButton>
          </ListItem>

          <ListItem disablePadding sx={{ display: 'block' }}onClick={()=>setText("Archive")}>
            <ListItemButton style={{ paddingLeft: 10, height: 50 }}>
              <IconButton size='large' style={{ marginRight: 15 }}>
                <ArchiveOutlinedIcon />
              </IconButton>
              <ListItemText primary="Archive" />
            </ListItemButton>
          </ListItem>

          <ListItem disablePadding sx={{ display: 'block' }}onClick={()=>setText("Trash")}>
            <ListItemButton style={{ paddingLeft: 10, height: 50 }}>
              <IconButton size='large' style={{ marginRight: 15 }}>
                <DeleteOutlinedIcon />
              </IconButton>
              <ListItemText primary="Trash" />
            </ListItemButton>
          </ListItem>
        </List>
      </Drawer>
    </Box>
  );
}