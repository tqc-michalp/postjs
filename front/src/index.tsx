import * as React from 'react';
import * as ReactDom from 'react-dom';
import { Provider } from 'react-redux';
import Posts from "./posts/posts";

//case 1
// import store from './store';

//case 2
import { store } from './store';

// case 3
// import * as store from './store';

ReactDom.render(
    <Provider store={store}>
        <Posts />
    </Provider>,
    document.getElementById('entry-point')
);
