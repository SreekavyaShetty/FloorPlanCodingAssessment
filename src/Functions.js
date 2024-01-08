// To assign background and text colors to grid columns
  export const gridStyle = (gValue) => {
    switch (gValue) {
      case '1': return { backgroundColor: 'black', color: 'white' };
      case '2': return { backgroundColor: '#4d9900', color: 'white' };
      case '3': return { backgroundColor: '#336600', color: 'white' };
      case '4': return { backgroundColor: '#1aa3ff', color: 'black' };
      default: return {};
    }
  };
