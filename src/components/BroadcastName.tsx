import { useForm } from 'react-hook-form';
import FormProvider from '../components/hook-form/FormProvider';
import RHFTextField from '../components/hook-form/RHFTextField';


const BroadcastName = () => {

    const defaultValues:any= {
        // BroadcastName: "",
        // user: {
            name: "",
           
        // }
  }

  const onNameSubmit = async (data:any) => {
    console.log("Submitted Data:", data);   
    
//     try {
//       const response = await fetch('https://whatsapp-backend-1707.onrender.com/broadcastMessa/create', {
//           method: 'POST',
//           headers: {
//             'Content-Type': 'application/json'
//           },
//           body: JSON.stringify(data)
//         });

//         if (!response.ok) {
//           throw new Error('Failed to create user.');
//         }
  
//         alert('User created successfully.');

//     } catch(error:any){
// alert(error.message);
//     }


    localStorage.setItem("broadcastName" , JSON.stringify(data?.name));

    alert("Battery Changed Successfully!");
  };

    const nameMethods = useForm({
        // resolver: yupResolver(transactionSchema),
        defaultValues
      });
      const {
        handleSubmit
        // formState: { isSubmitting, isDirty, dirtyFields, isValid }
      } = nameMethods;


  return (
    <div>
     <FormProvider methods={nameMethods} onSubmit={handleSubmit(onNameSubmit)} >
      <RHFTextField dataId="name"  name='name' placeholder="Enter name" label="Broadcast Name"/>

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

export default BroadcastName
