import Audio from "./audio";
import Input from "./input";
import Select from "./select";

const FormCotrol = (props) => {
  switch (props.control) {
    case "input":
      return <Input {...props} />;
    case "select":
      return <Select {...props} />;
    case "audio":
      return <Audio {...props}/>;
  }
};

export default FormCotrol;
