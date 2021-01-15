import PropTypes from "prop-types";

const arrayOfComponent = (C, requireMultiple = false) => {
  const typecheck = PropTypes.oneOf([C]);
  const types = [
    PropTypes.arrayOf(
      PropTypes.shape({
        type: typecheck,
      })
    ),
  ];

  if (!requireMultiple) {
    types.push(
      PropTypes.shape({
        type: typecheck,
      })
    );
  }

  return PropTypes.oneOfType(types);
};

export { arrayOfComponent };
