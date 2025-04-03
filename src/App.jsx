import React from 'react'
import Main from './components/main/Main'
import Sidebar from './components/sidebar/Sidebar'
import ContextProvider from './context/Context'

const App = () => {
  return (
    <>
      <Sidebar />
      <Main />
    </>
  )
}

export default App