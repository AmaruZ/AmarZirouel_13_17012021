import styled from 'styled-components'
import Feature from '../../components/Feature'
import Hero from '../../components/Hero'
import { ScreenReaderOnlyH2 } from '../../utils/style/Atoms'

const HomeContainer = styled.main`
    flex: 1;
`

const FeaturesContainer = styled.section`
    display: flex;
    flex-direction: column;
    background-color: white;

    @media (min-width: 920px) {
        flex-direction: row;
    }
`

function Home() {
    const subtitles = ['No fees', 'No minimum deposit', 'High interest rates']
    return (
        <HomeContainer>
            <Hero subtitles={subtitles}>
                Open a savings account with Argent Bank today!
            </Hero>
            <FeaturesContainer>
                <ScreenReaderOnlyH2>Features</ScreenReaderOnlyH2>
                <Feature type="Chat" title="You are our #1 priority">
                    Need to talk to a representative? You can get in touch
                    through our 24/7 chat or through a phone call in less than 5
                    minutes.
                </Feature>
                <Feature type="Money" title="More savings means higher rates">
                    The more you save with us, the higher your interest rate
                    will be!
                </Feature>
                <Feature type="Security" title="Security you can trust">
                    We use top of the line encryption to make sure your data and
                    money is always safe.
                </Feature>
            </FeaturesContainer>
        </HomeContainer>
    )
}

export default Home
