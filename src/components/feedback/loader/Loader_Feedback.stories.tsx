import { ComponentMeta, ComponentStory } from '@storybook/react';

import { Loader_Feedback } from './Loader_Feedback';

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: 'Feedback/Loader',
  component: Loader_Feedback,
} as ComponentMeta<typeof Loader_Feedback>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof Loader_Feedback> = (args) => <Loader_Feedback {...args} />;

export const Loader = Template.bind({});
Loader.args = {};