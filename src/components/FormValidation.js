import * as yup from "yup";

const accountSchema = yup.object().shape({
  name: yup.string().required("Please enter your investment horizon"),
  initialAmount: yup
    .number()
    .typeError("Amount must be a number")
    .round("round")
    .required("Please enter your initial amount"),
  monthlyDeposit: yup
    .number()
    .typeError("Amount must be a number")
    .round("round")
    .required("Please enter your monthly deposit"),
  interest: yup
    .number()
    .round("round")
    .required("Please enter your projected interest"),
});

export const formSchema = yup.object().shape({
  investmentHorizon: yup
    .number()
    .typeError("Amount must be a number")
    .positive("Please enter a positive value")
    .required("Please enter your invesment horizon"),
  accounts: yup
    .array()
    .of(accountSchema)
    .min(1, "Please add at least 1 account"),
});
