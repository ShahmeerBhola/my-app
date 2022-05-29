import React from 'react'
import Header from './Header'
import Office from './Office'
import Practice from './Practice'
import Result from './Result'

function index() {
  return (
    <div>
        <Header/>
        <Practice/>
        <Result/>
        <Office/>
    </div>
  )
}

export default index