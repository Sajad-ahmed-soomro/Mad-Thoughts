// src/types/declarations.d.ts

declare module "react-dom" {
    export function useFormState<T>(action: (prevState: T, formData: FormData) => Promise<any>, options?: any): [T, (formData: FormData) => Promise<void>];
}
