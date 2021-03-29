import PropTypes from 'prop-types';
import { Alert } from 'react-bootstrap';

export default function PageAlert({ children }) {
  return (
    <Alert className="lead text-center" variant="warning">
      {children}
    </Alert>
  );
}

PageAlert.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]),
};
