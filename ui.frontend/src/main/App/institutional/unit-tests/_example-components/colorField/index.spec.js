import React from 'react';
import ReactDOM from 'react-dom';
import ColorField from '../../../_example-components/colorField';

it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<ColorField />, div);
});
