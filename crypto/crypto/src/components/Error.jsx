import React from 'react'
import styled from '@emotion/styled'

const Texto = styled.div`
background-color: red;
color: aliceblue;
padding: 15px;
font-size: 2rem;
text-transform: uppercase;
font-family: 'Sono', sans-serif;
font-weight: bold;
margin-top: 30px;
margin-bottom: 30px;
border-radius: 12px;
`

const Error = ({children}) => {
  return (
    <Texto>{children}</Texto>
  )
}

export default Error