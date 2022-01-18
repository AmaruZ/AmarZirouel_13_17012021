import { useState } from 'react'

function Welcome() {
    const [isEditing, setEdit] = useState(false)

    return (
        <div className="header">
            {isEditing ? (
                <>
                    <h1>Welcome back</h1>
                    <input type="text" placeholder="Tony" />
                    <input type="text" placeholder="Jarvis" />
                    <button onClick={() => setEdit(false)}>Save</button>
                    <button onClick={() => setEdit(false)}>Cancel</button>
                </>
            ) : (
                <>
                    <h1>
                        Welcome back
                        <br />
                        Tony Jarvis!
                    </h1>
                    <button
                        className="edit-button"
                        onClick={() => setEdit(true)}
                    >
                        Edit Name
                    </button>
                </>
            )}
        </div>
    )
}

export default Welcome
