import { useForm } from "react-hook-form";
import SectionTitle from "../SectionTitle/SectionTitle";

const ContactMe = () => {

    const { register, handleSubmit, reset, formState: { errors } } = useForm();

    const onSubmit = data => {
        reset();
        const formData = { name: data.name, email: data.email, message: data.message, phone: data.phoneNumber }
        fetch('https://way-of-the-dragon-server.vercel.app/users', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(formData)
        })
    }


    return (
        <div id="contact" className="py-10 bg-gray-600">
            <SectionTitle title={"Contact Me"}></SectionTitle>

            <form onSubmit={handleSubmit(onSubmit)} className="flex gap-2 flex-col w-11/12 md:w-2/3 lg:w-1/2 mx-auto">

                <label className="">
                    <span className="text-xl text-transparent bg-clip-text bg-gradient-to-b from-[#0088ffc6] to-[#00ffd0]">Your Name</span>
                </label>
                <input className="rounded input-bordered input" {...register("name")} />
                {errors.name && <span className="text-red-600">Name is required</span>}

                <label className="">
                    <span className="text-xl text-transparent bg-clip-text bg-gradient-to-b from-[#0088ffc6] to-[#00ffd0]">Your Email*</span>
                </label>
                <input className="rounded input-bordered input" {...register("email", { required: true })} />
                {errors.email && <span className="text-red-600">This field is required.</span>}

                <label className="text-xl text-transparent bg-clip-text bg-gradient-to-b from-[#0088ffc6] to-[#00ffd0]">Phone Number</label>
                <input className="rounded input-bordered input" type="text" inputMode="numeric" {...register("phoneNumber", {
                    pattern: {
                        value: /^[0-9]*$/,
                        message: 'Please enter a valid number',
                    },
                })} />
                {errors.phoneNumber && <span className="text-red-600">{errors.phoneNumber.message}</span>}

                <label className="text-xl text-transparent bg-clip-text bg-gradient-to-b from-[#0088ffc6] to-[#00ffd0]">Message*</label>
                <textarea placeholder="Message" cols="30" rows="10" {...register("message", { required: true })}></textarea>

                <button type='submit' className="bg-gradient-to-r from-[#0088ffc6] to-[#00ffd0] w-52 h-16 mx-auto rounded-lg text-white font-semibold text-xl mt-3">Send Message</button>
            </form>

        </div>
    );
};

export default ContactMe;