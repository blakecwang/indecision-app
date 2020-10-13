import React from 'react'

const Action = (props) => (
  <div>
    <button
      disabled={props.noOptions}
      onClick={props.handleMakeDecision}>
      Make decision
    </button>
    <button
      disabled={props.noOptions}
      onClick={props.handleRemoveAll}>
      Remove all
    </button>
  </div>
)

export default Action
