import "../assets/styles/toggle.css"
import { useState } from "react"

function Toggle() {

    const [bool, setBool] = useState(false)

    return (
        <button aria-pressed={bool} className="toggle" onClick={() => setBool(!bool)}>
            <div className="toggle-thumb"></div>
        </button>
    )
}

export default Toggle