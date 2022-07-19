import React from 'react';
import ReactDOM from 'react-dom';
import Date from '../../../_example-components/date';

it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<Date />, div);
});
