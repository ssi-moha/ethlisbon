import { FieldValues, useForm as useReactHookForm, UseFormProps } from 'react-hook-form';

export const useForm = <T extends FieldValues>(options: UseFormProps<T>) =>
  useReactHookForm<T>({
    mode: 'onChange',
    ...options,
  });

export { useFormContext, FormProvider } from 'react-hook-form';
