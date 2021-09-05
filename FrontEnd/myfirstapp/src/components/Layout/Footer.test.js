import React from 'react';
import { render } from '@testing-library/react';
import Footer from './Footer';

test('contains homepage link', () => {
    const { getByText } = render(<Footer />);
    const linkElement = getByText(/^home$/i);
    expect(linkElement).toBeInTheDocument();
});

test('contains about us page link', () => {
    const { getByText } = render(<Footer />);
    const linkElement = getByText(/^about us$/i);
    expect(linkElement).toBeInTheDocument();
});
