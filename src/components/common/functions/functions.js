const createErrorEvent = (errors) => {
  let event = new CustomEvent("show_error", {
    detail: {
      errors: errors
    }
  });
  document.dispatchEvent(event);
};

const clearErrors = () => {
  let event = new CustomEvent("clear_error", {
    detail: {}
  });
  document.dispatchEvent(event);
}

export {
  createErrorEvent,
  clearErrors
};