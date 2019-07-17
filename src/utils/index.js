export const leftPad = number => {
  return number < 10 ? "0" + number : number;
};

export const convertMsToDate = dateInMs => {
  let dateObj = new Date(dateInMs);
  return `${leftPad(dateObj.getDate())}-${leftPad(
    dateObj.getMonth()
  )}-${dateObj.getYear()}--${leftPad(dateObj.getHours())}:${leftPad(
    dateObj.getMinutes()
  )}`;
};
