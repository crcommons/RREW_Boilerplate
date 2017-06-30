module.exports = {
  closeAllLots() {
    return {
      type: 'CLOSE ALL LOTS',
    };
  },
  openAllLots() {
    return {
      type: 'OPEN ALL LOTS',
    };
  },
  updateLotStatus(lotName, status) {
    return {
      type: 'UPDATE LOT STATUS',
      payload: {
        lotName,
        status,
      },
    };
  },
};
