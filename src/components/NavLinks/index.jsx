import P from 'prop-types';
import * as Styled from './styles';
import { MenuLink } from '../MenuLink';

// vou receber os objetos link newtab children "Nav pai dos links"
export const NavLinks = ({ links = [] }) => {
  return (
    <Styled.Container>
      {links.map((link) => (
        <MenuLink key={link.link} {...link} />
      ))}
    </Styled.Container>
  );
};

NavLinks.propTypes = {
  links: P.arrayOf(
    P.shape({
      children: P.string.isRequired,
      link: P.string.isRequired,
      newTab: P.bool,
    }),
  ),
};
