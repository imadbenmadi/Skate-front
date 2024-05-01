import { useRef } from "react";
import CardService from "./CardService";
import icon1 from "../../../../../../public/iconService1.png";
import icon2 from "../../../../../../public/iconService2.png";
import icon3 from "../../../../../../public/iconService3.png";
import { motion, useInView } from "framer-motion";
import { Link } from "react-router-dom";
import { FaArrowRight } from "react-icons/fa6";

function Services() {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true });
    return (
        <div className="   bg-slate-200   py-10  h-fit pb-20">
            <div className="max-w-[1100px]   py-10 mx-auto h-12 flex justify-between px-10 items-center">
                <div className="w-fit   max-md:mx-auto max-md:text-center max-mad:text-center max-mad:w-full   max-mad:w-full   ">
                    <span className="text-emerald-500 text-4xl font-bold ">
                        خدماتنا{" "}
                    </span>
                    {/* <span className=" text-4xl text-gray ">SERVICES </span> */}
                </div>

                <Link
                    to={"/en/Services"}
                    className="select-none flex  gap-2 items-center w-fit max-md:hidden text-green underline px-5 py-2 rounded-md  text-center  text-base font-medium  leading-normal"
                >
                    <span className=" text-xl">عرض جميع الخدمات</span>{" "}
                    <FaArrowRight className=" mt-1" />
                </Link>
            </div>
            <div
                ref={ref}
                style={{
                    transform: isInView ? "none " : "translateY(10%)",
                    opacity: isInView ? 1 : 0,
                    transition:
                        "all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1) 0.1s",
                }}
                className="grid grid-cols-3 w-screen  mt-2   self-center h-fit max-lg:grid-cols-1 max-w-[1200px]  mx-auto  "
            >
                <CardService
                    icon={icon1}
                    titleService="دراسات البيئة"
                    desServicce="نقدم تقييمات شاملة وحلولًا للتأثير البيئي، وإدارة المخاطر، وأنظمة الحماية من الحرائق، والتدخل في حالات الطوارئ الداخلية، وتخطيط السلامة، وإدارة النفايات. تضمن خبرتنا الامتثال للتنظيمات وتقليل المخاطر، مما يحمي البيئة والموظفين."
                />
                <CardService
                    icon={icon2}
                    titleService="الاستشارة والدعم"
                    desServicce="نختص في شهادات الجودة بناءً على معايير ISO 9001 و ISO 14001 و ISO 45001، بالإضافة إلى شهادة سلامة الغذاء بناءً على معايير HACCP و ISO 22000. تشمل خدماتنا أيضًا تطوير الشركات، وتنظيم وترتيب الشركات، وتنفيذ أنظمة وأدوات الإدارة."
                />
                <CardService
                    icon={icon3}
                    titleService="إنشاء المشاريع"
                    desServicce="خلال إنشاء الأعمال التجارية أو الشركة الخاصة، تواجه العديد من العقبات المختلفة مثل التراخيص والموافقات والامتثال. بالنسبة للتنظيمات في القانون، يجب أن تكون هذه الخطوات دقيقة ومنظمة لضمان النجاح الشفاف والامتثال للتنظيمات. يقدم SKATE خدمات تستند إلى فهم احتياجات العميل لتلبية المعايير."
                />
            </div>

            <Link
                to={"/en/Services"}
                className=" flex gap-2 items-center select-none w-fit 
                  mx-auto   md:hidden  px-5 py-2 rounded-md  text-center
                    font-medium  leading-normal  text-xl
                     text-green "
            >
                عرض جميع الخدمات
                <FaArrowRight className=" mt-1" />
            </Link>
        </div>
    );
}

export default Services;
