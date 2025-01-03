import { useForm } from "react-hook-form"
import RHFTextField from '../components/hook-form/RHFTextField';
// import { RHFAutocomplete } from '../components/hook-form';
import FormProvider from '../components/hook-form/FormProvider';
import { DemoContainer } from '@mui/x-date-pickers/internals/demo';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DateTimePicker } from '@mui/x-date-pickers/DateTimePicker';
// import AddLocalUser from "../components/AddLocalUser";


const BroadcastName = () => {

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
        // BroadcastName: "",
        // user: {
            name: "",
            icon: "",
            createdTime: ""
           
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

      const updatedData = {...data , createdTime : new Date(data?.createdTime.$d.getTime() + (5.5 * 60 * 60 * 1000))}
    localStorage.setItem("broadcastName" , JSON.stringify({...updatedData}));

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
     <FormProvider methods={methods} onSubmit={handleSubmit(onNameSubmit)} >
      <RHFTextField dataId="name"  name='name' placeholder="Enter name" label="Broadcast Name"/>
      <input
        type="file"
        id="icon"
        name="icon"
        onChange={imageUpload}
      />
      <RHFTextField dataId="icon"  name='icon' placeholder="Enter user's name (paste url)" label="Icon"/>

{/* Last Message Date */}
<LocalizationProvider dateAdapter={AdapterDayjs}>
<DemoContainer components={['DateTimePicker']}>
<DateTimePicker label="Select Date" name="createdTime" onChange={(date:any) => {
  // console.log("date: " , date?.$d);
  // console.log("today: " ,today);
  methods.setValue("createdTime" , (
    // date?.$d.toDateString() == today?.toDateString() ? (today?.getHours() + ":" + today?.getMinutes()) : 
   date))
  }}/>
</DemoContainer>
</LocalizationProvider>

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
