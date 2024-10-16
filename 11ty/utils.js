import { DateTime } from 'luxon'

const getTZ = date => {
	// https://www.11ty.dev/docs/dates/#dates-off-by-one-day
	// If `date` is provided in YYYY-MM-DD, assume the date is in UTC so `dateString` can work correctly
	if (date instanceof Date && date.toISOString().indexOf('T00:00:00.000Z') > 0) {
		return { zone: 'utc' }
	}
}
// `updated` is not converted to Date so this catches those cases and converts it
export const fromJSDate = date => DateTime.fromJSDate(date instanceof Date ? date : new Date(date), getTZ(date))
export const dateToFormat = (dateObj, format = 'x') => fromJSDate(dateObj).toFormat(format)
