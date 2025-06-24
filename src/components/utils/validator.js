export const validateEmailANDPassword = (email, password) => {
  let emailregx = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
  let passwordRegx = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[A-Za-z\d@$!%*?&]{8,}$/;
  let emailValid = emailregx.test(email);
  let passwordValid = passwordRegx.test(password);
  if (!emailValid) {
    return { valid: false, message: "Invalid email format" };
  }
  if (!passwordValid) {
    return {
      valid: false,
      message:
        "Password must be at least 8 characters long, contain at least one uppercase letter, one lowercase letter, and one number",
    };
  }
  return { valid: true, message: null };
};
