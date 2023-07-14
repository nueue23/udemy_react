import { render, screen } from "@testing-library/react";
import user from '@testing-library/user-event';
import AppUsers from "../AppUsers";

test('can recieve a new user and add it to the list', () => {
   render(<AppUsers />);
   const nameInput = screen.getByRole('textbox', {name:/name/i});
   const emailInput = screen.getByRole('textbox', {name:/email/i});
   
   user.click(nameInput);
   user.keyboard('Jane');
   user.click(emailInput);
   user.keyboard('Jane@test.com');

   const button = screen.getByRole('button');

   user.click(button);

   //screen.debug();

   const name = screen.getByRole('cell', {name: 'Jane'});
   const email = screen.getByRole('cell', {name: 'Jane@test.com'}); 

   expect(name).toBeInTheDocument();
   expect(email).toBeInTheDocument();
});