import './Footer.css';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer>
      <p className='footerText'>
        &copy; {currentYear}. Made with{' '}
        <span role="img" aria-label="love" style={{ color: 'red' }}>
          ❤️
        </span>
        {' '}
        by{' '}
        <strong>
          <a style={{ color: '#ffffff', textDecoration: 'none' }}
            href="https://github.com/Chamal1120/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Chamal Randika
          </a>
        </strong>
      </p>
    </footer>
  );
};

export default Footer;

