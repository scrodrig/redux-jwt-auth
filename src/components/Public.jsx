import { Link } from 'react-router-dom'

const Public = () => {
    const content = (
        <section className="public">
            <header>
                <h1>Welcome to Repair Store!</h1>
            </header>
            <main>
                <p>
                    Located in Beautiful Downtown Porto City, Repair Store provides a trained staff ready to meet your
                    repair needs.
                </p>
                <p>&nbsp;</p>
                <address>
                    Repair Shop
                    <br />
                    4400 Foo Drive
                    <br />
                    Porto City, PT 4400
                    <br />
                    <a href="tel:+3515555555555">(351) 555-5555</a>
                </address>
            </main>
            <footer>
                <Link to="/login">Employee Login</Link>
            </footer>
        </section>
    )
    return content
}
export default Public
