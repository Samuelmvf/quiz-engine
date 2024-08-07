import { useRef } from "react";
import { useFormContext } from "react-hook-form";

import RadioButton from "@/components/radio-button/radio-button.jsx";

const AnswerRadioButton = ({ options = [], answer }) => {
  const radioButtonRef = useRef(null);

  const defaultRadioValue = Number.isInteger(answer) ? answer.toString() : ''

  const { watch, setValue, register } = useFormContext();
  const questionAnswer = watch("answer");

  return (
    <>
      {options.map(option => (
        <RadioButton
          ref={radioButtonRef}
          key={option.id}
          {...register("answer", { value: defaultRadioValue, required: "This field is required. Please choose one." })}
          name="answer"
          label={option.label}
          checked={questionAnswer === option.id}
          value={option.id}
          onChange={() => setValue("answer", option.id)}
        />
      ))}
    </>
  )
}

export default AnswerRadioButton;