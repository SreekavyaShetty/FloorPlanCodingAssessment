import React, { useState, useEffect, useRef }  from 'react';
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper, Typography, Box, Button } from '@mui/material';
import { xdata} from './Arrange';
import { IOsBlock, MiscBlock } from './Blocks';
import { gridStyle} from './Functions';
import { VerticalColumn, VerticalText, CustomTableCell, CustomNewTableCell, CustomProdTableCell } from './Tablecomponents';



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

  // changing only particular row cells of diode and diode2 columns when clicked and reset all other.

  const toggleDiode = (x) => {
    setRows(rows.map(row => (
      x >= 0 && x < 40
        ? {
            ...row,
            diode: row.ru === x ? !row.diode : false,
            diode2: false
          }
        : {
            ...row,
            diode2: row.ru2 === x ? !row.diode2 : false,
            diode: false
          }
    )));
  };
  
  // unmask columns to select all cells having same product value.
  const [activeUnmaskProduct, setActiveUnmaskProduct] = useState(null);

  const toggleUnmask = (product) => {
    setActiveUnmaskProduct(activeUnmaskProduct === product ? null : product);
  };
  

  return (
    <Box>
    <TableContainer >
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
                  <CustomTableCell rowSpan={20} style={gridStyle(row.grid)}><VerticalText>{row.grid}</VerticalText></CustomTableCell>
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
                onClick={() => toggleUnmask(row.prod2)} color="yellow"
                >  </CustomNewTableCell>
                <CustomNewTableCell isActive={row.diode2}
                  onClick={() => toggleDiode(row.ru2)} color="blue"></CustomNewTableCell>
                {(index === 0 || index === 20) && (
                  <CustomTableCell rowSpan={20} style={gridStyle(row.grid2)}><VerticalText>{row.grid2}</VerticalText></CustomTableCell>
                )}
              </TableRow>
            </>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
    {/* Attaching box for I/Os to the right of table */}
    < I0sBlock />

    {/* Attaching box for MISC block at the bottom of table */}
    < MiscBlock />
    </Box>
    
    
    
  );
};

export default App;

