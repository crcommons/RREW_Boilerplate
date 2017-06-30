module.exports = {
  deleteEvent(eventId) {
    return {
      type: 'DELETE EVENT',
      payload: eventId,
    };
  },
  createEvent(event) {
    return {
      type: 'CREATE EVENT',
      payload: event,
    };
  },
  updateEvent(event) {
    return {
      type: 'UPDATE EVENT',
      payload: event,
    };
  },
};
