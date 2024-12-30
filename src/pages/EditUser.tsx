import { useForm } from "react-hook-form"
import RHFTextField from '../components/hook-form/RHFTextField';
import { RHFAutocomplete } from '../components/hook-form';
import FormProvider from '../components/hook-form/FormProvider';
import { DemoContainer } from '@mui/x-date-pickers/internals/demo';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DateTimePicker } from '@mui/x-date-pickers/DateTimePicker';
import { useLocation, useNavigate } from "react-router-dom";


const EditUser = () => {
    const Navigate = useNavigate()
    const location = useLocation();
    let { userData , index} = location.state;
console.log("state: " , userData , index);
      const defaultValues:any= {
              name: userData?.name,
              icon: userData?.icon,
              message: userData?.message,
              lastMessageDate: new Date(userData?.lastMessageDate),
              status: userData?.status,
              unread: userData?.unread,
              story: userData?.story,
            }

            // const deleteUser = 

        const onSubmit = (data:any) => {
          console.log("Submitted Data:", data);
          const existingUsers = JSON.parse(localStorage.getItem('users') || '[]');
          //  const updatedData = {...data, lastMessageDate: new Date(data?.lastMessageDate.$d.getTime() + (5.5 * 60 * 60 * 1000)) } ;
          //  console.log("updated data: ", updatedData)
          // Check if the index is valid and exists in the array
          if (existingUsers.length > 0 && existingUsers[index]) {
            // Update the user at the given index with the new data
            existingUsers[index] = data ;
            
            existingUsers.sort((a:any, b:any) => new Date(b?.lastMessageDate).getTime() - new Date(a?.lastMessageDate).getTime());
            console.log("existing user:", existingUsers , index)
            // Save the updated users array back to local storage
            localStorage.setItem('users', JSON.stringify(existingUsers));
        
            // Log the updated users
            console.log("Updated Users: ", existingUsers);
          } else {
            // Handle the case where the index is invalid or user does not exist
            alert("Invalid user index or no users found!");
          }
          console.log("key: ", JSON.parse(localStorage.getItem("users") || "[]"));
          alert("User Updated Successfully!");
          Navigate("/");
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
    <h2>Edit User</h2>
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
      {/* <input
      type="file"
      id="icon"
      name="icon"
      onChange={imageUpload}
    /> */}
      {/* <RHFTextField dataId="icon"  name='icon' placeholder="Enter user's name (paste url)" label="Icon"/> */}

      {/* Message */}
      <RHFTextField dataId="message"  name='message' placeholder="Enter user's last message" label="message"/>

      {/* Last Message Date */}
      {/* <RHFDatePicker type="date" name={`lastMessageDate`} placeholder="Enter lastMessageDate" label="lastMessageDate" /> */}
      <LocalizationProvider dateAdapter={AdapterDayjs}>
    <DemoContainer components={['DateTimePicker']}>
      {/* <DatePicker label="disabled" disabled />
      <DatePicker label="readOnly" readOnly /> */}
      <DateTimePicker label="Select Date" name="lastMessageDate" onChange={(date:any) => {
        console.log("date: " , date);
        // console.log("today: " ,today);
        methods.setValue("lastMessageDate" , (
          // date?.$d.toDateString() == today?.toDateString() ? (today?.getHours() + ":" + today?.getMinutes()) : 
         new Date(date.$d.getTime() + (5.5 * 60 * 60 * 1000))))
        }}/>
    </DemoContainer>
  </LocalizationProvider>
      {/* Status */}
<RHFAutocomplete
                        label="Select Status "
                        key={`status`}
                        name={`status`}
                        placeholder="Select Status"
                        options={[ "Sent" , "Recieved"  , "Delivered", "None"]}
                        multiple={false}
                        // onChange={(event, newValue: any) => {
                        //   methods.setValue<any>(`self.Status`, newValue?.id, { shouldValidate: true, shouldDirty: false, shouldTouch: true });
                        // }}
                        {...{
                          //   loading: ...isLoading,
                          fullWidth: true,
                          getOptionLabel: (option: any) => option ?? "",
                          sx: { mb: 2 },
                          isOptionEqualToValue: (option: any, value: any) => option === value
                        }}
                      />

                      {/* Story */}

                      <RHFAutocomplete
                        label="Select Story "
                        key={`story`}
                        name={`story`}
                        placeholder="Select Story"
                        options={[ "Seen" , "Unseen"  , "None"]}
                        multiple={false}
                        // onChange={(event, newValue: any) => {
                        //   methods.setValue<any>(`self.Status`, newValue?.id, { shouldValidate: true, shouldDirty: false, shouldTouch: true });
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
        Edit User
      </button>
     
    </FormProvider>
    <button
        style={{
          padding: "10px 20px",
          backgroundColor: "#007BFF",
          color: "white",
          border: "none",
          borderRadius: "4px",
          cursor: "pointer",
        }}
        onClick={() => {
            const existingUsers = JSON.parse(localStorage.getItem('users') || '[]');
            if (existingUsers.length > 0 && existingUsers[index]) {

                existingUsers.splice(index , 1);
                localStorage.setItem('users', JSON.stringify(existingUsers));
    
                
                console.log("Updated Users Array: ", existingUsers);

            } else {
                // Handle the case where the index is invalid or user does not exist
                alert("Invalid user index or no users found!");
              }
              console.log("key: ", JSON.parse(localStorage.getItem("users") || "[]"));
              alert("User Deleted Successfully!");
        }}
      >
        Delete User
      </button>
    {/* </Form> */}
  </div>
  )
}

export default EditUser
