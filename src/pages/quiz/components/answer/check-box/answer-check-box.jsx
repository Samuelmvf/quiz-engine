import { useFormContext } from "react-hook-form";
import Checkbox from "@/components/check-box/check-box.jsx";
import {NOT_APPLICABLE} from "@/constants/constants.js";

const AnswerCheckBox = ({ options = [], answer }) => {
  const { register, setValue, watch } = useFormContext();

  const defaultAnswerValue = answer === NOT_APPLICABLE || !answer ? [] : answer;

  const questionAnswers = watch("answer", defaultAnswerValue);

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
          value: defaultAnswerValue
        })}
      />
    </>
  )
}

export default AnswerCheckBox;