import { useForm } from 'react-hook-form';
import FormProvider from '../components/hook-form/FormProvider';
import RHFTextField from '../components/hook-form/RHFTextField';
import { DemoContainer } from '@mui/x-date-pickers/internals/demo';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DateTimePicker } from '@mui/x-date-pickers/DateTimePicker';
import { RHFAutocomplete } from './hook-form';

const BroadcastName = () => {

    const defaultValues:any= {
        // BroadcastName: "",
        // user: {
            message: "",
            MessageDate: new Date(new Date().getTime() + (5.5 * 60 * 60 * 1000)).toISOString(),
            messageType: "Sent",
            status: "Delivered"
           
        // }
  }

  // const imageUpload = (e:any) => {
  //   const file = e.target.files[0];
  //   getBase64(file).then((base64:any) => {
  //     // localStorage["fileBase64"] = base64;
  //     messageMethods.setValue("message" , base64)
  //     //console.debug("file stored",base64);
  //   });

  //   // var dataImage = localStorage.getItem("fileBase64");
  //   // console.log(dataImage);
  //   // var bannerImg = document.getElementById("tableBanner");
  //   // console.log(bannerImg);
  //   // bannerImg.src = "data:image/png;base64," + dataImage;
  //   // document.body.style.background = `url(data:image/png;base64,${dataImage})`;
  //   // x = (
  //   //   <img
  //   //     alt="no"
  //   //     id="tableBanner"
  //   //     src={"data:image/png;base64," + dataImage}
  //   //   />
  //   // );
  // };
  // const getBase64 = (file:any) => {
  //   return new Promise((resolve, reject) => {
  //     const reader = new FileReader();
  //     reader.onload = () => resolve(reader.result);
  //     reader.onerror = (error) => reject(error);
  //     reader.readAsDataURL(file);
  //   });
  // };


  const onMessageSubmit = async (data:any) => {
    console.log("Submitted Data:", data);   
    
//     try {
//       const response = await fetch('https://whatsapp-backend-1707.onrender.com/broadcastMessage/create', {
//           method: 'POST',
//           headers: {
//             'Content-Type': 'application/json'
//           },
//           body: JSON.stringify(data)
//         });

//         if (!response.ok) {
//           throw new Error('Failed to create Message.');
//         }
  
//         alert('Message created successfully.');

//     } catch(error:any){
// alert(error.message);
//     }


    const existingMessages = JSON.parse(localStorage.getItem("broadcastMessages") || "[]");
    const updatedMessages = [ ...existingMessages , data] ;
    updatedMessages.sort((a:any, b:any) => new Date(a?.MessageDate).getTime() - new Date(b?.MessageDate).getTime());    
    localStorage.setItem("broadcastMessages" , JSON.stringify(updatedMessages));

    alert("Message Added Successfully!");
  };

    const messageMethods = useForm({
        // resolver: yupResolver(transactionSchema),
        defaultValues
      });
      const {
        handleSubmit
        // formState: { isSubmitting, isDirty, dirtyFields, isValid }
      } = messageMethods;


  return (
    <div>
     <FormProvider methods={messageMethods} onSubmit={handleSubmit(onMessageSubmit)} >
     {/* <input
        type="file"
        id="message"
        name="message"
        onChange={imageUpload}
      /> */}
      <RHFTextField rows={5} sx={{ whiteSpace: "pre-wrap" }} multiline={true} dataId="message"  name='message' placeholder="Enter Message" label="Message"/>

      <LocalizationProvider dateAdapter={AdapterDayjs}>
    <DemoContainer components={['DateTimePicker']}>
      {/* <DatePicker label="disabled" disabled />
      <DatePicker label="readOnly" readOnly /> */}
      <DateTimePicker label="Select Time" name="MessageDate" onChange={(date:any) => {
        console.log("date: " , date);
        // console.log("today: " ,today);
        messageMethods.setValue("MessageDate" , (
          // date?.$d.toDateString() == today?.toDateString() ? (today?.getHours() + ":" + today?.getMinutes()) : 
         new Date(date.$d.getTime() + (5.5 * 60 * 60 * 1000))))
        }}/>
    </DemoContainer>
  </LocalizationProvider>
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
                          label="Select Type"
                          key={`messageType`}
                          name={`messageType`}
                          placeholder="Select Message Type"
                          options={[ "Sent" , "Info"]}
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
