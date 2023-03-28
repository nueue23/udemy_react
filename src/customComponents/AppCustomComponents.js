import Accordion from "./comps/Accordion";

function AppCustomComponents(){
    const items = [
        {   id: 'a1234',
            label: 'Introduction',
            content: 'This project records the hand-on excercises for learning react.'
        },
        {   id: 'b1234',
            label: 'What is React',
            content: 'Based on my understanding of react so far, it is just a better way to '
                    +'organize big projects having lots of components'
        },
        {   id: 'c1234',
            label: 'What is Visual Studio Code',
            content: 'It is a code editor (by Microsoft , i think). It seems to have a much simpler '
                +'interface compared to eclipse and comes integrated with a commond prompt.'
                +'But is it superior to eclipse ? I am not so sure.'
        }
    ];
    return <Accordion items={items}/>
}
export default AppCustomComponents;