import useSort from "../hooks/use-sort";
import Table from "./Table";
import { GoArrowSmallDown, GoArrowSmallUp } from "react-icons/go";

function SortableTable(props, children){
    const {config, data} = props;
    const {sortBy, sortOrder, setSortColumn, sortedData} = useSort(config, data);
    const updatedConfig = config.map((column) => {
        if(!column.sortValue){
            return column;
        }
        return {
            ...column,
            header: () => ( <th 
                    className="cursor-pointer hover:bg-gray-100"
                    onClick={()=> setSortColumn(column.label)}>
                    <div className="flex items-center">
                        {getIcons(column.label, sortBy, sortOrder)}
                        {column.label}
                    </div>
                </th> )
        }
    });
    return (<Table {...props} data={sortedData} config={updatedConfig}>
        {children}
    </Table>);
}
function getIcons(label, sortBy, sortOrder){
    if(label !== sortBy){
        //show both icons
        return (<div>
            <GoArrowSmallUp />
            <GoArrowSmallDown />
        </div>);
    }
    else if(sortOrder === null){
        //show both icons
        return (<div>
            <GoArrowSmallUp />
            <GoArrowSmallDown />
        </div>);
    }
    else if(sortOrder === 'asc'){
        //show up icon
        return (<div>
            <GoArrowSmallUp />
        </div>);
    }
    else if(sortOrder === 'desc'){
        //show down icon
        return (<div>
            <GoArrowSmallDown />
        </div>);
    }
}

export default SortableTable;