import { PropTypes } from 'react';

const getMessageStatus = (status) => {
  const STATUS_MESSAGE = {
    1: 'To Be Sent',
    2: 'Pushed',
    4: 'Sent',
    8: 'Delivered',
    16: 'Replied',
    32: 'Error',
    64: 'Unreachable',
  };
  return STATUS_MESSAGE[status];
};

const messageDetailPropType = PropTypes.shape({
  DoctorName: PropTypes.string.isRequired,
  PatientId: PropTypes.string.isRequired,
  Address: PropTypes.string.isRequired,
  Id: PropTypes.string.isRequired,
  NHI: PropTypes.string.isRequired,
  PatientName: PropTypes.string.isRequired,
  MobileNumber: PropTypes.string.isRequired,
  HomeNumber: PropTypes.string.isRequired,
  Body: PropTypes.string.isRequired,
  SentDateTime: PropTypes.string.isRequired,
  ReceivedDateTime: PropTypes.string.isRequired,
  Status: PropTypes.number.isRequired,
  AddOn: PropTypes.string.isRequired,
});

const messagePropType = PropTypes.shape({
  Id: PropTypes.string.isRequired,
  NHI: PropTypes.string.isRequired,
  PatientName: PropTypes.string.isRequired,
  MobileNumber: PropTypes.string.isRequired,
  Body: PropTypes.string.isRequired,
  SentDateTime: PropTypes.string.isRequired,
  ReceivedDateTime: PropTypes.string.isRequired,
  Status: PropTypes.number.isRequired,
  AddOn: PropTypes.string.isRequired,
});

const filterPropType = PropTypes.shape({
  colName: PropTypes.string.isRequired,
  ascending: PropTypes.bool.isRequired,
});

export {
  getMessageStatus,
  messagePropType,
  messageDetailPropType,
  filterPropType,
};

