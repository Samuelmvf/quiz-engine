import { useRef } from "react";
import { useFormContext } from "react-hook-form";

import TextArea from "@/components/text-area/text-area.jsx";

const AnswerInputText = () => {
  const { register } = useFormContext();
  const textAreaRef = useRef(null);

  return (
    <TextArea
      ref={textAreaRef}
      {...register("answer", { required: "This field is required." }) }
      height="5rem"
      placeholder="Type your answer..."
    />
  )
}

export default AnswerInputText;