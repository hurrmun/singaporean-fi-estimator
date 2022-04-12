import * as yup from "yup";

const accountSchema = yup.object().shape({
  name: yup.string().required("please enter your investment horizon"),
  initalAmount: yup.number().required(),
  monthlyDeposit: yup.number().required(),
  interest: yup.number().required(),
});

export const formSchema = yup.object().shape({
  investmentHorizon: yup.number().required(),
  accounts: yup.array.of(accountSchema).required(),
});
