import { render, screen } from "@testing-library/react";
import user from "@testing-library/user-event";
import UserForm from "../UserForm";

test('it shows two inputs and a button', ()=>{
    render(<UserForm />);
    const inputs = screen.getAllByRole('textbox');
    const button = screen.getByRole('button');
    expect(inputs).toHaveLength(2);
    expect(button).toBeInTheDocument();
});

test('it calls onSubmit when the form is submitted', ()=>{
    /*const argsList = [];
    const callback = (...args) => {
        argsList.inputs(args);
    }
    render(<UserForm onSubmit={callback} />);*/
    const mock = jest.fn();
    render(<UserForm onSubmit={mock} />);
    //const [nameInput, emailInput] = screen.getAllByRole('textbox');
    const nameInput = screen.getByRole('textbox', {
        name: /name/i
    });
    const emailInput = screen.getByRole('textbox', {
        name: /email/i
    });
    user.click(nameInput);
    user.keyboard('Jane');
    user.click(emailInput);
    user.keyboard('Jane@test.com');
    const button = screen.getByRole('button');
    user.click(button);

    /*expect(argsList).toHaveLength(1);
    expect(argsList[0][0]).toEqual({
        name: 'Jane',
        email: 'Jane@test.com'
    });*/

    expect(mock).toHaveBeenCalledTimes(1);
    expect(mock).toHaveBeenCalledWith({
        name: 'Jane',
        email: 'Jane@test.com'
    });
});

test('it emties the two inputs when form is submitted', ()=>{
    render(<UserForm onSubmit={() => {}} />);
    const nameInput = screen.getByRole('textbox', {
        name: /name/i
    });
    const emailInput = screen.getByRole('textbox', {
        name: /email/i
    });
    user.click(nameInput);
    user.keyboard('Jane');
    user.click(emailInput);
    user.keyboard('Jane@test.com');
    const button = screen.getByRole('button');
    user.click(button);

    expect(nameInput).toHaveValue('');
    expect(emailInput).toHaveValue('');
});