import { Spinner_Inputs } from "../../inputs/spinner/Spinner_Inputs";

interface Loader_FeedbackProps { }

export const Loader_Feedback = ({ ...props }: Loader_FeedbackProps) => {
  return (
    <div className="z-50 w-full h-full fixed block bg-tertiary">
      <Spinner_Inputs
        selected_color_primary="fill-primary"
        selected_color_secondary="text-secondary"
        selected_size="medium"
      />
    </div>
  );
};
