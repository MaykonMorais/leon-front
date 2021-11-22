import Select, { components, Options } from 'react-select'
import { FiChevronDown } from 'react-icons/fi'

const customStyles = {
	control: (provided: any, state: any) => ({
		...provided,
		border: '1px solid transparent',
		borderRadius: '10px',
		boxShadow: '0px 2px 4px rgba(0, 0, 0, 0.25)',
		height: '46px',
	}),

	indicatorSeparator: (provided: any, state: any) => ({
		...provided,
		display: 'none',
	}),
}

const options = [
	{ value: '1', label: 'Junior Silva' },
	{ value: '2', label: 'Fernando Pereira' },
]

const DropdownIndicator = (props: any) => {
	return (
		components.DropdownIndicator && (
			<components.DropdownIndicator {...props}>
				<FiChevronDown size={18} />
			</components.DropdownIndicator>
		)
	)
}

interface Option {
	label: string
	value: number | string
}
interface SelectInput {
	placeholder: string
	options?: Array<Option>
}

export default function DropdownInput({ placeholder, options }: SelectInput) {
	return (
		<Select
			components={{ DropdownIndicator }}
			styles={customStyles}
			options={options}
			placeholder={placeholder}
		/>
	)
}
