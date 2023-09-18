 import PropTypes from 'prop-types';
 
import {GiCheckMark} from 'react-icons/gi';


const Features = ({feature}) => {
    return (
        <div>
            <p className='flex gap-2 items-center'>
                <span><GiCheckMark></GiCheckMark></span>
                <span> {feature}</span>
            </p>
        </div>
    );
};

Features.propTypes = {
    feature: PropTypes.string.isRequired,
};

export default Features;