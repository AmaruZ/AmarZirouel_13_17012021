import styled from 'styled-components'
import iconChat from '../../assets/icon-chat.png'
import iconMoney from '../../assets/icon-money.png'
import iconSecurity from '../../assets/icon-security.png'

const FeatureContainer = styled.div`
    flex: 1;
    padding: 2.5rem;
`

const FeatureIcon = styled.img`
    width: 100px;
    border: 10px solid #00bc77;
    border-radius: 50%;
    padding: 1rem;
`

const FeatureTitle = styled.h3`
    color: #222;
    font-size: 1.25rem;
    font-weight: bold;
    margin-bottom: 0.5rem;
`

/**
 * Add a feature in home page
 * @param {Object} props
 * @param {String} props.type
 * @param {String} props.title
 * @param {String} props.children
 * @returns  {JSX.Element}
 */

function Feature({ type, title, children }) {
    const icon = {
        Chat: iconChat,
        Money: iconMoney,
        Security: iconSecurity,
    }
    return (
        <FeatureContainer>
            <FeatureIcon src={icon[type]} alt={`${type} Icon`} />
            <FeatureTitle>{title}</FeatureTitle>
            <p>{children}</p>
        </FeatureContainer>
    )
}

export default Feature
