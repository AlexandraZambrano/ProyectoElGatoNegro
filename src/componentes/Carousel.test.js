import React from 'react';
import '@testing-library/jest-dom/extend-expect'
import { render } from '@testing-library/react'
import Carousel from './Carousel';

test('Renders content', () => {
    const carousel = {
        content: 'This is a test',
    }

    const component = render(<Carousel carousel={carousel} />)
    console.log(component)
})