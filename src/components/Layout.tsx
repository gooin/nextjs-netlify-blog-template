import Head from 'next/head';
import Navigation from './Navigation';

type Props = {
    children: React.ReactNode;
};
export default function Layout({ children }: Props) {
    return (
        <div className="root">
            <Head>
                <meta charSet="utf-8"/>
                <meta name="viewport" content="width=device-width, initial-scale=1"/>
                <link rel="manifest" href="/site.webmanifest"/>
                <link rel="apple-touch-icon" href="/icon.png"/>
                <meta name="theme-color" content="#fff"/>
            </Head>
            <nav>
                <Navigation/>
            </nav>
            <main>{children}</main>
            <style jsx>
                {`
                  .root {
                    display: block;
                    padding: 4rem 0;
                    box-sizing: border-box;
                    min-height: 100%;
                    //background-color: #e493d0;
                    background-image: radial-gradient(closest-side, rgba(102, 204, 255, 0.45), rgba(173, 216, 230, 0)),
                    radial-gradient(closest-side, rgba(99, 255, 251, 0.67), rgba(238, 192, 198, 0)),
                    radial-gradient(closest-side, rgba(138, 246, 196, 0.58), rgba(238, 192, 198, 0)),
                    radial-gradient(closest-side, rgba(126, 231, 250, 0.32), rgba(238, 192, 198, 0));
                    background-size: 130vmax 130vmax, 90vmax 90vmax, 100vmax 100vmax, 150vmax 150vmax;
                    background-position: 0vmax 0vmax,69vmax -2vmax,-66vmax -64vmax, -32vmax, -15vmax;
                    background-repeat: no-repeat;
                    animation: 10s movement infinite;
                  }

                  @keyframes movement {
                    0%, 100% {
                      background-size: 130vmax 130vmax, 90vmax 90vmax, 100vmax 100vmax, 150vmax 150vmax;
                      background-position: 0vmax 0vmax,69vmax -2vmax,-66vmax -64vmax, -32vmax, -15vmax;
                    }
                    25% {
                      background-size: 100vmax 100vmax, 90vmax 90vmax, 100vmax 100vmax, 150vmax 150vmax;
                      background-position: 10vmax 10vmax,49vmax -20vmax,-26vmax -26vmax, -2vmax, -15vmax;
                    }
                    50% {
                      background-size: 150vmax 150vmax, 90vmax 90vmax, 100vmax 100vmax, 150vmax 150vmax;
                      background-position: 0vmax 0vmax,29vmax -40vmax,10vmax -10vmax, 22vmax, 25vmax;
                    }
                    75% {
                      background-size: 130vmax 130vmax, 90vmax 90vmax, 100vmax 100vmax, 150vmax 150vmax;
                      background-position: -10vmax -10vmax,49vmax -0vmax, -20vmax 10vmax, -32vmax, -15vmax;
                    }
                  }

                  main {
                    display: flex;
                    min-height: 100%;
                  }

                  @media (min-width: 769px) {
                    .root {
                      display: flex;
                      flex: 1 0 auto;
                    }

                    main {
                      flex: 1 0 auto;
                    }
                  }
                `}
            </style>
        </div>
    );
}
