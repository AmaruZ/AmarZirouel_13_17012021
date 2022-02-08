import { useCallback } from 'react'
import { useNavigate } from 'react-router-dom'
import styled from 'styled-components'
import { StyledButton } from '../../utils/style/Atoms'
import colors from '../../utils/style/colors'

const AccountContainer = styled.section`
    display: flex;
    justify-content: space-between;
    align-items: center;
    border: 2px solid ${colors.grey};
    background-color: #fff;
    width: 80%;
    margin: 0 auto;
    flex-direction: column;
    padding: 1.5rem;
    box-sizing: border-box;
    margin-bottom: 2rem;
    @media (min-width: 720px) {
        flex-direction: row;
    }
`
const AccountWrapper = styled.div`
    font-weight: 600;
    flex: 1;
    width: 100%;

    @media (min-width: 720px) {
        width: auto;
        text-align: left;
        flex: 0;
    }
`

const AccountTitle = styled.h3`
    margin: 0;
    padding: 0;
    font-size: 1rem;
    white-space: nowrap;
`
const AccountAmount = styled.p`
    margin: 0;
    font-size: 2.5rem;
    font-weight: 700;
`

const AccountDescription = styled.p`
    margin: 0 0 20px 0;
    @media (min-width: 720px) {
        margin: 0;
    }
`

/**
 * Add an account in Profile page
 * @param {Object} props
 * @param {String} props.name
 * @param {String | Number} props.balance
 * @returns {JSX.Element}
 */

function Account({ name, balance }) {
    const navigate = useNavigate()
    const handleOnClick = useCallback(
        () => navigate('/transactions', { replace: true }),
        [navigate]
    )
    return (
        <AccountContainer>
            <AccountWrapper>
                <AccountTitle className="account-title">{name}</AccountTitle>
                <AccountAmount className="account-amount">
                    {balance}
                </AccountAmount>
                <AccountDescription>Available Balance</AccountDescription>
            </AccountWrapper>
            <AccountWrapper>
                <StyledButton onClick={handleOnClick}>
                    View transactions
                </StyledButton>
            </AccountWrapper>
        </AccountContainer>
    )
}

export default Account

// @media (min-width: 720px) {

//     .account-content-wrapper.cta {
//         flex: 0;
//     }

//     .transaction-button {
//         width: 200px;
//     }
// }

// .account-content-wrapper {
//     width: 100%;
//     flex: 1;
// }
