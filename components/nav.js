import React from 'react';

const links = [
  { href: 'https://www.facebook.com/faithdeckmedia/', label: 'Facebook', target: '_blank' },
  { href: 'https://www.instagram.com/faithdeckmedia/', label: 'Instagram', target: '_blank' },
  { href: 'https://twitter.com/faithdeckmedia/', label: 'Twitter', target: '_blank' },
  { href: 'https://www.linkedin.com/company/faithdeckmedia/', label: 'LinkedIn', target: '_blank' },
  { href: 'https://github.com/faithdeck/', label: 'GitHub', target: '_blank' }
].map(link => {
  link.key = `nav-link-${link.href}-${link.label}`;
  return link;
});

const Nav = () => (
  <nav>
    <ul>
      {links.map(({ key, href, target, label }) => (
        <li key={key}>
          <a href={href} target={target}>{label}</a>
        </li>
      ))}
    </ul>

    <style jsx>{`
      :global(body) {
        margin: 0;
        font-family: -apple-system, BlinkMacSystemFont, Avenir Next, Avenir,
          Helvetica, sans-serif;
        width: 100vw;
        height: 100vh;
        position: relative;
        background-color: #664FEF;
        background: linear-gradient(160deg, #664FEF 0%, #F2994A 100%);
        color: white;
      }
      nav {
        text-align: center;
        align-self: flex-end;
        width: 100%;
        max-width: 880px;
        margin: 0 auto;
      }
      ul {
        display: flex;
        justify-content: space-between;
      }
      nav > ul {
        padding: 4px 16px;
      }
      li {
        display: flex;
        padding: 6px 8px;
      }
      a {
        color: white;
        text-decoration: none;
        font-size: 13px;
        transition: all 135ms cubic-bezier(.4,0,.2,1);
      }
      a:hover {
        opacity: 0.9;
      }
    `}</style>
  </nav>
)

export default Nav;
