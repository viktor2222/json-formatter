import styled from 'styled-components'

export const Container = styled.div`
  max-width: 800px;
  width: 100%;
  margin: 0 auto;
`
export const TextareaContainer = styled.textarea`
  resize: vertical;
  font-family: 'Roboto', sans-serif;
  width: calc(100% - 22px);
  padding: 10px;
  background-color: rgb(43, 43, 43);
  color: #999;
  font-size: 16px;
  line-height: 25px;
`
export const Submit = styled.button`
  font-family: 'Quicksand', sans-serif;
  font-weight: 700;
  font-size: 25px;
  line-height: 35px;
  border-radius: 4px;
  background-color: ${p => (p.error ? 'red' : '#3498db')};
  border-color: transparent;
  color: #fff;
  cursor: pointer;
  margin: 10px 15px;
  :first-of-type {
    margin-left: 0;
  }
`
export const Return = styled(Submit)``
export const Download = styled.a`
  font-family: 'Quicksand', sans-serif;
  font-weight: 700;
  font-size: 25px;
  line-height: 35px;
  border-radius: 4px;
  background-color: ${p => (p.error ? 'red' : '#3498db')};
  border-color: transparent;
  color: #fff;
  cursor: pointer;
  margin-top: 10px;
  text-decoration: none;
  padding: 5px 6px;
`
export const ErrorMessage = styled.p`
  font-family: 'Quicksand', sans-serif;
  color: red;
  font-size: 16px;
`
