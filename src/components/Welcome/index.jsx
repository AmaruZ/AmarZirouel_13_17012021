import { useRef, useState } from 'react'
import { useDispatch } from 'react-redux'
import styled from 'styled-components'
import { editProfile } from '../../features/profile'
import { StyledInput } from '../../utils/style/Atoms'
import { StyledButton } from '../../utils/style/Atoms'
import colors from '../../utils/style/colors'

const WelcomeContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
`

const WelcomeTitle = styled.h1`
    color: ${colors.black};
    font-weight: 600;
`

const EditButton = styled(StyledButton)`
    color: ${colors.violet};
    background: white;
    width: 150px;
    margin-top: 15px;
    align-self: ${(props) => props.flex || 'flex-start'};
    &:active {
        background-color: ${colors.violet};
        color: white;
    }
`

const EditContainer = styled.div`
    display: flex;
`

const EditWrapper = styled.div`
    display: flex;
    flex-direction: column;
    margin: 0 20px;
`

function Welcome({ firstName, lastName }) {
    const [isEditing, setEdit] = useState(false)
    const dispatch = useDispatch()
    const firstNameRef = useRef()
    const lastNameRef = useRef()

    return (
        <WelcomeContainer className="header">
            {isEditing ? (
                <>
                    <WelcomeTitle>Welcome back</WelcomeTitle>
                    <EditContainer>
                        <EditWrapper>
                            <StyledInput
                                type="text"
                                placeholder={firstName}
                                ref={firstNameRef}
                            />
                            <EditButton
                                onClick={() => {
                                    dispatch(
                                        editProfile(
                                            firstNameRef.current.value,
                                            lastNameRef.current.value
                                        )
                                    )
                                    setEdit(false)
                                }}
                                flex="flex-end"
                            >
                                Save
                            </EditButton>
                        </EditWrapper>
                        <EditWrapper>
                            <StyledInput
                                type="text"
                                placeholder={lastName}
                                ref={lastNameRef}
                            />

                            <EditButton onClick={() => setEdit(false)}>
                                Cancel
                            </EditButton>
                        </EditWrapper>
                    </EditContainer>
                </>
            ) : (
                <>
                    <WelcomeTitle>
                        Welcome back
                        <br />
                        {`${firstName} ${lastName}`}
                    </WelcomeTitle>
                    <StyledButton
                        className="edit-button"
                        onClick={() => setEdit(true)}
                    >
                        Edit Name
                    </StyledButton>
                </>
            )}
        </WelcomeContainer>
    )
}

export default Welcome
