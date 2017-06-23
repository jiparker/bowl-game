const ballFactory = () => {

  return {
    buildBallObjects: function(size) {
      size = size > 20 ? 20 : size;

      let ballObjects = [];
      let offBallCount = 20 - size;

      for (let i = 0; i < offBallCount; i++) {
        ballObjects[i] = { clazzName: 'off' };
      }

      for (let i = offBallCount; i < 20; i++) {
        ballObjects[i] = { clazzName: 'on' };
      }

      ballObjects = ballObjects.map((item, index) => {
        if (index == 0) {
          return { clazzName: `fixed ${item.clazzName}` };
        } else {
          return { clazzName: `flex-item ${item.clazzName}` };
        }
      });

      return ballObjects;
    }
  };
};

export default ballFactory;
