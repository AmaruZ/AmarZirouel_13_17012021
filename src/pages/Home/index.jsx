import Features from '../../components/Features'

function Home() {
    return (
        <main>
            <div className="hero">
                <section className="hero-content">
                    <h2 className="sr-only">Promoted Content</h2>
                    <p className="subtitle">No fees.</p>
                    <p className="subtitle">No minimum deposit.</p>
                    <p className="subtitle">High interest rates.</p>
                    <p className="text">
                        Open a savings account with Argent Bank today!
                    </p>
                </section>
            </div>
            <section className="features">
                <h2 className="sr-only">Features</h2>
                <Features type="Chat" title="You are our #1 priority">
                    Need to talk to a representative? You can get in touch
                    through our 24/7 chat or through a phone call in less than 5
                    minutes.
                </Features>
                <Features type="Money" title="More savings means higher rates">
                    The more you save with us, the higher your interest rate
                    will be!
                </Features>
                <Features type="Security" title="Security you can trust">
                    We use top of the line encryption to make sure your data and
                    money is always safe.
                </Features>
            </section>
        </main>
    )
}

export default Home
