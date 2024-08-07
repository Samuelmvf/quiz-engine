import { useRef } from "react";
import { useFormContext } from "react-hook-form";

import { NOT_APPLICABLE } from "@/constants/constants.js";

import TextArea from "@/components/text-area/text-area.jsx";

const AnswerInputText = ({ answer }) => {
  const { register } = useFormContext();

  const defaultAnswerValue = answer === NOT_APPLICABLE || !answer ? '' : answer

  const textAreaRef = useRef(null);

  return (
    <TextArea
      ref={textAreaRef}
      {...register("answer", { required: "This field is required.", value: defaultAnswerValue }) }
      height="5rem"
      placeholder="Type your answer..."
    />
  )
}

export default AnswerInputText;