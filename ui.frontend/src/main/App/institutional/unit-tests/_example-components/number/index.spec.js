import React from 'react';
import ReactDOM from 'react-dom';
import Number from '../../../_example-components/number';

it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<Number />, div);
});
