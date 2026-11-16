import { createContext } from 'react'
import type { FormContextType } from '../../types/interface/form.interface';

const CreateFormContext = createContext<FormContextType | null>(null)

export default CreateFormContext;
