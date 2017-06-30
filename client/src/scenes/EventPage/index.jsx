import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
// import { updateEvent, createEvent } from '../actions';

require('./styles.css');

class EventPage extends Component {

  constructor({ event }) {
    super();
    this.state = {
      title: event.title,
      description: event.description,
      start_time: event.start_time || new Date(new Date()).setHours(new Date().getHours() + 3),
      end_time: event.end_time || new Date(new Date()).setHours(new Date().getHours() + 5),
      location: {
        lng: event.location.longitude || null,
        lat: event.location.latitude || null,
      },
      creator: event.creator || 'John Doe',
    };
  }

  render() {
    return (
      <div>NEED TO INSERT COMPONENTS FOR LMap(Container?) Calendar, EventForm</div>
    );
  }
}

EventPage.propTypes = {
  event: PropTypes.shape({
    title: PropTypes.string.isRequired,
    creator: PropTypes.string.isRequired,
    start_time: PropTypes.string.isRequired,
    end_time: PropTypes.string.isRequired,
    attendees: PropTypes.arrayOf(PropTypes.string).isRequired,
    location: PropTypes.objectOf(PropTypes.string),
    _id: PropTypes.string.isRequired,
  }),
  history: PropTypes.object.isRequired,
};

EventPage.defaultProps = {
  event: {
    title: '',
    creator: '',
    start_time: '',
    end_time: '',
    attendees: [],
    location: {
      latitude: '',
      longitude: '',
    },
  },
};

const mapStateToProps = ({ events }, { match } = null) => {
  if (match) return { event: events[match.params.id] };
  return {};
};

export default withRouter(connect(mapStateToProps)(EventPage));
