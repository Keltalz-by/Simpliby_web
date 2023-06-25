export const handleChange = (e, setInputData, inputData) => {
  setInputData({ ...inputData, [e.target.name]: e.target.value });
};
