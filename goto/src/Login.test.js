import Login from "./page/loginpage/login";
import React from "react";
import {render, fireEvent,screen,waitFor} from "@testing-library/react";
import SearchAppBar from "./page/component/searchbar";
import userEvent from "@testing-library/user-event"


const testcase = [
    {username: '', password: ''},
    {username: 'master', password:'1'},
    {username: 'maste',password:'1'},
    {username: 'master', password:'2'},
    {username: 'maste', password:'2'},
]
const onSubmit = jest.fn()

test('Empty input', async () => {
    const username = screen.getByTestId('text-input-element')
    const password = screen.getByTestId('password-input-element')
    userEvent.type(username, testcase[0].username)
    userEvent.type(password, testcase[0].password)
  
    userEvent.click(screen.getByTestId('login-button-element'))
  
    await waitFor(()=>{
      expect(onSubmit).toHaveBeenCalledTimes(1)
})
})

test('Valid input', async () => {
    const username = screen.getByTestId('text-input-element')
    const password = screen.getByTestId('password-input-element')
    userEvent.type(username, testcase[1].username)
    userEvent.type(password, testcase[1].password)
  
    userEvent.click(screen.getByTestId('login-button-element'))
  
    await waitFor(()=>{
      expect(onSubmit).toHaveBeenCalledTimes(1)
})
})

test('Wrong username', async () => {
    const username = screen.getByTestId('text-input-element')
    const password = screen.getByTestId('password-input-element')
    userEvent.type(username, testcase[2].username)
    userEvent.type(password, testcase[2].password)
    userEvent.click(screen.getByTestId('login-button-element'))
  
    await waitFor(()=>{
      expect(onSubmit).toHaveBeenCalledTimes(1)
})
})

test('Wrong password', async () => {
    const username = screen.getByTestId('text-input-element')
    const password = screen.getByTestId('password-input-element')
    userEvent.type(username, testcase[3].username)
    userEvent.type(password, testcase[3].password)
  
    userEvent.click(screen.getByTestId('login-button-element'))
  
    await waitFor(()=>{
      expect(onSubmit).toHaveBeenCalledTimes(1)
})
})

test('Wrong username and password', async () => {
    const username = screen.getByTestId('text-input-element')
    const password = screen.getByTestId('password-input-element')
    userEvent.type(username, testcase[4].username)
    userEvent.type(password, testcase[4].password)
  
    userEvent.click(screen.getByTestId('login-button-element'))
  
    await waitFor(()=>{
      expect(onSubmit).toHaveBeenCalledTimes(1)
})
})