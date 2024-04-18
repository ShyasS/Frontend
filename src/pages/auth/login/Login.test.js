import { fireEvent, render, screen } from "@testing-library/react";
import LoginPage from "./login";
import { BrowserRouter } from "react-router-dom";
import { Provider, useDispatch, useSelector } from "react-redux";
import { store } from '../../../store';
test('submits login form with valid data', async () => {
    render(
      <BrowserRouter>
        <Provider store={store}>
          <LoginPage />
        </Provider>
      </BrowserRouter>
    );
    const textElement = screen.getByRole('heading',{
        name : /Log in/i,
    })
    const button = screen.getByRole('button',{
        name : /Submit/i,
    });
    expect(textElement).toBeInTheDocument();
    fireEvent.change(screen.getByPlaceholderText('Email address is required'), { target: { value: 'test@example.com' } });
    fireEvent.change(screen.getByPlaceholderText('Password is required'), { target: { value: 'password' } });
    fireEvent.click(button);
  });
