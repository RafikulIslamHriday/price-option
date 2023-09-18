 import PropTypes from 'prop-types';
import Features from '../features/Features';
const PriceOption = ({option}) => {
    const {price, name , features} = option
    return (
        <div className='bg-sky-500 flex flex-col text-white p-4 rounded-lg'>
            <h2 className='text-center'> 
                <span className='text-7xl '>{price}</span>
                <span className='text-5xl'>/mon</span>
            </h2>
            <h4 className='text-3xl py-4 text-center'>{name}</h4>
            <div className="mt-3 flex-grow">
            {
                features.map((feature, idx) => <Features key={idx} feature = {feature}></Features>)
            }
            </div>
            <button className='bg-slate-500 rounded-md w-full  py-3 mt-3'>Buy</button>

        </div>
    );
};

PriceOption.propTypes = {
   option: PropTypes.object.isRequired, 
};

export default PriceOption;