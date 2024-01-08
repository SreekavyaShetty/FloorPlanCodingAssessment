import jsonData from './dataset.json';

// Function to get a random light color
const getRandomColor = () => {
    // Generate random values for R, G, and B in the light color range
    const r = Math.floor(Math.random() * 128) + 100; 
    const g = Math.floor(Math.random() * 128) + 100; 
    const b = Math.floor(Math.random() * 128) + 100; 
  
    
    const color = `#${r.toString(16)}${g.toString(16)}${b.toString(16)}`;
  
    return color;
  };

// Add random color to each product
const dataWithColor = jsonData.map(item => ({
    ...item,
    rcolor: getRandomColor(),
}));

// modifying the final process data such that no two similar products are adjacent.
const rearrangeData = (data) => {
    let i4i5items = [];
    let other = [];
    let lastItem = {};

    // seperating i4 and i5 products items from all other
    data.forEach(item => {
        for (let i = 0; i < item.repeat; i++) {
        if (item.product === 'Core i4' || item.product === 'Core i5') {
            i4i5items.push(item);
        } else {
            other.push(item);
        }
    }
    });
    let l = i4i5items.length + other.length

    let rearranged = new Array(l).fill(null);

    // Helper function to find and remove the next suitable item
    const findNextItem = (items, lastItemName) => {
        for (let i = 0; i < l; i++) {
            if (items[i].product !== lastItemName) {
                return items.splice(i, 1)[0]; // Remove and return the item
            }
        }
        return null;
    };


    const filli4i5items = () => {
        let lastItem = {};
    
        const placeItem = (index) => {
            if (i4i5items.length > 0) {
                const nextItem = findNextItem(i4i5items, lastItem.product);
                if (nextItem) {
                    rearranged[index] = nextItem;
                    lastItem = nextItem;
                }
            }
        };
    
        for (let i = 0; i < 20; i++) {
            placeItem(i);
        }
        for (let i = 40; i < 60; i++) {
            placeItem(i);
        }
    };

    // Fill the remaining spots
    const fillOther = () => {
        rearranged.forEach((item, index) => {
            if (!item) {
                const nextItem = findNextItem(other, lastItem.product);
                if (nextItem) {
                    rearranged[index] = nextItem;
                    lastItem = nextItem;
                }
            } else {
                lastItem = item;
            }
        });
    };

    filli4i5items();
    fillOther();

    return rearranged;
};

export const xdata = rearrangeData(dataWithColor);
