import classNames from "classnames";

function Skeleton({times, className}){
    const outerClassName = classNames(
        'relative',
        'overflow-hidden',
        'bg-gray-200',
        'rounded',
        'mb-2.5',
        className
    );
    const innerClassName = classNames(
        'animate-shimmer',
        'absolute',
        'inset-0',
        '-translate-x-full',
        'bg-gradient-2r',
        'from-gray-200',
        'via-white',
        'to-gray-200'
    );
    const boxes = Array(times).fill(0).map((_, i)=>{
        return <div key={i} className={outerClassName}>
                <div className={innerClassName} />
            </div>
    });
    return boxes;
}
export default Skeleton;