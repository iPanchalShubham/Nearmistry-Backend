import * as React from 'react';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import Link from '@mui/material/Link';

function Copyright() {
  return (
    <Typography variant="body2" color="#ffffff">
      {'Copyright © '}
      <Link color="inherit" >
        Hier
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}

export default function StickyFooter() {
  return (
        <Container component = "footer" maxWidth ="full" 
        style = {{backgroundColor:"#3f51b5",padding:"17px 0",position:"sticky",display:"flex",flexFlow:"column",alignItems:"center",marginTop:"10px"}}>
          <Typography variant="body1" color = "#ffffff">
            Made with ❤️ for a better world.
          </Typography>
          <Copyright />
        </Container>
  );
}