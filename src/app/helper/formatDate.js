export default function formatDate(strDate) {
  const arrDate = strDate.split('-');
  const dayTime = arrDate[2].split('T');
  const time = dayTime[1].slice(0, 5);

  return `${dayTime[0]}/${arrDate[1]}/${arrDate[0]}, ${time}`;
}
