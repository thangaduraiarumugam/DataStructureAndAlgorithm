  function getFirstReoccuringCharacter(items) {
    let tempItems = {};
    for (let i = 0; i < items.length; i++) {
      let currentItem = tempItems[items[i]];
      if (currentItem !==undefined) {
        return items[i];
      } else {
        tempItems[items[i]] =i;
      }
      
    }
    return -1;
  }

console.log(getFirstReoccuringCharacter([1, 2, 3, 4, 5, 2]));
