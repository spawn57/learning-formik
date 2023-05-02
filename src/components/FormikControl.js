import Input from './Input';
import TextArea from './TextArea';
import RadioButton from './RadioButton';
import Select from './Select';
import CheckBoxGroup from './CheckBoxGroup';

function FormikControl(props) {
  const { control, ...rest } = props;
  switch (control) {
    case "input":
        return <Input {...rest} />;
    case "textarea":
        return <TextArea {...rest} />;
    case "select":
      return <Select {...rest} />
    case "radio":
      return <RadioButton {...rest} />;
    case "checkbox":
      return <CheckBoxGroup {...rest} />;
    case "date":
    default:
      return null;
  }
}

export default FormikControl;