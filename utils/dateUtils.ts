import { format, formatDistanceToNowStrict } from 'date-fns'

export function formatISODateString(date: string): string {
    return formatDistanceToNowStrict(date)
}

export function formatEventDate(date: string): string {
    return format(new Date(date), 'MMM d, yyyy • h:mm a')
}