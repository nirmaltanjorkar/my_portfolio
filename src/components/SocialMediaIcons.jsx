import React from "react";
const SocialMediaIcons = () => {
    return(
        <div className="flex justify-center md:justify-start mb-20 my-10 gap-7">
            <a
            className="hover:opacity-50 transition duration-500"
            href="https://www.linkedin.com/in/nirmaltanjorkar/"
            target="_blank"
            rel="nonreferrer" 
            >
                <img alt="linkedin-link" src="..//assets/linkedin.png" />
            </a>

            <a
            className="hover:opacity-50 transition duration-500"
            href="https://www.twitter.com/nirmaltanjorkar/"
            target="_blank"
            rel="nonreferrer"
            >
                <img alt="twitter-link" src="..//assets/twitter.png" />
            </a>

            <a
            className="hover:opacity-50 transition duration-500"
            href="https://www.facebook.com/nirmaltanjorker"
            target="_blank"
            rel="nonreferrer"
            >
                <img alt="facebook-link" src="..//assets/facebook.png" />
            </a>

            <a
            className="hover:opacity-50 transition duration-500"
            href="https://www.instagram.com/nirmaltanjorkar"
            target="_blank"
            rel="nonreferrer"
            >
                <img alt="instagram-link" src="..//assets/instagram.png" />
            </a>
        </div>
    )
}

export default SocialMediaIcons;