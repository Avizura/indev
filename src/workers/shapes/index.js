import PropTypes from 'prop-types';

export const workerShape = PropTypes.shape({
  id: PropTypes.number,
  first_name: PropTypes.string,
  last_name: PropTypes.string,
  post: PropTypes.number,
  birth_date: PropTypes.string,
  description: PropTypes.string
});
