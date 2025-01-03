import { useForm } from 'react-hook-form';
import FormProvider from '../components/hook-form/FormProvider';
import RHFTextField from '../components/hook-form/RHFTextField';
import BroadcastName from '../components/BroadcastName';
import BroadcasrMessage from '../components/BroadcasrMessage';

const Broadcast = () => {

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
                statusMessage: "",
            // }
      }



      const onSubmit = async (data:any) => {
        console.log("Submitted Data:", data);

        try {
          const response = await fetch('https://whatsapp-backend-1707.onrender.com/broadcastUser/create', {
              method: 'POST',
              headers: {
                'Content-Type': 'application/json'
              },
              body: JSON.stringify(data)
            });

            if (!response.ok) {
              throw new Error('Failed to create user.');
            }
      
            alert('User created successfully.');

        } catch(error:any){
 alert(error.message);
        }


       const existingBroadcast:any =  JSON.parse(localStorage.getItem("broadcastUserList") || "[]");
        var updatedBroadcast:any = [...existingBroadcast , data];            
        localStorage.setItem("broadcastUserList" , JSON.stringify(updatedBroadcast));

        // alert("Battery Changed Successfully!");
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
<BroadcastName/>


          <FormProvider methods={methods} onSubmit={handleSubmit(onSubmit)} >
      <RHFTextField dataId="name"  name='name' placeholder="Enter name" label="Name"/>
      <input
        type="file"
        id="icon"
        name="icon"
        onChange={imageUpload}
      />
        <RHFTextField dataId="icon"  name='icon' placeholder="Enter user's name (paste url)" label="Icon"/>

        <RHFTextField dataId="statusMessage"  name='statusMessage' placeholder="Enter user's status" label="Status"/>

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

<BroadcasrMessage/>
    </div>
  )
}

export default Broadcast
