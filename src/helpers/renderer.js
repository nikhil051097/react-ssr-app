import React from 'react';
import { renderToString } from 'react-dom/server';
import { StaticRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import Routes from './../client/Routes';
import { renderRoutes } from 'react-router-config';
import  serialize from 'serialize-javascript';


export default (req, store, context) => {
    const content = renderToString(
        <Provider store={store}>context
            <StaticRouter location={req.url} context={context} >
                <div>{renderRoutes(Routes)}</div>
            </StaticRouter>
        </Provider>
    );

    const html = `
    <html>
    <head>
    </head>
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/materialize/1.0.0/css/materialize.min.css">

    <!-- Compiled and minified JavaScript -->
    <script src="https://cdnjs.cloudflare.com/ajax/libs/materialize/1.0.0/js/materialize.min.js"></script>

        <body>
            <div id="root">${content}</div>
            <script>
                window.INITIAL_STATE = ${serialize(store.getState())}
            </script>
            <script src="bundle.js"></script>

        </body>
    </html>
    `;

    return html;
}