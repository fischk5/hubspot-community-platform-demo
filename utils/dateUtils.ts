import { format, formatDistanceToNowStrict } from 'date-fns'

export function formatISODateString(date: string): string {
    return formatDistanceToNowStrict(date)
}