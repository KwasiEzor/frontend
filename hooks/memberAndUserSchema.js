import * as yup from "yup";
// Member and  subscribe form validation schema
export const memberAndUserSchema = yup.object().shape({
  email: yup.string().email().required("Email valide requis"),
  password: yup
    .string()
    .min(8)
    .matches(RegExp("(.*[a-z].*)"), "Au moins une lettre minuscule")
    .matches(RegExp("(.*[A-Z].*)"), "Au moins une lettre ne majuscule")
    .matches(RegExp("(.*\\d.*)"), "Au moins un chiffre")
    .matches(RegExp('[!@#$%^&*(),.?":{}|<>]'), "Au moins un caractère spécial")
    .required("Mot de passe est requis"),
  confirmPassword: yup
    .string()
    .oneOf(
      [yup.ref("password"), null],
      "Les mots de passe doivent être identiques"
    ),
});
