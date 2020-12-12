import React from 'react'

function Altcomponent(props) {

    console.log("Alt component render edildi")

    return (
        <div>
            <h1>{props.name}</h1>
        </div>
    )
}

export default React.memo(Altcomponent)
