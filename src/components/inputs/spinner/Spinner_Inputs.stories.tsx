import { ComponentMeta, ComponentStory } from '@storybook/react';

import { Spinner_Inputs } from './Spinner_Inputs';

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: 'Inputs/Spinner',
  component: Spinner_Inputs,
} as ComponentMeta<typeof Spinner_Inputs>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof Spinner_Inputs> = (args) => <Spinner_Inputs {...args} />;

export const Spinner = Template.bind({});
Spinner.args = {
  selected_color_primary: 'fill-secondary',
  selected_color_secondary: 'text-secondary',
  selected_size: 'small',
};
