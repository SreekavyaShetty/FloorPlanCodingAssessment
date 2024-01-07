import jsonData from './dataset.json';


// to assign some random color to each product
const getRandomColor = () => {
    const letters = '0123456789ABCDEF';
    let color = '#';
    for (let i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
    }
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
  

  