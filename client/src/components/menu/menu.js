import * as React from 'react';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import List from '@mui/material/List';
import Divider from '@mui/material/Divider';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import MenuIcon from '@mui/icons-material/Menu'
import menuImg from '../../img/cfa38f2be19db0aa0743b24e361018c6.jpg'
export default function TemporaryDrawer() {
  const [state, setState] = React.useState({
    left: false
  });

  const toggleDrawer = (anchor, open) => (event) => {
    setState({ ...state, [anchor]: open });
  };

  const list = (anchor) => (
    <Box
      role="presentation"
      onClick={toggleDrawer(anchor, false)}
    >
      <Box
        component="img"
        style = {{marginTop:"10px"}}
        sx={{
          height: 233,
          width: 350,
          maxHeight: { xs: 170, md: 167 },
          maxWidth: { xs: 230, md: 250 },
        }}
        alt="Labour app"
        src= {menuImg}
      />
      <Divider />
      <List>
        {['Why this?','Volunteer Programmes', 'Contact us', 'About us'].map((text, index) => (
          <ListItem  button key={text}>
            <ListItemText dense primary={text} />
          </ListItem>
        ))}
      </List>
    </Box>
  );

  return (
    <div>
      {['left'].map((anchor) => (
        <React.Fragment key={anchor}>
          <MenuIcon onClick={toggleDrawer(anchor, true)}/>
          <Drawer
            anchor={anchor}
            open={state[anchor]}
            onClose={toggleDrawer(anchor, false)}
          >
            {list(anchor)}
          </Drawer>
        </React.Fragment>
      ))}
    </div>
  );
}