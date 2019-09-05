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
