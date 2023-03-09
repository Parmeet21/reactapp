import React from 'react'

export default function Alert(props) {
  return (
    <div>
      <div className={`alert alert-${props.alert.tp}`} role="alert">
      {props.alert.msg} {props.alert.message}
</div>
    </div>
  )
}
