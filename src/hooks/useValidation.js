export default function useValidateForm() {
  const validateForm = (name, value) => {
    let messages = {};

    if (name === "title" && value === "") {
      messages = { [name]: "" };
    }

    if (name === "description" && value === "") {
      messages = { [name]: "" };
    }

    if (name === "image" && value === "") {
      messages = { [name]: "" };
    }

    return messages;
  };

  return { validateForm };
}
