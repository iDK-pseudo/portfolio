import React from 'react'

function Button({type, link}) {
  return (
    <div class="link-btn" onClick={()=>window.open(link, "_blank")}>
      {type == "code" && <p>&lt;/&gt;</p>}
      {type == "prod" && <p>//</p>}
    </div>
  )
}


export default Button