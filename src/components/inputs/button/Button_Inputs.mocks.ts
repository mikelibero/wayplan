import { Button_InputsProps } from './Button_Inputs';

const ContainedLight: Button_InputsProps = {
  selected_bg: 'bg-secondary',
  selected_text_color: 'text-black',
  selected_width: 'small',
  selected_font_size: 'text-sm',
  selected_letter_spacing: 'tracking-normal',
  label: 'BUTTON',
  outlined: false,
  rounded: false
};

const OutlinedLight: Button_InputsProps = {
  selected_bg: 'bg-secondary',
  selected_text_color: 'text-black',
  selected_width: 'small',
  selected_font_size: 'text-sm',
  selected_letter_spacing: 'tracking-normal',
  label: 'BUTTON',
  outlined: true,
  rounded: false,
};

const RoundedLight: Button_InputsProps = {
  selected_bg: 'bg-secondary',
  selected_text_color: 'text-black',
  selected_width: 'small',
  selected_font_size: 'text-sm',
  selected_letter_spacing: 'tracking-normal',
  label: 'BUTTON',
  outlined: true,
  rounded: true,
};

const OutlinedDark: Button_InputsProps = {
  selected_bg: 'bg-primary',
  selected_text_color: 'text-tertiary',
  selected_width: 'small',
  selected_font_size: 'text-sm',
  selected_letter_spacing: 'tracking-normal',
  label: 'BUTTON',
  outlined: true,
  rounded: false,
  selected_border_color: 'border-tertiary'
};

export const mockButton_InputsProps = {
  ContainedLight,
  OutlinedLight,
  RoundedLight,
  OutlinedDark
};