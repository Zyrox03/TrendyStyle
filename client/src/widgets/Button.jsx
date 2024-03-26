import PropTypes from "prop-types";
export const Button = ({ text }) => {
  return (
    <button className="bookmarkBtn px-3 lg:px-4 text-[14px] lg:text-[16px] bg-purple-700/90">{text}</button>
  );
};
Button.propTypes = {
  text: PropTypes.string,
};
