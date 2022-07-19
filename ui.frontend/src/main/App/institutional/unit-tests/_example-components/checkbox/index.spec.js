import React from 'react';
import ReactDOM from 'react-dom';
import Checkbox from '../../../_example-components/checkbox';

it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<Checkbox />, div);
});
