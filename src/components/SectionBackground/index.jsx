import P from 'prop-types';
import { SectionContainer } from '../SectionContainer';
import * as Styled from './styles';

//background nos deus a opção da pessoa colocar se ela quer ou não background
//Quando usar SectionBackground a SectionContainer vem junto
export const SectionBackground = ({ children, background = false }) => {
  return (
    <Styled.Container background={background}>
      <SectionContainer>{children}</SectionContainer>
    </Styled.Container>
  );
};

SectionBackground.propTypes = {
  children: P.node.isRequired,
  background: P.bool,
};
