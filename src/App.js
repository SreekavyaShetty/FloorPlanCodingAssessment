import React, { useState, useEffect, useRef }  from 'react';
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper, Typography, Box, Button } from '@mui/material';
import { xdata} from './Arrange';

const VerticalText = ({ children }) => (
  <Typography
    variant="body1"
    align="center"
    sx={{
      writingMode: 'vertical-lr', // Vertical text, facing right
      whiteSpace: 'nowrap', // Avoid wrapping
      fontSize: '0.5rem',
      fontWeight: 'bold',
      
    }}
  >
    {children}
  </Typography>
);

const VerticalColumn = ({ children }) => (
  <TableCell align="center" sx={{ padding: '0',height: '0',borderLeft: 1, borderTop: 1, borderRight: 1, border:1, color: 'white', borderColor: 'black', fontWeight: 'bold'}}>
    <VerticalText>{children}</VerticalText>

  </TableCell>
);

const CustomTableCell = (props) => (
  <TableCell align="center" {...props} sx={{ padding: '0',height: '0', fontSize: '10px', border:1,fontSize: '0.6rem', borderColor: 'black', fontWeight: 'bold'}}/>
  
);

const CustomNewTableCell = ({ onClick, children, isActive, color }) => (
  <TableCell 
    align="center" 
    onClick={onClick} 
    sx={{ 
      border: 1, 
      padding: '0',
      height: '0',
      fontSize: '0.6rem',
      backgroundColor: isActive ? color : null,  // Color change on active state
    }}
  >
    {children}
  </TableCell>
);

const CustomProdTableCell = ({ children, rcolor, ...props }) => (
  
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
      backgroundColor: rcolor || 'inherit', // Use productData.color as background color
      // color: textColor,
    }}
   
  >
    {children}
  </TableCell>
);



const App = () => {
  // Create an array for rows
  const initialRows = new Array(40).fill(null).map((_, index) => ({
    id: index,
    grid: index < 20 ? '1' : '3',
    diode: false,
    unmask: false,
    ru: `${index}`,
    prod: '',
    place: '',
    prod2: '',
    ru2: `${index + 40}`,
    unmask2: false,
    diode2: false,
    grid2: (index+40) < 60  ? '2' : '4',
  }));

  const [rows, setRows] = useState(initialRows);

  const data = React.useMemo(()=> xdata, []); 

 // console.log(data[0]);
  
  useEffect(() => {
    // Assuming data is an array of product objects, and each product object has at least a 'product' key
    const updatedRows = rows.map((row, index) => {
      const productData = data[index % data.length]; 
      const productData2 = data[(index+40) % data.length]; // This will cycle through the products for each row
      return {
        ...row,
        prod: productData.product, // Assign product name to 'prod' (Product1) column
        prod2: productData2.product, // Assign product name to 'prod2' (Product2) column for rows 21-40
        prodColor: productData.rcolor,
        prodColor2: productData2.rcolor
      };
    });
    setRows(updatedRows);
}, []);

  const toggleDiode = (ru) => {
    setRows(rows.map(row => ({
      ...row, 
      diode: row.ru === ru ? !row.diode : false, 
      diode2: false
    })));
  };

  const toggleDiode2 = (ru2) => {
    setRows(rows.map(row => ({
      ...row, 
      diode2: row.ru2 === ru2 ? !row.diode2 : false,  
      diode: false
    })));
  };

  const [activeUnmaskProduct, setActiveUnmaskProduct] = useState(null);

  const toggleUnmask = (product) => {
    setActiveUnmaskProduct(activeUnmaskProduct === product ? null : product);
  };
  
  const toggleUnmask2 = (product) => {
    setActiveUnmaskProduct(activeUnmaskProduct === product ? null : product);
  };
  
  // To assign background and text colors to grid columns
  const getGridStyle = (gValue) => {
    switch (gValue) {
      case '1': return { backgroundColor: 'black', color: 'white' };
      case '2': return { backgroundColor: '#4d9900', color: 'white' };
      case '3': return { backgroundColor: '#336600', color: 'white' };
      case '4': return { backgroundColor: '#1aa3ff', color: 'black' };
    }
  };

  return (
    <Box>
    <TableContainer component={Paper}>
      <Typography variant="h6" align="center" style={{ display: 'flex', alignItems: 'center', 
    justifyContent: 'center', marginLeft: '279.5px', marginTop:'10px',height: '20px',width: `719px`, fontSize: '10px', borderLeft: '1px solid black', color: 'white',borderColor: 'black',borderTop: '1px solid black', borderRight: '1px solid black', borderBottom: '0', fontWeight: 'bold',backgroundColor: '#006699',}}>
        TAPE-IN DB VIEW
      </Typography>
      <Table aria-label="custom table" align = "center" sx={{ width: 'auto' }}> 
        <TableHead sx={{ backgroundColor: '#006699', color: 'white' }}>
        
          <TableRow>
            <VerticalColumn >Grid</VerticalColumn>
            <VerticalColumn>Diode</VerticalColumn>
            <VerticalColumn>Unmask</VerticalColumn>
            <VerticalColumn>RU#</VerticalColumn>
            <CustomTableCell colSpan={3} align="center" style={{ color: 'white' }}>Seat UUID</CustomTableCell>
            <VerticalColumn >RU#</VerticalColumn>
            <VerticalColumn>Unmask</VerticalColumn>
            <VerticalColumn>Diode</VerticalColumn>
            <VerticalColumn>Grid</VerticalColumn>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row, index) => (
            <>

              {index === 20 && (
                <TableRow key="midhalf">
                  <CustomTableCell colSpan={11}>MIDHALF</CustomTableCell>
                </TableRow>
              )}
              <TableRow key={row.id}>
                {(index === 0 || index === 20) && (
                  <CustomTableCell rowSpan={20} style={getGridStyle(row.grid)}>{row.grid}</CustomTableCell>
                )}
                
                <CustomNewTableCell isActive={row.diode}
                  onClick={() => toggleDiode(row.ru)} color="blue"
                >  </CustomNewTableCell>
                <CustomNewTableCell isActive={activeUnmaskProduct === row.prod}
                onClick={() => toggleUnmask(row.prod)} color="yellow"
                >  </CustomNewTableCell>
                <CustomTableCell>{row.ru}</CustomTableCell>
                
                <CustomProdTableCell rcolor={row.prodColor}>{row.prod}</CustomProdTableCell>
                <CustomTableCell style={{ width: '13px' }}>{row.place} </CustomTableCell>
            
                <CustomProdTableCell rcolor={row.prodColor2}>{row.prod2}</CustomProdTableCell>
                
                <CustomTableCell>{row.ru2}</CustomTableCell>
                <CustomNewTableCell isActive={activeUnmaskProduct === row.prod2}
                onClick={() => toggleUnmask2(row.prod2)} color="yellow"
                >  </CustomNewTableCell>
                <CustomNewTableCell isActive={row.diode2}
                  onClick={() => toggleDiode2(row.ru2)} color="blue"></CustomNewTableCell>
                {(index === 0 || index === 20) && (
                  <CustomTableCell rowSpan={20} style={getGridStyle(row.grid2)}>{row.grid2}</CustomTableCell>
                )}
              </TableRow>
            </>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
    {/* Attaching box for I/Os to the right of table */}
    <Box
        sx={{
          
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
        }}
      >
        <Typography variant="h8">I/Os</Typography>
      </Box>

      {/* Attaching box for MISC block at the bottom of table */}
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
    </Box>
    
    
    
  );
};

export default App;
