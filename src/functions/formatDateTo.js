export default function formatDateTo(years, month, day) {
  let dayTrue;
  if (day < 9) {
    dayTrue = `0${day}`;
  } else {
    dayTrue = day;
  }
  let monthTrue;
  if (month < 9) {
    monthTrue = `0${month + 1}`;
  } else {
    monthTrue = month + 1;
  }
  const dateStr = `${years}-${monthTrue}-${dayTrue}`;
  return dateStr;
}
