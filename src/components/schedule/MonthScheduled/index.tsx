import { Month } from './styles'

interface MonthProps {
	month: string
}

export default function MonthScheduled({ month }: MonthProps) {
	return <Month>{month}</Month>
}
