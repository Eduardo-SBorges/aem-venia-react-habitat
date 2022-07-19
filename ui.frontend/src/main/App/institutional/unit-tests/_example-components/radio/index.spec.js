import React from 'react';
import ReactDOM from 'react-dom';
import Radio from '../../../_example-components/radio';

it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<Radio />, div);
});
