import { screen } from '@testing-library/react';
import { GridTwoColumn } from '.';
import { renderTheme } from '../../styles/render-theme';

describe('<GridTwoColumn />', () => {
  it('should render', () => {
    renderTheme(<GridTwoColumn>Children</GridTwoColumn>);
    expect(screen.getByRole('heading')).toBeInTheDocument();
  });
});
