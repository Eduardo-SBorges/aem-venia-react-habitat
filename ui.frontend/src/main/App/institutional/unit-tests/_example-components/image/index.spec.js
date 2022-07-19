import React from 'react';
import ReactDOM from 'react-dom';
import Image from '../../../_example-components/image';

it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<Image />, div);
});
