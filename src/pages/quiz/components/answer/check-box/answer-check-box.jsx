import { useFormContext } from "react-hook-form";
import Checkbox from "@/components/check-box/check-box.jsx";

const AnswerCheckBox = ({ options = [] }) => {

  const { register, setValue, watch, formState: { errors } } = useFormContext();
  const { answer } = errors;

  const questionAnswers = watch("answer", []);

  const handleToggleCheckBoxSelection = (selected) => {
    const newSelectedAnswers = questionAnswers.includes(selected)
      ? questionAnswers.filter(item => item !== selected)
      : [...questionAnswers, selected];

    setValue("answer", newSelectedAnswers);
  }

  return (
    <>
      {options.map(option =>
        <Checkbox
          key={option.id}
          label={option.label}
          checked={questionAnswers.includes(option.id)}
          onChange={() => handleToggleCheckBoxSelection(option.id)}
        />
      )}
      <input
        type="hidden"
        {...register("answer", {
          required: "Select at least one check box",
        })}
      />
    </>
  )
}

export default AnswerCheckBox;