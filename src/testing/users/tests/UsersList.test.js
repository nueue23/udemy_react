import { render, screen, within } from "@testing-library/react";
import UsersList from '../UsersList';

function initTest(){
    const users = [{name: 'Jane', email: 'jane@test.com'},
                   {name: 'Sam', email: 'sam@test.com'}
                  ];
    const {container} = render(<UsersList users={users} />);
    return {
        users,
        container
    };
}

test('render one row per user', () => {
    const {container} = initTest();
    //screen.logTestingPlaygroundURL();
    //const rows = within(screen.getByTestId("users")).screen.getAllByRole('row');

    //eslint-disable-next-line
    const rows = container.querySelectorAll('tbody tr');
    expect(rows).toHaveLength(2);
});

test('render the name and email of each user', ()=>{
    const {users} = initTest();
    for(let user of users){
        const name = screen.getByRole('cell', {name: user.name});
        const email = screen.getByRole('cell', {name: user.email});

        expect(name).toBeInTheDocument();
        expect(email).toBeInTheDocument();
    }

});
