import { Fragment } from "react";
function Table({data, config, keyFn}){
    const renderedRows = data.map((eachData) => {
        const renderedCells = config.map( (each) => {
            return <td key={each.label} className="p-3">
                        {each.render(eachData)}
                    </td>
        });
        return <tr className="border-b" key={keyFn(eachData)}>
            {renderedCells}
        </tr>
    });
    const renderedHeader = config.map((each)=>{
        if(each.header){
            return <Fragment key={each.label}>{each.header()}</Fragment>
        }
        return <th key={each.label}>{each.label}</th>
    });
    return (<table className="table-auto border-spacing-2">
        <thead>
            <tr className="border-b-2">
                {renderedHeader}
            </tr>
        </thead>
        <tbody>
            {renderedRows}
        </tbody>
    </table>);
}
export default Table;