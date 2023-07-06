import { render, screen } from "@testing-library/react";
import React from "react";

import '@testing-library/jest-dom'
import Error from '../../pages/Error'

describe('ErrorPage', () => { 
    const TestComponent=(<Error/>)
    it('renders properly',()=>{
        render(TestComponent)
        expect(screen.getByText(/Sorry!!!! Something went wrong/)).toBeInTheDocument()
    })
  
 })