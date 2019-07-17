export const leftPad = number => {
  return number < 10 ? "0" + number : number;
};

export const convertMsToDate = dateInMs => {
  let dateObj = new Date(dateInMs);
  return `${dateObj.getDate()}-${dateObj.getMonth()}-${dateObj.getYear()}--${leftPad(
    dateObj.getHours()
  )}:${leftPad(dateObj.getMinutes())}`;
};
