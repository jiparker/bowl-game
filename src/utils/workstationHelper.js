const workstationHelper = () => {
  return {
    update: (workstations, currentWorkstationId, newWorkstation) => {
      return workstations.map((item, index) => {
        if (index !== currentWorkstationId) {
          return item;
        }
        return {
          ...item,
          ...newWorkstation
        };
      });
    },
    shuffle: (array) => {
      let i = array.length,
        j = 0,
        temp;

      while (i--) {
        j = Math.floor(Math.random() * (i + 1));
        temp = array[i];
        array[i] = array[j];
        array[j] = temp;
      }
      return array;
    },
    getRandomDiceRoll: () => {
      return Math.floor(Math.random() * (6)) + 1;
    }
  };
};

export default workstationHelper;
