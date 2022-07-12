const ComponenteMultifield = ({ multifield }) => {
    const array = multifield.split(',');

    return (
        <div>
            <ul>
                {array.map(item => (
                    <li>{item}</li>
                ))}
            </ul>
        </div>
    );
};

export default ComponenteMultifield;
