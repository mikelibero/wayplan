import { ComponentMeta, ComponentStory } from '@storybook/react';
import Footer_Navigation, { Footer_NavigationProps } from './Footer_Navigation';
import { mockFooter_Navigation } from './Footer_Navigation.mocks';

export default {
  title: 'Navigations/Footer',
  component: Footer_Navigation,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {},
} as ComponentMeta<typeof Footer_Navigation>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof Footer_Navigation> = (args) => (
  <Footer_Navigation {...args} />
);

export const Base = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args

Base.args = {
  ...mockFooter_Navigation.base,
} as Footer_NavigationProps;