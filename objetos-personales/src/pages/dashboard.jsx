import React, { useState } from 'react';
import ReactDOM from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import '../index.css'
import { List, ListItem, ListItemButton, ListItemIcon, ListItemText,  Menu, MenuItem, Typography, Collapse  } from '@mui/material';
import { ExpandLess, ExpandMore } from '@mui/icons-material';
import Layout from '../pages/layout';
import Registrar from '../pages/registrar';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import CssBaseline from '@mui/material/CssBaseline';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Divider from '@mui/material/Divider';
import InboxIcon from '@mui/icons-material/MoveToInbox';
import MailIcon from '@mui/icons-material/Mail';
import SettingsIcon from '@mui/icons-material/Settings';
import MonitorIcon from '@mui/icons-material/Monitor';
import FolderOpenIcon from '@mui/icons-material/FolderOpen';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import FormControl from '@mui/material/FormControl';
import InputLabel from '@mui/material/InputLabel';
import OutlinedInput from '@mui/material/OutlinedInput';
import InputAdornment from '@mui/material/InputAdornment';
import SearchIcon from '@mui/icons-material/Search';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

const drawerWidth = 240;

const tema = createTheme({
  status: {
    danger: '#e53e3e',
  },
  palette: {
    primary: {
      main: '#ffffff',
      darker: '#3f57c5',
    },
    neutral: {
      main: '#64748B',
      contrastText: '#000000',
    },
    background: {
      default: '#fbfafa'
    }
  },
});

function createData(name, area, fruit, status, btn) {
  return { name, area, fruit, status, btn };
}

const rows = [
  createData('Aspersor 1', 'Area Norte', 'Rabano', 'Encendido', 'Boton'),
  createData('Aspersor 2', 'Area Norte', 'Rabano', 'Encendido', 'Boton'),
  createData('Aspersor 3', 'Area Norte', 'Rabano', 'Encendido', 'Boton'),
];

export default function PermanentDrawerLeft() {
  const [open, setOpen] = useState(false);
  const handleOpen = () => {
    setOpen(!open);
  };

  return (
    <ThemeProvider theme={tema}>
    
    <Box sx={{ display: 'flex', bgcolor: 'red' }}>
      <CssBaseline />
      <AppBar
        position="fixed"
        sx={{ width: `calc(100% - ${drawerWidth}px)`, ml: `${drawerWidth}px` }}
      >
        <ThemeProvider theme={tema}>
          <Toolbar sx={{ bgcolor: 'primary.main' }}>
            <Typography
              variant="h6"
              noWrap
              component="div"
              sx={{ color: '#4763E4', fontWeight: 600 }}
            >
              Menu principal
            </Typography>
          </Toolbar>
        </ThemeProvider>
      </AppBar>
      <Drawer
        sx={{
          width: drawerWidth,
          flexShrink: 0,
          '& .MuiDrawer-paper': {
            width: drawerWidth,
            boxSizing: 'border-box',
            bgcolor: '#0E1B6B',
          },
        }}
        variant="permanent"
        anchor="left"
      >
        <Toolbar />
        <Divider />
        <List>
          {['Monitoreo'].map((text, index) => (
            <ListItem key={text} disablePadding>
              <ListItemButton>
                <ListItemIcon
                  style={{ color: 'white', fontSize: '30px' }}
                >
                  {index % 2 === 0 ? (
                    <MonitorIcon fontSize="inherit" />
                  ) : (
                    <MailIcon fontSize="inherit" />
                  )}
                </ListItemIcon>
                <ListItemText
                  primary={
                    <Typography style={{ fontSize: '22px', color: 'white' }}>
                      {text}
                    </Typography>
                  }
                />
              </ListItemButton>
            </ListItem>
          ))}
        </List>
        <Divider />
        <List sx={{ textAlign: 'center' }}>
          <ListItemButton onClick={handleOpen}>
            <ListItemIcon
              style={{ color: 'white', fontSize: '30px', opacity: 0.5 }}
            >
              <FolderOpenIcon fontSize="inherit" />
            </ListItemIcon>
            <ListItemText
              primary={
                <Typography style={{ fontSize: '22px', color: 'white', opacity: 0.5 }}>
                  Frutos
                </Typography>
              }
            />
          </ListItemButton>
          <Collapse in={open} timeout="auto" unmountOnExit>
             <List component="div" disablePadding>
              <ListItem key="fruto1" disablePadding>
                <ListItemButton sx={{ fontSize: '22px', color: 'white', opacity: 0.5 }}>
                  <ListItemText primary="Fruto 1" />
                </ListItemButton>
              </ListItem>
               <ListItem key="fruto2" disablePadding>
                <ListItemButton sx={{ fontSize: '22px', color: 'white', opacity: 0.5 }}>
                  <ListItemText primary="Fruto 2" />
                 </ListItemButton>
              </ListItem>
             </List>
          </Collapse>
        </List>
        <Divider />
        <List>
          {['Opciones'].map((text, index) => (
            <ListItem key={text} disablePadding>
              <ListItemButton>
              <ListItemIcon style={{ color: 'white' , fontSize: '30px', opacity:0.5  }}>
                  {index % 2 === 0 ? <SettingsIcon fontSize="inherit"/> : <MailIcon />}
                </ListItemIcon>
                <ListItemText primary={<Typography style={{ fontSize: '22px', color: 'white', opacity:0.5 }}>{text}</Typography>} />
              </ListItemButton>
            </ListItem>
          ))}
        </List>
      </Drawer>
      <Box
        component="main"
        sx={{ flexGrow: 1, bgcolor: 'background.default', p: 3 }}
      >
        <Toolbar />
        <Typography variant="h3" fontWeight="bold">
          Monitor
        </Typography>
        
        <FormControl fullWidth sx={{ m: 1, width: '60%' }}>
        <InputLabel htmlFor="outlined-adornment-amount">Buscar un sensor</InputLabel>
            <OutlinedInput
              id="outlined-adornment-amount"
              startAdornment={<InputAdornment position="start"><SearchIcon /></InputAdornment>}
              label="Amount"
            />
      </FormControl>
      <Box sx={{ 
    width: '99%',
    backgroundColor: 'white',
    margin: '0 auto',
    display: 'flex',
    minHeight: '100vh',}}>
      <Box sx={{backgroundColor: 'white', width: '100%'}}>
      <TableContainer component={Paper}>
      <Table sx={{ Width: '100%' }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>Nombre</TableCell>
            <TableCell align="right">Localizacion</TableCell>
            <TableCell align="right">Fruto asignado</TableCell>
            <TableCell align="right">Estatus</TableCell>
            <TableCell align="right">Acciones</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow
              key={row.name}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell component="th" scope="row">
                {row.name}
              </TableCell>
              <TableCell align="right">{row.area}</TableCell>
              <TableCell align="right">{row.fruit}</TableCell>
              <TableCell align="right">{row.status}</TableCell>
              <TableCell align="right">{row.btn}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
    </Box>
  </Box>
      </Box>
    </Box>
    </ThemeProvider>
  );
}