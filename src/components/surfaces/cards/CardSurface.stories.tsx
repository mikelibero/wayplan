import { ComponentMeta, ComponentStory } from '@storybook/react';
import CardSurface, { ICardSurface } from './CardSurface';
import { mockCardSurfaceProps } from './CardSurface.mocks';

export default {
  title: 'surfaces/CardSurface',
  component: CardSurface,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {},
} as ComponentMeta<typeof CardSurface>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof CardSurface> = (args) => (
  <CardSurface {...args} />
);

export const Base = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args

Base.args = {
  ...mockCardSurfaceProps.base,
} as ICardSurface;