import React from 'react'

export default function SearchInput({value, onChange}) {
  return (
    <><input type="text" value={value} 
    onChange={e => onChange(e.target.value)} className='mx-4 rounded-pill border border-1 p-2 position-relative ps-5' placeholder='Search' style={{outline:'none'}} />
    <i className='fa fa-search text-muted position-absolute' style={{top:'63px', left: '40px', opacity:'.8'}}></i></>
  )
}
