import Home from '../views/pages/home';
import Detail from '../views/pages/detail';

const routes = {
  '/': Home,
  '/detail/:id': Detail,
};

export default routes;
