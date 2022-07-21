import React from 'react'
import { Texto1 } from '../style'




function Texto(props) {
	return (
		<Texto1>
			<div>
				<p>{props.nome}</p>
				<p>{props.texto}</p>
			</div>
		</Texto1>
)}

export default Texto