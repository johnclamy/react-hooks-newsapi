import { Container } from 'react-bootstrap';
import PropTypes from 'prop-types';

const Layout = ({ children }) => <Container>{children}</Container>;

Layout.propTypes = {
  children: PropTypes.node,
};

export default Layout;
