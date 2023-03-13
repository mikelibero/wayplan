import { ComponentMeta, ComponentStory } from '@storybook/react';
import Navbar_Navigation, { Navbar_NavigationProps } from './Navbar_Navigation';
import { mockNavbar_Navigation } from './Navbar_Navigation.mocks';

export default {
  title: 'Navigations/Navbar',
  component: Navbar_Navigation,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {},
} as ComponentMeta<typeof Navbar_Navigation>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof Navbar_Navigation> = (args) => (
  <Navbar_Navigation {...args} />
);

export const Base = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args

Base.args = {
  ...mockNavbar_Navigation.base,
} as Navbar_NavigationProps;