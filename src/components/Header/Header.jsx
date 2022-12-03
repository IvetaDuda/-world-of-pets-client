import style from './Header.module.scss';
import Container from 'components/Container';

const Header = ({ children }) => {
  return (
    <Container>
      <header className={style.topGap}>
        {/* <!-- Navbar --> */}
        <nav>
          <div className={style.navWrap}>{children}</div>
        </nav>
      </header>
    </Container>
  );
};

export default Header;
