import React from 'react';
import ReactDOM from 'react-dom';
import Link from '../../../_example-components/link';

it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<Link />, div);
});
