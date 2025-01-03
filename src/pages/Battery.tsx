import { useForm } from 'react-hook-form';
import FormProvider from '../components/hook-form/FormProvider';
import RHFTextField from '../components/hook-form/RHFTextField';

const Battery = () => {

    const defaultValues:any= {
        battery: ""
      }


      const onSubmit = (data:any) => {
        console.log("Submitted Data:", data);
        localStorage.setItem("battery", JSON.stringify(data));

        alert("Battery Changed Successfully!");
      };

    const methods = useForm({
        // resolver: yupResolver(transactionSchema),
        defaultValues
      });
      const {
        handleSubmit
        // formState: { isSubmitting, isDirty, dirtyFields, isValid }
      } = methods;

  return (
    <div>
      <FormProvider methods={methods} onSubmit={handleSubmit(onSubmit)} >
      <RHFTextField dataId="battery"  name='battery' placeholder="Enter Battery" label="Battery"/>
        
      <button
          type="submit"
          style={{
            padding: "10px 20px",
            backgroundColor: "#007BFF",
            color: "white",
            border: "none",
            borderRadius: "4px",
            cursor: "pointer",
          }}
        >
          Submit
        </button>
      </FormProvider>
    </div>
  )
}

export default Battery
