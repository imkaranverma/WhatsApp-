import { useForm } from "react-hook-form"
import RHFTextField from '../components/hook-form/RHFTextField';
import { RHFAutocomplete } from '../components/hook-form';
import FormProvider from '../components/hook-form/FormProvider';
import { DemoContainer } from '@mui/x-date-pickers/internals/demo';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';

const AddUser = () => {
    // const {
    //     register,
    //     handleSubmit,
    //     formState: { errors },
    //   } = useForm();
    
    //   type Inputs= {
    //     name: String,
    //     icon: String,
    //     message: String,
    //     // lastMessageDate: new Date().toISOString().split("T")[0],
    //     status: String,
    //     unread: Number,
    //   }
    const defaultValues= {
            name: "String",
            icon: "String",
            message: "String",
            lastMessageDate: new Date().toISOString().split("T")[0],
            status: "",
            unread: 0,
          }
    //   const {
    //     register,
    //     handleSubmit,
    //     watch,
    //     formState: { errors },
    //   } = useForm<Inputs>()
    //   const onSubmit: SubmitHandler<Inputs> = (data) => console.log(data)

      const onSubmit = (data:any) => {
        console.log("Submitted Data:", data);
        const existingUsers = JSON.parse(localStorage.getItem("users") || "[]");

        // Add the new user to the array
        const updatedUsers = [...existingUsers, data];
    
        // Save the updated array back to local storage
        localStorage.setItem("users", JSON.stringify(updatedUsers));
    
        // alert("User Added Successfully!");
        console.log("key: ", JSON.parse(localStorage.getItem("users") || "[]"));
        alert("User Added Successfully!");
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
    <div style={{ maxWidth: "600px", margin: "auto", padding: "20px", border: "1px solid #ddd", borderRadius: "8px" }}>
      <h2>Add User</h2>
      {/* <Form methods> */}

      <FormProvider methods={methods} onSubmit={handleSubmit(onSubmit)} >
        {/* Name */}
        {/* <div style={{ marginBottom: "16px" }}>
          <label>Name:</label>
          <input
            type="text"
            {...register("name", { required: "Name is required" })}
            placeholder="Enter user's name"
            style={{ width: "100%", padding: "8px" }}
          />
          {errors.name && <span style={{ color: "red" }}>{errors.name.message}</span>}
        </div> */}
        <RHFTextField dataId="name"  name='name' placeholder="Enter user's name" label="Name"/>

        {/* Profile Photo */}
        <RHFTextField dataId="icon"  name='icon' placeholder="Enter user's name (paste url)" label="Icon"/>

        {/* Message */}
        <RHFTextField dataId="message"  name='message' placeholder="Enter user's last message" label="message"/>

        {/* Last Message Date */}
        {/* <RHFDatePicker type="date" name={`lastMessageDate`} placeholder="Enter lastMessageDate" label="lastMessageDate" /> */}
        <LocalizationProvider dateAdapter={AdapterDayjs}>
      <DemoContainer components={['DatePicker', 'DatePicker', 'DatePicker']}>
        {/* <DatePicker label="disabled" disabled />
        <DatePicker label="readOnly" readOnly /> */}
        <DatePicker label="Select Date" name="lastMessageDate" />
      </DemoContainer>
    </LocalizationProvider>
        {/* Status */}
 <RHFAutocomplete
                          label="Select Status "
                          key={`status`}
                          name={`status`}
                          placeholder="Select Gender"
                          options={[ "Sent" , "Recieved"  , "Delivered", "None"]}
                          multiple={false}
                          // onChange={(event, newValue: any) => {
                          //   methods.setValue<any>(`self.gender`, newValue?.id, { shouldValidate: true, shouldDirty: false, shouldTouch: true });
                          // }}
                          {...{
                            //   loading: ...isLoading,
                            fullWidth: true,
                            getOptionLabel: (option: any) => option ?? "",
                            sx: { mb: 2 },
                            isOptionEqualToValue: (option: any, value: any) => option === value
                          }}
                        />
        {/* Unread Messages */}
        <RHFTextField dataId="unread"  name='unread' placeholder="Enter No. of Unread messages" label="Unread" type='number'/>


        {/* Submit Button */}
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
          Add User
        </button>
      </FormProvider>
              
      {/* </Form> */}
    </div>
  )
}

export default AddUser
