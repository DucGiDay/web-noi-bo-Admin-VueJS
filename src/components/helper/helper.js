import moment from 'moment';
export const formatDateTime = (date) => {
  return moment(date).format("HH:MM DD/MM/YYYY")
}
