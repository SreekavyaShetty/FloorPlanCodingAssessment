import React from 'react';
import { TableCell, Typography } from '@mui/material';

export const VerticalText = ({ children }) => (
  <Typography
    variant="body1"
    align="center"
    sx={{
      writingMode: 'vertical-lr', //text facing right
      whiteSpace: 'nowrap', 
      fontSize: '0.5rem',
      fontWeight: 'bold',
    }}
  >
    {children}
  </Typography>
);

// custom cell for headers - grid, diode, unmask, rus
export const VerticalColumn = ({ children }) => (
  <TableCell align="center" sx={{ padding: '0', height: '0', borderLeft: 1, borderTop: 1, borderRight: 1, border: 1, color: 'white', borderColor: 'black' }}>
    <VerticalText>{children}</VerticalText>
  </TableCell>
);

export const CustomTableCell = (props) => (
  <TableCell align="center" {...props} 
  sx={{ 
    padding: '0', 
    height: '0', 
    fontSize: '10px', 
    border: 1, 
    fontSize: '0.6rem', 
    borderColor: 'black', 
    fontWeight: 'bold' }} />
);

// custom cell for Diode and unmask columns
export const CustomNewTableCell = ({ onClick, children, isActive, color }) => (
  <TableCell
    align="center"
    onClick={onClick}
    sx={{
      border: 1,
      padding: '0',
      height: '0',
      fontSize: '0.6rem',
      backgroundColor: isActive ? color : null,  // change color if active state
    }}
  >
    {children}
  </TableCell>
);

// custom cell for prod and prod2 columns
export const CustomProdTableCell = ({ children, rcolor, ...props }) => (
  <TableCell
    align="center"
    {...props}
    sx={{
      padding: '0',
      height: '0',
      borderLeft: 1,
      borderTop: 1,
      borderRight: 1,
      fontSize: '0.6rem',
      fontWeight: 'bold',
      border: 1,
      borderColor: 'black',
      width: '300px',
      backgroundColor: rcolor || 'inherit', // Using product.rcolor as background color
    }}
  >
    {children}
  </TableCell>
);
