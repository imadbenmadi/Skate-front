import { useState, useEffect } from "react";
import Logo from "../../../../../public/skate_circle.png";
import Axios from "axios";
import Swal from "sweetalert2";
import { useNavigate } from "react-router-dom";
import { Formate_Date } from "../../../../Logic/Formate_Date";

function Verification({
    Verify_id,
    Verify_email,
    Verify_Password,
    rigester_Date,
}) {
    const Navigate = useNavigate();
    const [succed_verification, setSucced_verification] = useState(false);
    const [succed_Login, setSucced_Login] = useState(false);
    const [resend_Loading , setResend_Loading] = useState(false);
    useEffect(() => {
        if (succed_Login && succed_verification) window.location.href = "/";
        else if (!succed_Login && succed_verification) {
            Navigate("/ar/Login");
        }
    }, [succed_verification, succed_Login]);

    const [code, setCode] = useState("");
    const handleChange = (e) => {
        const { value } = e.target;
        // التأكد من أن القيمة المُدخلة هي أرقام فقط ولديها طول أقصى 6 أحرف
        if (/^\d{0,6}$/.test(value)) {
            setCode(value);
        }
    };

    const resend_code = async () => {
        try {
            setResend_Loading(true);
            let response = await Axios.post(
                "https://backend.skate.dz/ReSend_Verification_Email",
                {
                    userId: Verify_id,
                },
                {
                    withCredentials: true,
                    validateStatus: () => true,
                }
            );
            if (response.status == 200) {
                Swal.fire("تم!", "تم إعادة إرسال الرمز بنجاح", "success");
            } else if (response.status == 404) {
                console.log(response.data);
                Swal.fire("خطأ!", `${response.data.message}`, "error");
            } else if (response.status == 500) {
                Swal.fire("خطأ!", "خطأ في الخادم الداخلي", "error");
            } else if (response.status == 429) {
                Swal.fire(
                    "خطأ!",
                    `الكثير من الطلبات، جرب مرة أخرى في وقت لاحق\n  ${response.data.message}`,
                    "error"
                );
            } else {
                Swal.fire("خطأ!", "حدث خطأ ما", "error");
            }
        } catch (error) {
            Swal.fire("خطأ!", "حدث خطأ ما", "error");
        }finally{
            setResend_Loading(false);
        }

    };

    const handleSubmit = async () => {
        let response = await Axios.post(
            "https://backend.skate.dz/VerifyAccount",
            {
                Code: code,
                userId: Verify_id,
            },
            {
                withCredentials: true,
                validateStatus: () => true,
            }
        );

        if (response.status == 200) {
            Swal.fire("تم!", "تم التحقق من البريد الإلكتروني بنجاح", "success");
            try {
                let response = await Axios.post(
                    "https://backend.skate.dz/Login",
                    {
                        Email: Verify_email,
                        Password: Verify_Password,
                    },
                    {
                        withCredentials: true,
                        validateStatus: () => true,
                    }
                );
                if (response.status == 200) {
                    setSucced_Login(true);
                    setSucced_verification(true);
                } else if (response.status == 401) {
                    setSucced_verification(true);
                } else if (response.status == 409) {
                    setSucced_verification(true);
                } else if (response.status == 500) {
                    setSucced_verification(true);
                } else if (response.status == 429) {
                    Swal.fire(
                        "خطأ!",
                        `الكثير من الطلبات، جرب مرة أخرى في وقت لاحق\n  ${response.data.message}`,
                        "error"
                    );
                } else {
                    setSucced_verification(true);
                }
            } catch (error) {
                setSucced_verification(true);
            }
        } else if (response.status == 409) {
            Swal.fire(
                "تعذر التحقق من الحساب!",
                `${response.data.message}`,
                "error"
            );
        } else if (response.status == 404) {
            Swal.fire("خطأ!", `${response.data.message}`, "error");
        } else if (response.status == 500) {
            Swal.fire("خطأ!", "خطأ في الخادم الداخلي", "error");
        } else if (response.status == 429) {
            Swal.fire(
                "خطأ!",
                `الكثير من الطلبات، جرب مرة أخرى في وقت لاحق\n  ${response.data.message}`,
                "error"
            );
        } else {
            Swal.fire("خطأ!", "حدث خطأ ما", "error");
        }
        setCode("");
    };
    const Sended_Date = Formate_Date(rigester_Date);
    return (
        <div className="flex flex-col items-center justify-center mb-6">
            <img
                src={Logo}
                alt="شعار سكيت"
                className="mt-8 w-[140px]"
                loading="lazy"
            />
            <div className=" font-bold mb-4 text-xl text-green">
                التحقق من بريدك الإلكتروني
            </div>
            <div className=" mb-8 font-semibold">
                <div className="mb-4">
                    أدخل الرمز المكون من 6 أرقام الذي أرسلناه إليك في البريد
                    الإلكتروني
                </div>
                <div className=" text-gray text-sm text-center pb-6">
                    {" "}
                    الرسالة أرسلت في: <p>{Sended_Date} </p>{" "}
                </div>
                <div className=" text-gray text-sm text-center">
                    {" "}
                    بريدك الإلكتروني: <br />
                    {Verify_email}{" "}
                </div>
            </div>

            <input
                type="text"
                value={code}
                onChange={handleChange}
                className="form-control border border-gray rounded w-24 h-12 text-center mb-4"
                maxLength={6}
            />
            <button
                onClick={handleSubmit}
                className=" text-white bg-green px-4 py-2 rounded disabled:opacity-50"
                disabled={code.length !== 6}
            >
                إرسال
            </button>
            {/* <div className=" py-6">
                {!resend_Loading ? (
                    <div>
                        <div className=" color-gray text-sm">
                            لم تتلقى رمز التحقق؟
                        </div>
                        <div
                            className=" text-center text-gray underline cursor-pointer text-sm"
                            onClick={resend_code}
                        >
                            إعادة الإرسال
                        </div>
                    </div>
                ) : (
                    <span className="small-loader pt-2  w-full m-auto"></span>
                )}
            </div> */}
        </div>
    );
}

export default Verification;
