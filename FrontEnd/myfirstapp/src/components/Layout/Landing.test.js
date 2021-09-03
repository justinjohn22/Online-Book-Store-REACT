import React from 'react';
import { render } from '@testing-library/react';
import Landing from './Landing';

test('contains view books link', () => {
    const { getByText } = render(<Landing />);
    const linkElement = getByText(/^view books$/i);
    expect(linkElement).toBeInTheDocument();
});

test('contains sell books link', () => {
    const { getByText } = render(<Landing />);
    const linkElement = getByText(/^sell books$/i);
    expect(linkElement).toBeInTheDocument();
});

test('contains welcome message', () => {
    const { getByText } = render(<Landing />);

    // Only tests for a substring match, not an exact full string match
    const messageElement = getByText(/welcome to bookeroo/i);
    expect(messageElement).toBeInTheDocument();
});
