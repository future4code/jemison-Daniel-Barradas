import React from 'react'
import { MatchesContainer } from '../styled'

export function SecaoMatches(props) {
	return (
		<MatchesContainer>
			<button onClick={props.onClickMatches}>Matches</button>
		</MatchesContainer>
	)
}