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
const EditInput = styled(StyledInput)`
    margin: 0 15px;
    @media (max-width: 720px) {
        margin: 5px 0;
    }
`

const EditButton = styled(StyledButton)`
    color: ${colors.violet};
    background: white;
    width: 150px;
    margin: 15px 15px;
    &:active {
        background-color: ${colors.violet};
        color: white;
    }
    @media (max-width: 720px) {
        margin: 10px 0;
    }
`

const EditContainer = styled.div`
    display: flex;
    flex-direction: column;
`

const EditWrapper = styled.div`
    display: flex;
    justify-content: center;
    margin: 0 20px;
    @media (max-width: 720px) {
        flex-direction: column;
        align-items: center;
    }
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
                            <EditInput
                                type="text"
                                placeholder={firstName}
                                ref={firstNameRef}
                            />
                            <EditInput
                                type="text"
                                placeholder={lastName}
                                ref={lastNameRef}
                            />
                        </EditWrapper>
                        <EditWrapper>
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
                        style={{ marginBottom: '15px' }}
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
