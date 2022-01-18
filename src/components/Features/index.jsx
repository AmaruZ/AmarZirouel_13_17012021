import iconChat from '../../assets/icon-chat.png'
import iconMoney from '../../assets/icon-money.png'
import iconSecurity from '../../assets/icon-security.png'

function Features({ type, title, children }) {
    const icon = {
        Chat: iconChat,
        Money: iconMoney,
        Security: iconSecurity,
    }
    return (
        <div className="feature-item">
            <img
                src={icon[type]}
                alt={`${type} Icon`}
                className="feature-icon"
            />
            <h3 className="feature-item-title">{title}</h3>
            <p>{children}</p>
        </div>
    )
}

export default Features
