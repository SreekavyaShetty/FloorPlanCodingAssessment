import jsonData from './dataset.json';



// to assign some random color to each product
const getRandomColor = () => {
    // Generate random values for R, G, and B in the light color range
    const r = Math.floor(Math.random() * 128) + 100; 
    const g = Math.floor(Math.random() * 128) + 100; 
    const b = Math.floor(Math.random() * 128) + 100; 
  
    // Convert RGB values to hexadecimal format
    const color = `#${r.toString(16)}${g.toString(16)}${b.toString(16)}`;
  
    return color;
  };
  
  // Adding rcolor as key to all items inthe existing json data
const newData = jsonData.map((item) => ({
    ...item,
    rcolor: getRandomColor(),
  }));
  
//   console.log(newData);
//   export const xdata = newData


// based on the repeat value the products are added as new items.
  const processData = () => {
    const finalData = [];
  
    newData.forEach(item => {
      const count = item.repeat ;
      for (let i = 0; i < count; i++) {
        finalData.push({ ...item }); 
      }
    });
    return finalData;

  };
  
    // console.log(processData());

export default processData;

// export const rdata = processData();
  

  
