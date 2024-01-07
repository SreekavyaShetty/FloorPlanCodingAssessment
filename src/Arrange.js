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

    // Helper function to find and remove the next suitable item
    const findNextItem = (items, lastItemName) => {
        for (let i = 0; i < items.length; i++) {
            if (items[i].product !== lastItemName) {
                return items.splice(i, 1)[0]; // Remove and return the item
            }
        }
        return null;
    };

    // Place Corei4 and Corei5 items in specified ranges
    const filli4i5items = () => {
        for (let i = 0; i < 20; i++) {
            if (i4i5items.length > 0) {
                rearranged[i] = i4i5items.shift();
            }
        }
        for (let i = 40; i < 60; i++) {
            if (i4i5items.length > 0) {
                rearranged[i] = i4i5items.shift();
            }
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

export const xdata = rearrangeData(data);
