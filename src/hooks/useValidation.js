export default function UseValidateForm() {
  const validateForm = (name, value, formValue = undefined) => {
    let messages = {};

    if (!formValue) {
      if (name === "title" && value !== "") {
        messages = { [name]: "" };
      }

      if (name === "description" && value !== "") {
        messages = { [name]: "" };
      }

      if (name === "image" && value !== "") {
        messages = { [name]: "" };
      }
    } else if (formValue) {
      for (const key in formValue) {
        if (formValue[key] === "") {
          messages[key] = "Field tidak boleh kosong";
        }
      }
    }

    return messages;
  };

  return { validateForm };
}
