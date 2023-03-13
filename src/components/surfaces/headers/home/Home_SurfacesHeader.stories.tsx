import { ComponentMeta, ComponentStory } from '@storybook/react';
import Home_SurfacesHeader, { Home_SurfacesHeaderProps } from './Home_SurfacesHeader';
import { mockHome_SurfacesHeader } from './Home_SurfacesHeader.mocks';

export default {
  title: 'Surfaces/Headers/Home',
  component: Home_SurfacesHeader,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {},
} as ComponentMeta<typeof Home_SurfacesHeader>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof Home_SurfacesHeader> = (args) => (
  <Home_SurfacesHeader {...args} />
);

export const Base = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args

Base.args = {
  ...mockHome_SurfacesHeader.base,
} as Home_SurfacesHeaderProps;