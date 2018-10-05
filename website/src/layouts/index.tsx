import * as React from 'react'
import Helmet from 'react-helmet'
import Footer from '../components/Footer'
import Header from '../components/Header'

interface DefaultLayoutProps extends React.HTMLProps<HTMLDivElement> {
    location: {
        pathname: string
    }
    children: any
}

interface DefaultLayoutStates {
    sidebarVisible: boolean
}

export default class DefaultLayout extends React.PureComponent<DefaultLayoutProps, DefaultLayoutStates> {
    public state: any = { sidebarVisible: false }

    public toggleSidebar(): void {
        this.setState({ sidebarVisible: !this.state.sidebarVisible })
    }

    public render(): JSX.Element | null {
        const pathname = this.props.location.pathname
        const isHome = pathname === '/'
        const isProductPage = pathname.startsWith('/product/')
        const desc =
            'Sourcegraph is a free, self-hosted code search and intelligence server that helps developers find, review, understand, and debug code. Use it with any Git code host for teams from 1 to 10,000+.'
        return (
            <div className="flex flex-column fill-height">
                <Helmet>
                    <title>Sourcegraph - Code search and intelligence</title>
                    <meta name="twitter:title" content="Sourcegraph" />
                    <meta name="twitter:site" content="@srcgraph" />
                    <meta name="twitter:image" content="https://about.sourcegraph.com/sourcegraph-mark.png" />
                    <meta name="twitter:card" content="summary" />
                    <meta name="twitter:description" content={desc} />

                    <meta property="og:type" content="website" />
                    <meta property="og:title" content="Sourcegraph" />
                    <meta property="og:image" content="https://about.sourcegraph.com/sourcegraph-mark.png" />
                    <meta property="og:description" content={desc} />

                    <meta name="description" content={desc} />
                    <link rel="icon" type="image/png" href="https://about.sourcegraph.com/favicon.png" />
                    <link rel="icon" type="image/png" href="https://about.sourcegraph.com/sourcegraph-mark.png" />
                    <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0" />
                </Helmet>
                <Header isHome={isHome} isProductPage={isProductPage} />
                <section className="d-flex flex-column fill-height">{this.props.children()}</section>
                <Footer />
            </div>
        )
    }
}