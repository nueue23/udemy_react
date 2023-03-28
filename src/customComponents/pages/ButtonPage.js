import Button from './comps/Button';
import {GoBell, GoCloudDownload, GoDatabase} from "react-icons/go";
function ButtonPage(){
    const handleClick = ()=>{
        console.log('handle click');
    };
    return (<div>
        <Button primary onClick={handleClick} className='mb-5'>
            <GoBell />
            Hi there!
        </Button>
        <Button secondary outline>
            <GoCloudDownload />
            Hello
        </Button>
        <Button warning>
            <GoDatabase />
            Be Careful!
        </Button>
        <Button danger rounded>Stop!</Button>
    </div>);
}
export default ButtonPage;