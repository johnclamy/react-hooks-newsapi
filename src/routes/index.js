import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import PropTypes from 'prop-types';

import HomePage from '../app/pages/home';
import AboutPage from '../app/pages/about';
import SingleArticlePage from '../features/articles/SingleArticlePage';

export const HOME = '/';
export const ABOUT = '/about';

export default function Routes({ children }) {
  return (
    <Router>
      {children}
      <Switch>
        <Route exact path={HOME} component={HomePage} />
        <Route path={ABOUT} component={AboutPage} />
        <Route path="/articles/:articleId" component={SingleArticlePage} />
      </Switch>
    </Router>
  );
}

Routes.propTypes = {
  children: PropTypes.node,
};
