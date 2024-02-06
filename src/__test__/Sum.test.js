import { Sum } from "../components/Sum"



test("This function add Two Nu",()=>{
    const result = Sum(3,7)

    expect(result).toBe(10)
})