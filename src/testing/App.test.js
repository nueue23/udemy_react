import React from 'react';
import {render, screen} from '@testing-library/react';
import App from './App';


test('verify label is present',  ()=>{
    render(<App />);    
    const label = screen.getByText(/hi there!/i);
    expect(label).toBeInTheDocument();
});



