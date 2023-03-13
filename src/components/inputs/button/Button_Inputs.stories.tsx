import { ComponentMeta, ComponentStory } from '@storybook/react';
import { Button_Inputs, Button_InputsProps } from './Button_Inputs';
import { mockButton_InputsProps } from './Button_Inputs.mocks';

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: 'Inputs/Button',
  component: Button_Inputs,
  argTypes: {
    outlined: {
      control: 'boolean',
    },
    selected_border_color: { if: { arg: 'outlined' } },
    rounded: {
      control: 'boolean',
    },
  },
  parameters: {
    backgrounds: {
      default: 'light',
      values: [
        { name: 'light', value: '#fff' },
        { name: 'dark', value: '#292524' },
      ],
    },
  },
} as ComponentMeta<typeof Button_Inputs>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof Button_Inputs> = (args) => <Button_Inputs {...args} />;

export const ContainedLight = Template.bind({});
ContainedLight.args = {
  ...mockButton_InputsProps.ContainedLight,
} as Button_InputsProps;

export const OutlinedLight = Template.bind({});
OutlinedLight.args = {
  ...mockButton_InputsProps.OutlinedLight,
} as Button_InputsProps;

export const RoundedLight = Template.bind({});
RoundedLight.args = {
  ...mockButton_InputsProps.RoundedLight,
} as Button_InputsProps;

export const OutlinedDark = Template.bind({});
OutlinedDark.args = {
  ...mockButton_InputsProps.OutlinedDark,
} as Button_InputsProps;
OutlinedDark.parameters = {
  backgrounds: { default: 'dark' },
};


