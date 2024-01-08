import processData from './Data';

const data = processData();

// modifying the final process data such that no two similar products are adjacent.
const rearrangeData = (data) => {
    let i4i5items = [];
    let other = [];
    let rearranged = new Array(data.length).fill(null);
    let lastItem = {};

    // seperating i4 and i5 products items from all other
    data.forEach(item => {
        if (item.product === 'Core i4' || item.product === 'Core i5') {
            i4i5items.push(item);
        } else {
            other.push(item);
        }
    });

    // function to find and remove the next suitable item
    const findNextItem = (items, lastItemName) => {
        for (let i = 0; i < items.length; i++) {
            if (items[i].product !== lastItemName) {
                return items.splice(i, 1)[0]; // Remove and return the item
            }
        }
        return null;
    };

    // filling Corei4 and Corei5 items in specified grids 1 and 2
    const filli4i5 = () => {
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

    filli4i5();
    fillOther();

    return rearranged;
};

export const xdata = rearrangeData(data);
