import React from 'react'
  
const Links = ({form}) => {
  return (
    <a className="ligacoes" href={form.forms_url} target="_blank">{form.forms_name}</a>
  )
}

export default Links
