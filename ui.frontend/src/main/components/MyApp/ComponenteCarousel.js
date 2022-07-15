import React from 'react';
import styles from './ComponenteCarousel.module.css';

const ComponenteCarousel = () => {
    // const array = multifield.split(',');
    const slides = [
        {
            id: 'slide1',
            text: 'Slide 1'
        },
        {
            id: 'slide2',
            text: 'Slide 2'
        },
        {
            id: 'slide3',
            text: 'Slide 3'
        }
    ];
    const [active, setActive] = React.useState(0);
    const [position, setPosition] = React.useState(0);
    const contentRef = React.useRef();

    React.useEffect(() => {
        const { width } = contentRef.current.getBoundingClientRect();
        setPosition(-(width * active));
    }, [active]);

    function slidePrev() {
        if (active > 0) setActive(active - 1);
    }

    function slideNext() {
        if (active < slides.length - 1) setActive(active + 1);
    }

    return (
        <section className={styles.container}>
            <div ref={contentRef} className={styles.content} style={{ transform: `translateX(${position}px)` }}>
                {slides.map(slide => (
                    <div className={styles.item} key={slide.id}>
                        {slide.text}
                    </div>
                ))}
            </div>
            <nav className={styles.nav}>
                <button onClick={slidePrev}>Anterior</button>
                <button onClick={slideNext}>Próximo</button>
            </nav>
        </section>
    );
};

export default ComponenteCarousel;
