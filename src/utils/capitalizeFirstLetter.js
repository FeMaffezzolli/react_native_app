/**
 * Capitalize first letter of a given string
 * @param {*} string
 */
const capitalizeFirstLetter = string => {
    return string[0].toUpperCase() + string.slice(1)
};

export default capitalizeFirstLetter;