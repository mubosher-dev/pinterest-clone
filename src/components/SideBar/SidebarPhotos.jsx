import React from 'react'

function SidebarPhotos({url,title}) {
  return (
    <>
        <img src={url} alt={title} />
        {/* <h4>{title}</h4> */}
    </>
  )
}

export default SidebarPhotos