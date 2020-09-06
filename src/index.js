import 'babel-polyfill';
import express from 'express';
import renderer from './helpers/renderer';
import createStore from './helpers/createStore';
import { matchRoutes } from 'react-router-config';
import Routes from './client/Routes';

const app = express();
app.use(express.static('public'));
app.get('*', (req, res) => {
  const store = createStore(req);

  const promises = matchRoutes(Routes, req.path).map(({ route }) => {
    return route.loadData ? route.loadData(store) : null;
  });

  Promise.all(promises).then(() => {
    const context = {};
    const content = renderer(req, store, context);
    if(context.notFound) {
      res.status(404);
    }
    res.send(content);
  });
});
app.listen(3000, () => {
  console.log("Listening on port 3000");
});