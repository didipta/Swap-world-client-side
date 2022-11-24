import React, { useContext } from 'react';
import { useForm } from 'react-hook-form';
import toast, { Toaster } from 'react-hot-toast';
import { AuthContext } from '../Context/Authprovider';

const Forgetpass = () => {
    const { register,formState: { errors }, handleSubmit } = useForm();
    const { forgetpass}=useContext(AuthContext);
    const onSubmit = data =>
    {
        forgetpass(data.Email)
        .then(() => {
            toast.success("Please check your email")
          })
          .catch((error) => {
            toast.error("This email is not Registrated")
            // ..
          });
    }
    return (
        <div>
            <input type="checkbox" id="forget" className="modal-toggle" />
            <div className="modal">
            <div className="modal-box relative">
                <label htmlFor="forget" className="btn btn-sm btn-circle absolute right-2 top-2">✕</label>
                <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col justify-center gap-2 items-center shadow shadow-slate-200 rounded-xl p-5 w-96 m-auto">
                <input type="email" {...register("Email", { required: "Email Address is required" })} 
                    aria-invalid={errors.Email ? "true" : "false"} 
                    className="input input-bordered input-sm w-full max-w-xs" 
                    placeholder="Enter your email"
                    />

          {errors.Email && <p role="alert" className="text-red-400 text-xs">{errors.Email?.message}</p>}
          <button className="btn btn-sm">Send</button>
          </form>
            </div>
            </div>
            <Toaster
            className="z-50"
        position="bottom-right"
        reverseOrder={false}
        />
        </div>
    );
};

export default Forgetpass;