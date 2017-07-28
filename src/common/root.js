import React from 'react';
import { render } from 'react-dom';
import { Switch } from 'react-router';
import { HashRouter } from 'react-router-dom';
import { IntlProvider, addLocaleData } from 'react-intl';
import ruLocaleData from 'react-intl/locale-data/ru';
import injectTapEventPlugin from 'react-tap-event-plugin';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import { Provider } from 'react-redux';

addLocaleData([...ruLocaleData]);
injectTapEventPlugin();

export function bootstrap(routes, store) {
  const wrappedRouter = (
    <Provider store={store}>
      <IntlProvider locale="ru">
        <MuiThemeProvider muiTheme={getMuiTheme()}>
          <HashRouter>
            <Switch>
              {routes}
            </Switch>
          </HashRouter>
        </MuiThemeProvider>
      </IntlProvider>
    </Provider>
  );

  render(wrappedRouter, document.getElementById('app'));
}
