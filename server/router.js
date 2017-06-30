const router = require('express').Router();
const { parking, event } = require('./controllers');

router.get('/event/:event_id', event.getEvent);
router.post('/event', event.createEvent);
router.put('/event/:event_id', event.updateEvent);
router.delete('/event/:event_id', event.deleteEvent);

router.get('/parking', parking.getStatuses);
router.put('/parking/open', parking.openAll);
router.put('/parking/close', parking.closeAll);
router.put('/parking/:lot_id', parking.updateLot);

module.exports = router;
