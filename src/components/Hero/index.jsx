import styled from 'styled-components'
import backgroundImage from '../../assets/bank-tree.jpeg'
import { ScreenReaderOnlyH2 } from '../../utils/style/Atoms'

const HeroContainer = styled.div`
    background-image: url(${backgroundImage});
    background-position: 0 -50px;
    background-size: cover;
    background-repeat: no-repeat;
    height: 300px;
    position: relative;

    @media (min-width: 920px) {
        height: 400px;
        background-position: 0% 33%;
    }
`

const HeroContent = styled.section`
    position: relative;
    top: 2rem;
    width: 200px;
    background: white;
    padding: 2rem;
    text-align: left;
    margin: 0 auto;

    @media (min-width: 920px) {
        position: absolute;
        top: 50px;
        right: 50px;
        width: 300px;
        margin: 2rem;
    }
`

const HeroSubtitle = styled.p`
    font-weight: bold;
    font-size: 1rem;
    margin: 0;

    @media (min-width: 920px) {
        font-size: 1.5rem;
    }
`

const HeroText = styled.p`
    margin-bottom: 0;
    font-size: 0.9rem;

    @media (min-width: 920px) {
        font-size: 1.2rem;
    }
`

/**
 * Create the hero component in home page
 * @param {Object} props
 * @param {String} props.subtitles
 * @param {String} props.children
 * @returns {JSX.Element}
 */

function Hero({ subtitles, children }) {
    const listSubtitles = subtitles.map((sub, index) => (
        <HeroSubtitle key={sub + index} className="subtitle">
            {sub}
        </HeroSubtitle>
    ))
    return (
        <HeroContainer>
            <HeroContent>
                <ScreenReaderOnlyH2>Promoted Content</ScreenReaderOnlyH2>
                {listSubtitles}
                <HeroText className="text">{children}</HeroText>
            </HeroContent>
        </HeroContainer>
    )
}

export default Hero
