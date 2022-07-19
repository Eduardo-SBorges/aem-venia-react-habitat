import ReactHabitat from 'react-habitat';

import Date from './_example-components/date';
import Link from './_example-components/link';
import Text from './_example-components/text';
import Image from './_example-components/image';
import Radio from './_example-components/radio';
import Number from './_example-components/number';
import Select from './_example-components/select';
import Checkbox from './_example-components/checkbox';
import Multifield from './_example-components/multifield';
import ColorField from './_example-components/colorField';

class MyApp extends ReactHabitat.Bootstrapper {
    constructor() {
        super();

        // Create a new container builder:
        const builder = new ReactHabitat.ContainerBuilder();

        // Register a component:
        builder.register(Date).as('Date');
        builder.register(Link).as('Link');
        builder.register(Text).as('Text');
        builder.register(Image).as('Image');
        builder.register(Radio).as('Radio');
        builder.register(Number).as('Number');
        builder.register(Select).as('Select');
        builder.register(Checkbox).as('Checkbox');
        builder.register(ColorField).as('ColorField');
        builder.register(Multifield).as('Multifield');

        // Finally, set the container:
        this.setContainer(builder.build());
    }
}

// Always export a 'new' instance so it immediately evokes:
export default new MyApp();
