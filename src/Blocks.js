import React from 'react';
import Typography from '@mui/material/Typography';

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
      <Typography variant="h8" sx={{
        width: '628px',
        height: '0',
        padding: '0',
        textAlign: 'center',
        marginLeft: '332px',
        borderLeft: '1px solid black',
        borderRight: '1px solid black',
        borderBottom: '1px solid black',
      }}>MISC Block</Typography>
  
  );
};
