import { useRef, useState } from 'react'
import { useDispatch } from 'react-redux'
import { editProfile } from '../../features/profile'

function Welcome({ firstName, lastName }) {
    const [isEditing, setEdit] = useState(false)
    const dispatch = useDispatch()
    const firstNameRef = useRef()
    const lastNameRef = useRef()

    return (
        <div className="header">
            {isEditing ? (
                <>
                    <h1>Welcome back</h1>
                    <input
                        type="text"
                        placeholder={firstName}
                        ref={firstNameRef}
                    />
                    <input
                        type="text"
                        placeholder={lastName}
                        ref={lastNameRef}
                    />
                    <button
                        onClick={() => {
                            dispatch(
                                editProfile(
                                    firstNameRef.current.value,
                                    lastNameRef.current.value
                                )
                            )
                            setEdit(false)
                        }}
                    >
                        Save
                    </button>
                    <button onClick={() => setEdit(false)}>Cancel</button>
                </>
            ) : (
                <>
                    <h1>
                        Welcome back
                        <br />
                        {`${firstName} ${lastName}`}
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
