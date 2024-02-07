import {render,screen} from "@testing-library/react"
import ContactUs from "../components/ContactUs"
import "@testing-library/jest-dom"


describe('Group ofsimilar Test Case',()=>{
test("Should component Render",()=>{

    render(<ContactUs/>)

    const heading = screen.getByRole("heading")

    expect(heading).toBeInTheDocument()
})


test("should inputBox Render",()=>{

    render(<ContactUs/>)

    const inputBox = screen.getAllByRole('textbox')

    expect(inputBox.length).toBe(2)
})

it('should button text render',()=>{

    render(<ContactUs/>)

    const btnText = screen.getByText('Submit')

    expect(btnText).toBeInTheDocument()
})

})


