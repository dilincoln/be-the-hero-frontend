import React, { useState } from 'react'
import { Link, useHistory } from 'react-router-dom'
import { FiLogIn } from 'react-icons/fi'

import api from '../../services/api'

import { LogonContainer, FormSection } from './styles'

import logoImg from '../../assets/logo.svg'
import heroesImg from '../../assets/heroes.png'

export default function Logon() {
	const [id, setId] = useState('')

	const history = useHistory()

	async function handleLogin(e) {
		e.preventDefault()

		try {
			const response = await api.post('session', { id })

			localStorage.setItem('ongId', id)
			localStorage.setItem('ongName', response.data.name)

			history.push('/profile')
		} catch (err) {
			alert('Falha no login, tente novamente.')
		}
	}

	return (
		<LogonContainer>
			<FormSection>
				<img src={logoImg} alt="Be the Hero" />

				<form onSubmit={handleLogin}>
					<h1>Faça seu logon</h1>

					<input
						placeholder="Sua ID"
						value={id}
						onChange={(e) => setId(e.target.value)}
					/>
					<button type="submit">Entrar</button>

					<Link to="/register">
						<FiLogIn size={16} color="#E02041" />
						Não tenho cadastro
					</Link>
				</form>
			</FormSection>

			<img src={heroesImg} alt="Heroes" />
		</LogonContainer>
	)
}
