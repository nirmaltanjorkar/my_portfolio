import SocialMediaIcons from "../components/SocialMediaIcons";

const Footer = () => {
    return(
        <footer className="pt-5 bg-red">
            <div className="flex justify-center mx-auto">
                <div className="md:flex justify-center md:justify-between text-center">
                <SocialMediaIcons /> 
                <p className="font-playfair text-lg text-deep-blue mt-10 ml-5 ">
                        ©2023 NIRMAL. All Rights Reserved.
                        </p>
                </div>

            </div>
        </footer>
    )

}

export default Footer; 