import React from 'react';
import ReactDOM from 'react-dom';
import Multifield from '../../../_example-components/multifield';

it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<Multifield />, div);
});
