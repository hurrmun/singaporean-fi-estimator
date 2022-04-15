import * as yup from "yup";

const accountSchema = yup.object().shape({
  name: yup.string().required("Please enter your investment horizon"),
  initialAmount: yup
    .number()
    .typeError("Initial amount must be a number")
    .required("Please enter your initial amount"),
  monthlyDeposit: yup
    .number()
    .typeError("Monthly deposit must be a number")
    .required("Please enter your monthly deposit"),
  interest: yup
    .number()
    .typeError("Projected interest must be a number")
    .max(100, "Maximum insterest rate is 100%")
    .required("Please enter your projected interest"),
});

export const formSchema = yup.object().shape({
  investmentHorizon: yup
    .number()
    .typeError("Investment horizon must be a number")
    .positive("Please enter a positive value")
    .max(100, "Maximum value is 100 years")
    .required("Please enter your invesment horizon"),
  accounts: yup
    .array()
    .of(accountSchema)
    .min(1, "Please add at least 1 account"),
});
