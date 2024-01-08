## Floor Plan Coding Assessment

This is a React Frontend Application. Used React JS framework and material UI library to develop the application.

Deployed the application on vercel.

**Link to the website**: https://floor-plan-coding-assessment.vercel.app/

The repository has a src folder that includes App.js, dataset.json and other component files:

**App.js** - Includes functions from all component files and code for Table structure and declartion for rows, columns, headers and body of the table. Also includes functions toggelDiode and toggleUnmask for changing the color of cells in diode(to blue) and unmask(all similar product names cells to yellow) columns when clicked.

**Data.js** - To load the json data and adding color as new key assigning a randomcolor to each item type.

**Arrange.js** - The loaded json data is rearranged such that no two similar products are adjacent to each other.

**Blocks.js** - This has functions rendering for Tape-in DB view, I/Os and Misc Blocks.

**Tablecomponents.js** - This has components for custom table cells i.e CustomTableCell for grid and RU columns,  CustomProdTableCell for product columns, VerticalColumns for headers, CustomNewTableCell for diode and unmask columns.

**Functions.js** - Has function for styling grid columns.
