import ReactHabitat from 'react-habitat';
import ComponenteTexto from './ComponenteTexto';
import ComponenteImagem from './ComponenteImagem';
import ComponenteMultifield from './ComponenteMultifield'
import ComponenteCheckbox from './ComponenteCheckbox';
import ComponenteLink from './ComponenteLink';

class MyApp extends ReactHabitat.Bootstrapper {
    constructor() {
        super();

        // Create a new container builder:
        const builder = new ReactHabitat.ContainerBuilder();

        // Register a component:
        builder.register(ComponenteTexto).as('ComponenteTexto');
        builder.register(ComponenteImagem).as('ComponenteImagem');
        builder.register(ComponenteMultifield).as('ComponenteMultifield');
        builder.register(ComponenteCheckbox).as('ComponenteCheckbox');
        builder.register(ComponenteLink).as('ComponenteLink');

        // Finally, set the container:
        this.setContainer(builder.build());
    }
}

// Always export a 'new' instance so it immediately evokes:
export default new MyApp();