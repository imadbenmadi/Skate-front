
import { IoLogoWhatsapp } from "react-icons/io";
import { FaFacebookSquare } from "react-icons/fa";
import { MdEmail } from "react-icons/md";

function Links() {
    return (
        <div className="flex gap-3 justify-center mt-2 ">
            <a
                href="https://api.whatsapp.com/send?phone=+213658335232"
                target="_blank"
                rel="noopener noreferrer"
            >
                <IoLogoWhatsapp className=" text-green text-4xl" />
            </a>
            <br />
            <a
                href="https://www.facebook.com/Skate.consult"
                target="_blank"
                rel="noopener noreferrer"
            >
                <FaFacebookSquare className=" text-blue  text-4xl" />
            </a>
            <br />
            <a
                href="mailto:your@email.com"
                target="_blank"
                rel="noopener noreferrer"
            >
                <MdEmail className=" text-green  text-4xl" />
            </a>
        </div>
    );
}

export default Links;
