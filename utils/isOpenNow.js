const openingHours = require("../config/openingHours");

const pad = (val) => String(val).padStart(2, "0");

const parseTime = (str) => {
  const [h, m] = str.split(":").map(Number);
  return h * 60 + m;
};

const isOpenNow = (date = new Date()) => {
  const day = date.getDay();
  const ranges = openingHours.hours[day] || [];
  if (!ranges.length) return false;

  const minutes = date.getHours() * 60 + date.getMinutes();
  return ranges.some(([start, end]) => {
    const startMin = parseTime(start);
    const endMin = parseTime(end);
    return minutes >= startMin && minutes <= endMin;
  });
};

const getNextOpening = (date = new Date()) => {
  for (let offset = 0; offset < 7; offset += 1) {
    const check = new Date(date);
    check.setDate(date.getDate() + offset);
    const day = check.getDay();
    const ranges = openingHours.hours[day] || [];
    if (!ranges.length) continue;
    const [start] = ranges[0];
    return {
      dayOffset: offset,
      time: start
    };
  }
  return null;
};

const formatTimeRange = ([start, end]) => `${start} - ${end}`;

const formatHoursCards = (weekDays) =>
  weekDays.map((day) => {
    const ranges = openingHours.hours[day.key] || [];
    return {
      day: day.label,
      isClosed: ranges.length === 0,
      times: ranges.map(formatTimeRange)
    };
  });

module.exports = {
  isOpenNow,
  getNextOpening,
  formatHoursCards,
  pad
};
