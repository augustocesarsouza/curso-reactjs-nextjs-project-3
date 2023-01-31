import { GridTwoColumn } from '.';

export default {
  title: 'GridTwoColumn',
  component: GridTwoColumn,
  args: {
    title: 'Grid two columns',
    text: `Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptates unde similique eius,
    quidem quasi iusto, aliquid exercitationem nostrum quos assumenda illo tempore explicabo quam.
    Blanditiis, itaque harum! Ipsum, earum rem.`,
    srcImg: 'assets/images/javascript.svg',
  },
  argTypes: {
    children: { type: 'string' },
  },
};

export const Template = (args) => {
  return (
    <div>
      <GridTwoColumn {...args} />
    </div>
  );
};
