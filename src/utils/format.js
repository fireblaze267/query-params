export const onlyNumbers = (value) => {
  let filterValue = value.replace(/\D/g, "");

  return filterValue;
};
