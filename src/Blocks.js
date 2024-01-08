import React from 'react';
import Typography from '@mui/material/Typography';
import { Box } from '@mui/material';

// Attaching Tape block at the top of table 
export const TapeBlock = () => {
  return (
    <Typography variant="h6" align="center" style={{ display: 'flex', 
    alignItems: 'center', 
    justifyContent: 'center', 
    marginLeft: '279.5px', 
    marginTop:'10px',
    height: '20px',
    width: `719px`, 
    fontSize: '10px', 
    borderLeft: '1px solid black', 
    color: 'white',
    borderColor: 'black',
    borderTop: '1px solid black', 
    borderRight: '1px solid black', 
    borderBottom: '0', 
    fontWeight: 'bold',
    backgroundColor: '#006699',
    }}>
    TAPE-IN DB VIEW
    </Typography>
  );
};

export const IOsBlock = () => {
  return (
        <Typography variant="h8" sx={{
          
          width: '30px', 
          height: '602px',
          position: 'absolute',
          right: '220px',
          top: '65px',
          textAlign: 'center',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          border: 1,
        }}>I/Os</Typography>
      
  );
};

// Attaching MISC block at the bottom of table 
export const MiscBlock = () => {
  return (
    <Box
      sx={{
        width: '628px', 
        height: '0', 
        padding: '0',
        textAlign: 'center',
        marginLeft: '332px',
        borderLeft: '1px solid black',
        borderRight: '1px solid black',
        borderBottom: '1px solid black', 
      }}
    >
      <Typography variant="h8">MISC Block</Typography>
    </Box>
  );
};
