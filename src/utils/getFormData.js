function getFormData(form) {
    if (!form.current) throw new Error("Invalid Form!");

    const formData = new FormData(form.current);
    const obj = Object.fromEntries(formData.entries());

    return obj;
}

export default getFormData;
