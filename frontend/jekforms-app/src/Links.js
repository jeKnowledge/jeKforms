import React from 'react'
import './App.css'

const Links = ({forms_url, forms_name}) => {
  return (
    <a className="ligacoes" href={forms_url} target="_blank">{forms_name} </a>
  )
}

export default Links
