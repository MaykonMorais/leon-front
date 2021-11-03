import styled from 'styled-components'

const height = '5px'
const thumbHeight = 20
const trackHeight = '16px'

// colours
const upperColor = '#edf5f9'
const lowerColor = '#979797'
const thumbColor = '#FF774E'
const thumbHoverColor = '#979797'
const upperBackground = `linear-gradient(to bottom, ${upperColor}, ${upperColor}) 100% 50% / 100% ${trackHeight} no-repeat transparent`
const lowerBackground = `linear-gradient(to bottom, ${lowerColor}, ${lowerColor}) 100% 50% / 100% ${trackHeight} no-repeat transparent`

export const Range = styled.input`
	display: block;
	appearance: none;
	max-width: 700px;
	width: 50%;
	margin: 0;

	height: ${height};
	cursor: pointer;

	&:focus {
		outline: none;
	}

	&::-webkit-slider-runnable-track {
		width: 100%;
		height: ${height};
		background: ${lowerBackground};
		border-radius: 10px;
	}

	&::-webkit-slider-thumb {
		position: relative;
		appearance: none;
		height: 20px;
		width: 20px;
		background: ${thumbColor};
		border-radius: 100%;
		border: 2px solid #ff774e;
		top: 50%;
		transform: translateY(-50%);

		transition: background-color 150ms;
	}

	&::-moz-range-track,
	&::-moz-range-progress {
		width: 100%;
		height: ${height};
		background: ${upperBackground};
	}

	&::-moz-range-progress {
		background: ${lowerBackground};
	}

	&::-moz-range-thumb {
		appearance: none;
		margin: 0;
		height: ${thumbHeight};
		width: ${thumbHeight};
		background: ${thumbColor};
		border-radius: 100%;
		border: 0;
		transition: background-color 150ms;
	}

	&::-ms-track {
		width: 100%;
		height: ${height};
		border: 0;
		/* color needed to hide track marks */
		color: transparent;
		background: transparent;
	}

	&::-ms-fill-lower {
		background: ${lowerBackground};
	}

	&::-ms-fill-upper {
		background: ${upperBackground};
	}

	&::-ms-thumb {
		appearance: none;
		height: ${thumbHeight};
		width: ${thumbHeight};
		background: ${thumbColor};
		border-radius: 100%;
		border: 0;
		transition: background-color 150ms;
		/* IE Edge thinks it can support -webkit prefixes */
		top: 0;
		margin: 0;
		box-shadow: none;
	}

	&:hover,
	&:focus {
		&::-webkit-slider-thumb {
			background-color: ${thumbHoverColor};
		}
		&::-moz-range-thumb {
			background-color: ${thumbHoverColor};
		}
		&::-ms-thumb {
			background-color: ${thumbHoverColor};
		}
	}
`
