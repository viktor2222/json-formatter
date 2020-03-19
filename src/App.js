import React, { useState } from 'react'
import ReactJson from 'react-json-view'
import GoogleFontLoader from 'react-google-font-loader'
import copy from 'copy-to-clipboard'
import './style.css'

import {
  Container,
  TextareaContainer,
  Submit,
  Return,
  ErrorMessage,
  Download,
} from './styled'

const theme = {
  fontFamily: "'Roboto', sans-serif",
  fontSize: '16px',
  lineHeight: '25px',
}

const App = () => {
  const [data, setData] = useState('')
  const [render, setRender] = useState(false)
  const [error, setError] = useState(false)
  const [clear, setClear] = useState(false)

  const onSubmit = () => {
    onValid(data)
  }

  const onReturn = () => {
    setRender(false)
  }

  const copyData = () => {
    copy(JSON.stringify(data, undefined, 2))
  }

  const onValid = e => {
    try {
      if (e.length >= 1 && JSON.parse(e)) {
        setRender(true)
        setError(false)
        setClear(false)
        return setData(JSON.parse(e))
      } else if (data.length === 0) {
        setClear(true)
        setError(false)
      } else {
        setError(true)
      }
    } catch (error) {
      console.warn('JSON is not valid')
      setRender(false)
      setError(true)
      setClear(false)
    }
  }

  const newData =
    'text/json;charset=utf-8,' +
    encodeURIComponent(JSON.stringify(data, undefined, 2))

  const url = 'data:' + newData

  return (
    <Container>
      <GoogleFontLoader
        fonts={[
          {
            font: 'Quicksand',
            weights: [400, 500, 600, 700],
          },
          {
            font: 'Roboto',
            weights: [400, 500, 700],
          },
        ]}
      />
      {!render ? (
        <>
          <TextareaContainer
            rows='10'
            placeholder='Enter here your JSON: {"example":"example"}'
            onChange={e => setData(e.target.value)}
          ></TextareaContainer>
          {clear && <ErrorMessage>You don't enter your JSON</ErrorMessage>}
          {error && <ErrorMessage>Your JSON is not valid</ErrorMessage>}
          <Submit error={error && clear ? 1 : 0} onClick={onSubmit}>
            Format
          </Submit>
        </>
      ) : (
        <>
          <ReactJson
            src={data}
            iconStyle='circle'
            name={false}
            theme='railscasts'
            style={theme}
            onEdit={() => true}
            onAdd={() => true}
            onDelete={() => true}
          />
          <Return onClick={onReturn}>New JSON</Return>
          <Download href={url} download='data.json'>
            Download
          </Download>
          <Return onClick={copyData}>Copy</Return>
        </>
      )}
    </Container>
  )
}

export default App
