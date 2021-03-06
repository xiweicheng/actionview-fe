import _ from 'lodash';
const moment = require('moment');

export default function getAgoAt(stamptime, current_time) {

  if (!stamptime) { return ''; }
  if (!current_time) { return moment.unix(stamptime).format('YY/MM/DD HH:mm:ss'); }

  const points = [
    { value: 365 * 24 * 60 * 60, suffix: '年前', max: 2 },
    { value: 30 * 24 * 60 * 60, suffix: '个月前', max: 11 },
    { value: 7 * 24 * 60 * 60, suffix: '周前', max: 4 },
    { value: 24 * 60 * 60, suffix: '天前', max: 6 },
    { value: 60 * 60, suffix: '小时前', max: 23 },
    { value: 10 * 60, suffix: '0分钟前', max: 5 }
  ];

  let agoAt = '刚刚';
  const diff = current_time - stamptime;
  if (diff <= 0) { return agoAt; }

  for (let i = 0; i < 6; i++) {
    const mode = _.floor(diff / points[i].value);
    if (mode >= 1) {
      agoAt = _.min([ mode, points[i].max ]) + points[i].suffix;
      break;
    }
  }
  return agoAt;
}
