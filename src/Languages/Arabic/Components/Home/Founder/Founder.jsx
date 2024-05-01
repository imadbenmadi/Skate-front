import { useRef } from "react";
import founder from "../../../../../../public/Founder.png";
import { useInView } from "framer-motion";
export default function Founder() {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true });
    return (
        <div className=" max-w-[1000px] mx-auto  py-6 md:py-16">
            <div
                ref={ref}
                style={{
                    transform: isInView ? "none " : "translateY(10%)",
                    opacity: isInView ? 1 : 0,
                    transition:
                        "all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1) 0.1s",
                }}
                className="flex gap-5  flex-col items-center max-md:gap-0 max-md:"
            >
                <div className="flex flex-col  w-6/12 max-md:ml-0 max-md:w-full">
                    <div className="flex flex-col grow  font-bold max-md:mt-4">
                        <div className="self-center text-4xl flex gap-2 ">
                            <div className=" text-gray">الشركة</div>
                            <div className=" text-emerald-500">مؤسس</div>
                        </div>
                    </div>
                </div>
                <div className=" flex flex-col md:flex-row items-center justify-center ">
                    <div className="  flex  items-center justify-center   w-[250px]  m-auto">
                        <img
                            // loading="lazy"
                            src={founder}
                            className=" grow w-full shadow-sm aspect-[0.98] max-md:mt-4"
                        />
                    </div>
                    <div className="flex flex-col w-6/12 max-md:ml-0 max-md:w-full">
                        <div className=" self-center mt-4 text-2xl text-emerald-500">
                            Fouzia <span className=" text-gray">Benmadi</span>
                        </div>
                        <div
                            className=" px-4 mt-4 text-lg md:text-xl font-medium leading-7 text-gray
                         max-md:mt-4 text-center"
                        >
                               تعد مؤسستنا رائدة في المجال،
                            حيث تتمتع قائدتنا الديناميكية، بشغف لا
                            يضاهى بالابتكار والتميز. تتمتع بخبرة ثرية في
                            مجال الأعمال وريادة الأعمال، وقادت شركتنا نحو النمو
                            والنجاح، ملهمة الآخرين بروحها الريادية وتفانيها في
                            إحداث تأثير إيجابي.
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
