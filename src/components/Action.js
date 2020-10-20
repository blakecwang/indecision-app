import React from 'react'

const Action = (props) => (
  <div>
    <button
      className="big-button"
      disabled={props.noOptions}
      onClick={props.handleMakeDecision}>
      What should I do?
    </button>
  </div>
)

export default Action
