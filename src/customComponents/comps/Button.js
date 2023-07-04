import PropTypes from 'prop-types';
import classnames from 'classnames';
import {GoSync} from 'react-icons/go';

function Button({children, 
    primary,
    secondary,
    success,
    warning,
    danger,
    outline,
    rounded,
    loading,
    ...rest}){
        //console.log(rest);
    const finalClassName = classnames(rest.className, 
        'flex items-center px-3 py-1.5 border h-8',{
        'border-blue-500 bg-blue-500' : primary,
        'border-gray-900 bg-gray-900' : secondary,
        'border-green-500 bg-green-500' : success,
        'border-yellow-400 bg-yellow-400' : warning,
        'border-red-600 bg-red-500' : danger,
        'rounded-full' : rounded,
        'bg-white' : outline, //later classname overwrites previous one
        'text-white' : !outline,
        'text-blue-500' : outline && primary,
        'text-gray-600' : outline && secondary,
        'text-green-500' : outline && success,
        'text-yellow-500' : outline && warning,
        'text-red-600' : outline && danger,
        'opacity-80' : loading
    });
    //return <button className="px-3 py-1.5 border border-blue-600 bg-blue-500 text-white">{children}</button>;
    return <button {...rest} 
                className={finalClassName}
                disabled={loading}>
                    { loading 
                            ? <GoSync className='animate-spin' /> 
                            : children}
            </button>;
}
Button.propTypes = {
    children: PropTypes.string.isRequired,
    customValidTypeChecker: function( {primary,
        secondary,
        success,
        warning,
        danger}){
        const count = Number(!!primary) + Number(!!secondary) + Number(!!success)
                        + Number(!!warning) + Number(!!danger);
        if(count > 1){
            throw new Error('Only one of primary / secondary / success / warning / danger is allowed');
        }
    }

}
export default Button;