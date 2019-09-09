import React from 'react';
import Head from 'next/head';
import AOS from 'aos';
import Nav from '../components/nav';
import '../node_modules/aos/dist/aos.css';
import { initGA, logPageView } from '../utils/analytics';

class Home extends React.Component {
  
  componentDidMount() {
    // Setup Analytics
    if ( !window.GA_INITIALIZED ) {
      initGA();
      window.GA_INITIALIZED = true;
    }
    logPageView();
    // Run element animations
    this.runAOS();
  }

  runAOS()  {
			AOS.init({
				easing: 'ease-out-back',
				duration: 1000
			});	
  }

  render() {
    return(
      <div>
        <Head>
          <title>Faithdeck - Furthering the cause of Christ through digital technology and media.</title>
          <meta name="description" content="Furthering the cause of Christ through digital technology and media." />
          <meta name="theme-color" content="#664FEF" />
        </Head>

        <div className='wrapper' data-aos='fade-in' data-aos-easing='ease-in-out' data-aos-duration='4000' data-aos-delay='100'>
          <div className='hero'>
            <div className='hero-wrapper'>
              <h1 className='title'>Faithdeck</h1>
              <p className='description'>
                Furthering the cause of Christ through digital technology and media.
              </p>

              <div className='row'>
                <a className='card' href="mailto:hello@faithdeck.com?subject=Let's work together">Contact Us</a>
              </div>
            </div>
          </div>

          <Nav />
        </div>

        <style jsx>{`
          :global(html) {
            font-size: 62.5%; /* 1rem = 10px */
          }
          :global(body) {
            background-color: #664FEF;
            background: linear-gradient(160deg, #664FEF 0%, #F2994A 100%);
            margin: 0;
            font-family: 'Inter', -apple-system, BlinkMacSystemFont, 'Helvetica Neue', Helvetica, sans-serif;
            font-size: 1.8rem;
            letter-spacing: -0.015em;
            width: 100vw;
            height: 100vh;
            position: relative;
            color: white;
	          box-sizing: border-box;
          }
          *,
          *:before,
          *:after {
              -webkit-box-sizing: inherit;
              -moz-box-sizing: inherit;
              box-sizing: inherit;
              -webkit-font-smoothing: antialiased;
              word-break: break-word;
              word-wrap: break-word;
          }
          @font-face {
            font-family: 'Inter';
            font-style:  normal;
            font-weight: 400;
            font-display: auto;
            src: url('/static/fonts/inter/Inter-Regular.woff2') format('woff2'),
              url('/static/fonts/inter/Inter-Regular.woff') format('woff');
          }
          @font-face {
            font-family: 'Inter';
            font-style:  normal;
            font-weight: 700;
            font-display: auto;
            src: url('/static/fonts/inter/Inter-Bold.woff2') format('woff2'),
              url('/static/fonts/inter/Inter-Bold.woff') format('woff');
          }
          @media ( prefers-reduced-motion: reduce ) {
            * {
              animation-duration: 0s !important;
              transition-duration: 0s !important;
            }
          }
          .wrapper {
            width: 100vw;
            height: 100vh;
            display: flex;
            flex-direction: column;
            align-items: space-around;
            justify-content: space-between;
          }
          .hero {
            width: 100%;
            flex-grow: 1;
            display: flex;
          }
          .hero-wrapper {
            align-self: center;
            width: 100%;
            padding: 0 2rem;
          }
          .title {
            margin: 0;
            width: 100%;
            padding-top: 80px;
            line-height: 1.15;
            font-size: 48px;
          }
          .title,
          .description {
            text-align: center;
          }
          .row {
            max-width: 880px;
            margin: 2rem auto 2rem;
            display: flex;
            flex-direction: row;
            justify-content: space-around;
          }
          .card {
            padding: 1.2rem 2rem;
            text-align: center;
            text-decoration: none;
            text-transform: uppercase;
            color: white;
            background-color: rgba(0,0,0,0.1);
            transition: all 135ms cubic-bezier(.4,0,.2,1);
            font-size: 14px;
          }
          .card:hover {
            background-color: rgba(0,0,0,0.2);
          }
        `}</style>
      </div>
    );
  }

}

export default Home;
