import Table from "../comps/Table";

function TablePage(){
    const data = [
        {name: 'Orange', color:'bg-orange-500', score:50},
        {name: 'Apple', color:'bg-red-300', score:30},
        {name: 'Banana', color:'bg-yellow-500', score:10},
        {name: 'Lime', color:'bg-green-500', score:40}
    ];
    const config = [
        {   label:'Name',
            render: (fruit) => fruit.name,
            sortValue: (fruit) => fruit.name
        },
        {   label:'Color',
            render: (fruit) => <div className={`p-3 m-2 ${fruit.color}`} />
        },
        {   label:'Sort',
            render: (fruit) => fruit.score,
            header: () => <th className="bg-red-500">Score</th>,
            sortValue: (fruit) => fruit.score
        }
    ];
    const keyFn = (fruit) => {
        return fruit.name;
    };
    return <Table data={data} config={config} keyFn={keyFn} />
}
export default TablePage;