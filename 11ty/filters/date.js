import { fromJSDate, dateToFormat } from '../utils.js'

export default {
	dateISO: dateObj => fromJSDate(dateObj).toISO(),
	dateToFormat,
	dateString: dateObj => dateToFormat(dateObj, 'LLL dd, yyyy'),
}
