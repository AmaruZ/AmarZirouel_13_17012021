import React from 'react'
import { useSelector } from 'react-redux'
import { Navigate } from 'react-router-dom'
import styled from 'styled-components'
import Transaction from '../../components/Transaction'
import { selectLogin } from '../../utils/selectors'
import colors from '../../utils/style/colors'
import { transactions } from '../../utils/transactions'

const TransactionsContainer = styled.main`
    flex: 1;
    display: flex;
    flex-direction: column;
    align-items: center;
    background: ${colors.lightGrey};
`
const AccountWrapper = styled.div`
    width: 100vw;
    border: 2px solid ${colors.grey};
    background: white;
    margin-bottom: 50px;
`
const AccountTitle = styled.h1`
    font-size: 1rem;
    font-weight: 600;
    margin-top: 30px;
    margin-bottom: 5px;
`
const AccountBalance = styled.p`
    font-size: 2.5rem;
    font-weight: 700;
    margin: 0;
`
const AccountText = styled.p`
    font-size: 1rem;
    margin-top: 5px;
    margin-bottom: 30px;
`
const TransactionsWrapper = styled.div`
    width: 90vw;
`
const TransactionsTitleWrapper = styled.div`
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    font-weight: 500;
`
function Transactions() {
    const login = useSelector(selectLogin)
    const listTransactions = Object.entries(transactions).map(
        ([key, transaction], index) => (
            <React.Fragment key={key.toString()}>
                {
                    <Transaction
                        date={transaction.date}
                        description={transaction.description}
                        amount={transaction.amount}
                        balance={transaction.balance}
                    />
                }
            </React.Fragment>
        )
    )

    return login.isLogged ? (
        <TransactionsContainer>
            <AccountWrapper>
                <AccountTitle>Argent Bank Checking (x8349)</AccountTitle>
                <AccountBalance>$2,082.79</AccountBalance>
                <AccountText>Available Balance</AccountText>
            </AccountWrapper>
            <TransactionsWrapper>
                <TransactionsTitleWrapper>
                    <span>DATE</span>
                    <span>DESCRIPTION</span>
                    <span>AMOUNT</span>
                    <span>BALANCE</span>
                </TransactionsTitleWrapper>

                <ul style={{ padding: '0' }}>{listTransactions}</ul>
            </TransactionsWrapper>
        </TransactionsContainer>
    ) : (
        <Navigate to={'/'} />
    )
}

export default Transactions
