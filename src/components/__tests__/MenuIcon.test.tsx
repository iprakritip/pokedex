import { render, screen } from "@testing-library/react";
import React from "react";
import '@testing-library/jest-dom'
import MenuIcon from "../MenuIcon";

describe('Menu Icon',()=>{
const mockedFn=jest.fn()

    const TestComponent=(<MenuIcon setToggleMenu={mockedFn}/>)
    it('renders properly',()=>{
        render(TestComponent)
        expect(screen.getByRole('button')).toBeInTheDocument()
    })

    //passed
})