import { useForm } from "react-hook-form"
import RHFTextField from '../components/hook-form/RHFTextField';
import { RHFAutocomplete } from '../components/hook-form';
import FormProvider from '../components/hook-form/FormProvider';
import { DemoContainer } from '@mui/x-date-pickers/internals/demo';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DateTimePicker } from '@mui/x-date-pickers/DateTimePicker';
import AddLocalUser from "../components/AddLocalUser";

const AddUser = () => {
  // const todayString = new Date().toISOString();
  const today = new Date();
  console.log("today : " , today)

  // var x;
  const imageUpload = (e:any) => {
    const file = e.target.files[0];
    getBase64(file).then((base64:any) => {
      // localStorage["fileBase64"] = base64;
      methods.setValue("icon" , base64)
      //console.debug("file stored",base64);
    });

    // var dataImage = localStorage.getItem("fileBase64");
    // console.log(dataImage);
    // var bannerImg = document.getElementById("tableBanner");
    // console.log(bannerImg);
    // bannerImg.src = "data:image/png;base64," + dataImage;
    // document.body.style.background = `url(data:image/png;base64,${dataImage})`;
    // x = (
    //   <img
    //     alt="no"
    //     id="tableBanner"
    //     src={"data:image/png;base64," + dataImage}
    //   />
    // );
  };
  const getBase64 = (file:any) => {
    return new Promise((resolve, reject) => {
      const reader = new FileReader();
      reader.onload = () => resolve(reader.result);
      reader.onerror = (error) => reject(error);
      reader.readAsDataURL(file);
    });
  };

    const defaultValues:any= {
            name: "",
            icon: "",
            message: "",
            lastMessageDate: new Date().toISOString().split("T")[0],
            status: "",
            unread: "",
            story: "",
          }
    //   const {
    //     register,
    //     handleSubmit,
    //     watch,
    //     formState: { errors },
    //   } = useForm<Inputs>()
    //   const onSubmit: SubmitHandler<Inputs> = (data) => console.log(data)

      const onSubmit = async (data:any) => {
        console.log("Submitted Data:", data);
        // const updatedData = {...data, lastMessageDate: new Date(data?.lastMessageDate.$d.getTime() + (5.5 * 60 * 60 * 1000)) } ;

        try {
          const response = await fetch('https://whatsapp-backend-1707.onrender.com/users/create', {
              method: 'POST',
              headers: {
                'Content-Type': 'application/json'
              },
              body: JSON.stringify(data)
            });

            if (!response.ok) {
              throw new Error('Failed to create match.');
            }
      
            alert('Match created successfully.');

        } catch(error:any){
 alert(error.message);
        }
        // const existingUsers = JSON.parse(localStorage.getItem("users") || "[]");
        // // Add the new user to the array
        // const updatedUsers = [...existingUsers, updatedData];
        // updatedUsers.sort((a:any, b:any) => new Date(b?.lastMessageDate).getTime() - new Date(a?.lastMessageDate).getTime());
        // // Save the updated array back to local storage
        // localStorage.setItem("users", JSON.stringify(updatedUsers));
    
        // // alert("User Added Successfully!");
        // console.log("key: ", JSON.parse(localStorage.getItem("users") || "[]"));
        // alert("User Added Successfully!");
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
        <RHFTextField dataId="name"  name='name' placeholder="Enter user's name" label="Name"/>

        {/* Profile Photo */}
        <input
        type="file"
        id="icon"
        name="icon"
        onChange={imageUpload}
      />
        <RHFTextField dataId="icon"  name='icon' placeholder="Enter user's name (paste url)" label="Icon"/>

        {/* Message */}
        <RHFTextField dataId="message"  name='message' placeholder="Enter user's last message" label="message"/>

        {/* Last Message Date */}
        <LocalizationProvider dateAdapter={AdapterDayjs}>
      <DemoContainer components={['DateTimePicker']}>
        <DateTimePicker label="Select Date" name="lastMessageDate" onChange={(date:any) => {
          // console.log("date: " , date?.$d);
          // console.log("today: " ,today);
          methods.setValue("lastMessageDate" , (
            // date?.$d.toDateString() == today?.toDateString() ? (today?.getHours() + ":" + today?.getMinutes()) : 
           date))
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
 <RHFAutocomplete
                          label="Select Story "
                          key={`story`}
                          name={`story`}
                          placeholder="Select Story from below options"
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
          Add User
        </button>
      </FormProvider>
              
              <AddLocalUser/>
      {/* </Form> */}
    </div>
  )
}

export default AddUser
