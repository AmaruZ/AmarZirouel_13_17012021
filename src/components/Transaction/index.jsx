import { faChevronUp, faPen } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { useState } from 'react'
import styled from 'styled-components'
import colors from '../../utils/style/colors'

const TransactionContainer = styled.li`
    position: relative;
    background: white;
    border: 1px solid ${colors.grey};
    font-weight: 500;
    cursor: pointer;
    overflow: hidden;
`
const TransactionInformations = styled.div`
    display: flex;
    justify-content: space-around;
    padding: 10px;
`
const TransactionDetail = styled.div`
    display: flex;
    height: ${(props) => (props.$extended ? '80px' : '0')};
    flex-direction: column;
    align-items: flex-start;
    transition: height 0.3s linear;
`
const ChevronIcon = styled(FontAwesomeIcon)`
    position: absolute;
    top: 12px;
    left: 30px;
    ${(props) =>
        props.$extended
            ? `transform: rotate(180deg);`
            : `transform: rotate(0);`}
    transition: transform 0.3s linear;
`
function Transaction({ date, description, amount, balance }) {
    const [extended, setExtended] = useState(false)
    return (
        <TransactionContainer>
            <ChevronIcon icon={faChevronUp} $extended={extended} />
            <TransactionInformations onClick={() => setExtended(!extended)}>
                <span>{date}</span>
                <span>{description}</span>
                <span>{amount}</span>
                <span>{balance}</span>
            </TransactionInformations>
            <div style={{ display: 'flex', justifyContent: 'space-around' }}>
                <TransactionDetail $extended={extended}>
                    <span>Transaction Type: Electronic</span>
                    <div style={{ display: 'flex', marginTop: '10px' }}>
                        <span style={{ marginRight: '10px' }}>Category: </span>
                        <DropDown />
                    </div>
                    <div style={{ display: 'flex', marginTop: '10px' }}>
                        <span style={{ marginRight: '10px' }}>Notes: </span>
                        <TextInput />
                    </div>
                </TransactionDetail>
                <span></span>
                <span></span>
                <span></span>
            </div>
        </TransactionContainer>
    )
}

function DropDown() {
    const [selectedValue, setSelectedValue] = useState('Food')
    const [showDropDown, setShowDropDown] = useState(false)
    return (
        <>
            {showDropDown ? (
                <select
                    value={selectedValue}
                    onChange={(e) => {
                        setSelectedValue(e.target.value)
                        setShowDropDown(false)
                    }}
                >
                    <option value={'Food'}>Food</option>
                    <option value={'Travel'}>Travel</option>
                    <option value={'Bills'}>Bills</option>
                    <option value={'Entertainment'}>Entertainment</option>
                </select>
            ) : (
                <div>
                    {selectedValue}{' '}
                    <FontAwesomeIcon
                        icon={faPen}
                        onClick={() => setShowDropDown(true)}
                    />
                </div>
            )}
        </>
    )
}

function TextInput() {
    const [showTextInput, setShowTextInput] = useState(false)
    const [notes, setNotes] = useState('')

    return (
        <>
            {showTextInput ? (
                <input
                    type={'text'}
                    onChange={(e) => setNotes(e.target.value)}
                    onKeyPress={(e) => {
                        if (e.key === 'Enter') setShowTextInput(false)
                    }}
                />
            ) : (
                <span>
                    {notes}{' '}
                    <FontAwesomeIcon
                        icon={faPen}
                        onClick={() => setShowTextInput(true)}
                    />
                </span>
            )}
        </>
    )
}

export default Transaction
