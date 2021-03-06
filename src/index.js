import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import {BrowserRouter} from 'react-router-dom';
import 'antd/dist/antd.css';
import '../node_modules/font-awesome/css/font-awesome.min.css';
import '../node_modules/toastr/build/toastr.min.css';
import registerServiceWorker from './registerServiceWorker';

//redux
import configureStore from './redux/store/store';
import {Provider} from 'react-redux';
import {checkForUser} from './redux/actions/userAction';
import {getInitialCart} from './redux/actions/cartActions';

export const store = configureStore();
store.dispatch(checkForUser());
store.dispatch(getInitialCart());

const WithRouter = () => (

    <Provider store={store}>
        <BrowserRouter>
            <App />
        </BrowserRouter>
    </Provider>

);

ReactDOM.render(<WithRouter />, document.getElementById('root'));
registerServiceWorker();