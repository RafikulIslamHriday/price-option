
import PropTypes from "prop-types";

const Link = ({ route }) => {
  return (
    <div>
      <li className="ml-4 text-xl leading-7">
        <a href={route.path}>{route.name}</a>
      </li>
    </div>
  );
};

Link.propTypes = {
  route: PropTypes.object.isRequired,
};

export default Link;
