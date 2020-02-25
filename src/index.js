import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

import { Globalstyle } from './style'
import { Globalfont } from './statics/iconfont/iconfont'
const Root = () => {
    return (
        <div>
            <App />
            <Globalstyle />
            <Globalfont />
        </div>
    )
}

ReactDOM.render(<Root />, document.getElementById('root'));
