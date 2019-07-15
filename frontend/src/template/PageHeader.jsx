import React from 'react'

var style = {
    marginLeft: "20px"
}

export default props => (
    <header className="page-header">
        <h2>
            {props.name}
            <small style={style}>{props.small}</small>
        </h2>
    </header>
)