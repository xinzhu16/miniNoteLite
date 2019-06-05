export function formatDate(date) {
    return `${date.getFullYear()}/${date.getMonth() + 1}/${date.getDate()}`
}

export function addDate(date, days){
  const d = new Date(date);
  d.setDate(d.getDate()+days);
  return formatDate(d);
}

export function addMinite(date, mins) {
  return new Date(date).getTime() + mins * 1000 * 60
}
export function dateToString(date, type) {
  const time = new Date(date);
  switch (type) {
    case 1:
      return time.getDate() + '/' + (time.getMonth() + 1)%12 + '/' + time.getFullYear();
    case 2:
      return (time.getMonth() + 1)%12 + '月' + time.getDate() + '日 ' + time.getHours() + ':' + time.getMinutes();
    default:
      return time.getDate() + '/' + (time.getMonth() + 1)%12 + '/' + time.getFullYear()
  }
}
