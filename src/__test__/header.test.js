import { fireEvent, render, screen } from "@testing-library/react"
import Header from "../components/Header"
import { Provider } from "react-redux"
import appStore from "../utilis/appStore"
import { BrowserRouter } from "react-router-dom"



test("Should Render by using button ",()=>{

    render(
        <BrowserRouter>
            <Provider store={appStore}>
            <Header/>
        </Provider>
        </BrowserRouter>
    )

    const loginBtn = screen.getByRole("button",{name:'Login'})

    expect(loginBtn).toBeInTheDocument()


})


test("should it be cart-items-0", ()=>{

    render(<BrowserRouter>
        <Provider store={appStore}>
            <Header/>
        </Provider>
    </BrowserRouter>)

        const cartItems = screen.getByText("Cart(0)")

        expect(cartItems).toBeInTheDocument()


})


it("should it be clickeble login Button",()=>{

    render(
        <BrowserRouter>
            <Provider store={appStore}>
                <Header/>
            </Provider>
        </BrowserRouter>
    )

    const loginButton = screen.getByRole('button',{name:"Login"})

    fireEvent.click(loginButton)

    const logOutButton = screen.getByRole('button',{name:"LogOut"})

    expect(logOutButton).toBeInTheDocument()
})