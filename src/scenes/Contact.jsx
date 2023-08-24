
import LineGradient from "../components/LineGradient";
import {useForm} from 'react-hook-form';
import { motion } from "framer-motion";

const Contact = () => {

    const {
        register,
        trigger,
        formState : {errors}
    } = useForm();

    const onSubmit = async (e) => {
        const isValid = await trigger();
        if(!isValid) {
            e.preventDefault();
        }
    }

    return (
        <section id="contact" className="py-36">
        {/* HEADING */}
        <motion.div
        className="flex justify-end w-full"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.5 }}
        transition={{ duration: 0.5 }}
        variants={{
          hidden: { opacity: 0, x: -50 },
          visible: { opacity: 1, x: 0 },
        }}
        >
        <div>
        <p className="font-playfair font-semibold text-3xl mr-10">
          <span className="text-yellow">CONTACT ME</span> TO GET STARTED
        </p>
        <div className="flex md:justify-end mt-5 mr-10">
        <LineGradient width="w-1/2" />
        </div>
        </div> 
        </motion.div>

        {/* FORM & IMAGE */}
        <div className="md:flex md:justify-between ">
        <motion.div
        className=" flex justify-center"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.5 }}
        transition={{ duration: 0.5 }}
        variants={{
          hidden: { opacity: 0, y: 50 },
          visible: { opacity: 1, y: 0 },
        }}
        >
            <img className="h-[340px] w-full mt-14 mr-10" src="../assets/contact-image.jpeg" alt="contact" />
        </motion.div>

        <motion.div
        className="basis-1/2 pt-14 mr-10 md:mt-0"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.5 }}
        transition={{ delay: 0.2, duration: 0.5 }}
        variants={{
          hidden: { opacity: 0, y: 50 },
          visible: { opacity: 1, y: 0 },
        }}
        >
         <form
         target="_blank"
         onSubmit={onSubmit}
         action="https://formsubmit.co/fe310b8970226a29b14d97aa963faed2"
         method="POST"
         >
        <input 
            className="w-full bg-blue font-semibold placeholder-deep-blue p-3"
            type="text"
            placeholder="NAME"
            {...register("name", {
                required: true,
                maxLength: 100,
            })}
        />
        {
            errors.name && (
                <p className="text-red mt-1">
                    {errors.name.type === 'required' && "This field is required."}
                    {errors.name.type === 'maxLength' && "Max length is 100 character."}
                </p>
            )}
            <input 
            className="w-full bg-blue font-semibold placeholder-deep-blue p-3 mt-5"
            type="text"
            placeholder="EMAIL"
            {...register("email", {
                required: true,
                pattern: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
            })}
            />
            {
            errors.email && (
                <p className="text-red mt-1">
                    {errors.email.type === 'required' && "This field is required."}
                    {errors.email.type === 'pattern' && "Invalid email address."}
                </p>
            )}

            <textarea 
            className="w-full bg-blue font-semibold placeholder-deep-blue p-3 mt-5"
            type="text"
            placeholder="MESSAGE"
            rows="4"
            cols="50"
            {...register("message", {
                required: true,
                maxLength: 2000
            })}
            />
            {
            errors.message && (
                <p className="text-red mt-1">
                    {errors.email.type === 'required' && "This field is required."}
                    {errors.email.type === 'maxLength' && "Max Length is 2000 character."}
                </p>
            )}

            <button
            type="submit"
            className="p-3 bg-yellow border-2 border-red font-semibold text-deep-blue mt-5 hover:bg-red
            hove:text-white transition duration-500"
            >
                SEND ME A MESSAGE
            </button>

        </form>   
        </motion.div>
        </div>
        </section>
    );
};

export default Contact;