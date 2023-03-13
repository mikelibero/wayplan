
export interface Button_InputsProps {
  selected_bg?: 'bg-primary' | 'bg-secondary' | 'bg-tertiary' | 'bg-transparent';
  selected_text_color?: 'text-black' | 'text-tertiary';
  selected_font_weight?: 'font-light' | 'font-normal' | 'font-bold';
  selected_width?: 'small' | 'medium' | 'large' | 'full';
  selected_font_size?: 'text-sm' | 'text-base' | 'text-xl';
  selected_letter_spacing?: 'tracking-tight' | 'tracking-normal' | 'tracking-wide';
  outlined: true | false;
  selected_border_color?: 'border-primary' | 'border-tertiary';
  rounded: true | false;
  label: string;
  onClick?: () => void;
}

export const Button_Inputs = ({
  selected_bg = 'bg-primary',
  selected_text_color = 'text-tertiary',
  selected_font_weight = 'font-light',
  selected_width = 'small',
  selected_font_size = 'text-sm',
  selected_letter_spacing = 'tracking-normal',
  selected_border_color = 'border-primary',
  outlined,
  rounded,
  label,
  ...props
}: Button_InputsProps) => {
  const bg = selected_bg ? selected_bg : 'bg-primary';
  const text_color = selected_text_color ? selected_text_color : 'text-black';
  const font_weight = selected_font_weight ? selected_font_weight : 'font-normal';
  let width = 'w-32';
  switch (selected_width) {
    case 'small':
      width = 'w-32';
      break;
    case 'medium':
      width = 'w-64';
      break;
    case 'large':
      width = 'w-96';
      break;
    case 'full':
      width = 'w-full';
      break;
  }
  const font_size = selected_font_size ? selected_font_size : 'text-base';
  const letter_spacing = selected_letter_spacing ? selected_letter_spacing : 'tracking-tight';
  const radius = rounded ? 'rounded-lg' : 'rounded-sm';
  const border_color = selected_border_color && outlined ? selected_border_color + ' border-solid border-2' : '';
  let transition = '';
  switch (selected_bg) {
    case 'bg-primary':
      transition = 'hover:-translate-y-1 hover:scale-110 duration-300 hover:bg-primary/90';
      break;
    case 'bg-secondary':
      transition = 'hover:-translate-y-1 hover:scale-110 duration-300 hover:bg-primary/20';
      break;
    case 'bg-tertiary':
      transition = 'hover:-translate-y-1 hover:scale-110 duration-300 hover:text-secondary hover:border-primary hover:bg-primary/90';
      break;
    case 'bg-transparent':
      transition = 'hover:-translate-y-1 hover:scale-110  duration-300';
      break;
  }
  return (
    <button
      type="button"
      className={[bg, text_color, font_weight, width, font_size, letter_spacing, radius, border_color, transition, 'font-primary', 'p-2.5'].join(' ')}
      {...props}
    >
      {label}
    </button>
  );
};
