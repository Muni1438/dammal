import React from 'react'
import {render,cleanup,fireEvent,screen,act } from "@testing-library/react"
import Muni from './Muni';
import Vijay from './Vijay';
describe("All about Todo App",()=>{
afterEach(cleanup);
test('About h1 tag ', () => {
   const{getByTestId,asFragment}= render(<Muni/>)
   expect(asFragment(<Muni/>)).toMatchSnapshot()
    fireEvent.change(getByTestId("inputTag"),{target:{value:"muni kumar"}})
    expect(getByTestId("inputTag").value).toBe("muni kumar")
})
test("about Fetching",async()=>{
    const fetching=jest.fn(()=>Promise.resolve("jakkula"))
    const {asFragment}=render(<Vijay/>)
    expect(asFragment(<Vijay/>)).toMatchSnapshot()


})


})

