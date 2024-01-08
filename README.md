## Floor Plan Coding Assessment

This is a React Frontend Application. Used React JS framework and material UI library to develop the application.

Deployed the application on vercel.

**Link to the website**: https://floor-plan-coding-assessment.vercel.app/

//As per the logic applied on refreshing the website, each time it assigns a random color to each product type in the product columns. 

The repository has a src folder that includes App.js, dataset.json and other required component files:

**App.js** - Includes functions from all component files and code for Table structure and declartion for rows, columns, headers and body of the table. Also includes functions toggelDiode and toggleUnmask for changing the color of cells in diode(to blue) and unmask(all similar product names cells to yellow) columns when clicked.

**Data.js** - To load the json data and adding color as new key assigning a randomcolor to each item type.

**Arrange.js** - The loaded json data is rearranged such that no two similar products are adjacent to each other in the table and logic for placing Corei4 and Corei5 products in grids 1 and 2.

**Blocks.js** - Has functions for rendering Tape-in DB view, I/Os and Misc Blocks.

**Tablecomponents.js** - This has components for custom table cells i.e CustomTableCell for grid and RU columns,  CustomProdTableCell for product columns, VerticalColumns for headers, CustomNewTableCell for diode and unmask columns.

**Functions.js** - For styling grid columns.
