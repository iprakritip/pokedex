import React from 'react';
import Input from '../Input'
import {render, screen} from '@testing-library/react';
import '@testing-library/jest-dom';

describe('input',()=>{
    const TestComponent= (<Input/>)
    it('renders properly',()=>{
        render(TestComponent)
        expect(screen.getByRole('textbox')).toBeInTheDocument()
    })
})

//passed