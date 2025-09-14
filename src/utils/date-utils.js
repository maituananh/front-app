export const getTimeAfterFiveMinutes = (inputTime) => {
  const date = new Date(inputTime);

  date.setMinutes(date.getMinutes() + 5);

  return date;
};
