import './App.css'
import { RouterProvider } from 'react-router-dom'
import Routes from './routes/Routes'
import ProductProvider from './context/product/ProductProvider'
import FormProvider from './context/form/FormProvider'
import { Toaster } from 'sonner'

function App() {
  return (
    <>
      <ProductProvider>
        <FormProvider>
            <Toaster position="top-right" richColors />
        <RouterProvider router={Routes} />
        </FormProvider>
      </ProductProvider>
    </>
  )
}

export default App;
