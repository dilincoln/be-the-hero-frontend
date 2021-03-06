import { createGlobalStyle } from 'styled-components'

const GlobalStyle = createGlobalStyle`
  * {
    @import url('https://fonts.googleapis.com/css2?family=Roboto:wght@400;500;700&display=swap');
    font-family: 'Roboto', sans-serif;

    margin: 0;
    padding: 0;
    outline: 0;
    box-sizing: border-box;
  }

  body {
    font: 400 14px Roboto, sans-serif;
    background: #F0F0F5;
    -webkit-font-smoothing: antialiased;
  }

  input, button, textarea {
    font: 400 18px Roboto, sans-serif;
  }

  button {
    cursor: pointer;
  }

  form input {
    width: 100%;
    height: 60px;
    color: #333;
    border: 1px solid #dcdce6;
    border-radius: 8px;
    padding: 0 24px;
  }

  form textarea {
    width: 100%;
    min-height: 140px;
    resize: vertical;
    color: #333;
    border: 1px solid #dcdce6;
    border-radius: 8px;
    padding: 16px 24px;
	line-height: 24px;
  }

  form button, header a {
		width: 100%;
		height: 60px;
		background: #e02041;
		border: 0;
		border-radius: 8px;
		color: #fff;
		font-weight: 700;
		margin-top: 16px;
		display: inline-block;
		text-align: center;
		text-decoration: none;
		font-size: 18px;
		line-height: 60px;
		transition: filter 0.2s;
	}

	form button:hover, header a:hover {
		filter: brightness(90%);
	}

  form a, section a {
		display: flex;
		align-items: center;
		margin-top: 40px;
		color: #41414d;
		font-size: 14px;
		text-decoration: none;
		font-weight: 500;
		transition: opacity 0.2s;
	}

	form a svg, section a svg {
		margin-right: 8px;
	}

	form a:hover, section a:hover {
		opacity: 0.8;
	}
`

export default GlobalStyle
