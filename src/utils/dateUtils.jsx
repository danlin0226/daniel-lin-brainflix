//function takes a millisecond timestamp in the past and converts it to the number of seconds from now
export const secondsFromNow = (ms) => {
  const now = new Date().getTime();
  const then = ms;
  const sDiff = (now - then) / 1000;
  return sDiff;
};

//function takes a date and and converts to a dynamic timestamp string
export const dynamicTime = (ms) => {
  const secondsSince = secondsFromNow(ms);
  if (secondsSince < 1) {
    return `just now`;
  } else if (secondsSince < 60) {
    return `${Math.floor(secondsSince)} seconds(s) ago`;
  } else if (secondsSince < 3600) {
    const minutes = Math.floor(secondsSince / 60);
    return `${minutes} minute(s) ago`;
  } else if (secondsSince < 86400) {
    const hours = Math.floor(secondsSince / 3600);
    return `${hours} hour(s) ago`;
  } else if (secondsSince < 2629756.8) {
    //86,400s multiplied by 30.437(avg days in month) gives seconds in a month
    const days = Math.floor(secondsSince / 86400);
    return `${days} day(s) ago`;
  } else if (secondsSince < 31557081.6) {
    const months = Math.floor(secondsSince / 2629756.8);
    return `${months} month(s) ago`;
  } else {
    const years = Math.floor(secondsSince / 31557081.8);
    return `${years} year(s) ago`;
  }
};
