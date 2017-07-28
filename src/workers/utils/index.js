export const processStringQuery = (query) => {
  return query.trim().replace(RegExp(/[' ']/g), '');
};
