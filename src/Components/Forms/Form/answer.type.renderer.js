import React, { useEffect, useState } from "react";
import MultipleSelect from "./Answer Types/Multiple.Select";
import DateSelector from "./Answer Types/Date.Selector";
import TimeSelector from "./Answer Types/Time.Selector";
import PhotoUploader from "../../Helper/photo.uploader";
import MultipleChoice from "./Answer Types/Multiple Choice/multiple.choice";
import ShortAnswer from "./Answer Types/Short.Answer";
import LongAnswer from "./Answer Types/Long.Answer";
export default function AnswerType(props) {
  const { val, setType, setStatus } = props;
  const valueToOption = (value) => {
    // console.log(value);
    switch (value) {
      case 1:
        setType("CheckBox")
        return <MultipleSelect />;
      case 2:
        setType("Multiple Choice")
        return <MultipleChoice />;
      case 3:
        setType("Short Answer")
        return <ShortAnswer />;
      case 4:
        setType("Long Answer")
        return <LongAnswer />;
      case 5:
        setType("Date")
        return <DateSelector />;
      case 6:
        setType("Time")
        return <TimeSelector />;
      case 7:
        setType("File Upload")
        return <PhotoUploader />;
    }
  };
  const [option, setOption] = useState(valueToOption(val));
  useEffect(() => {
    setStatus("Updating....")
    setOption(valueToOption(val));
    // console.log(valueToOption(val));
  }, [val]);
  return (
    <>
      {option}
    </>
  );
}
