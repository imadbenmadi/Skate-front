import { IoMdRefresh } from "react-icons/io";

const ErrorPage = () => {
    return (
        <div className="flex flex-col items-center justify-center h-[60vh]">
            <h1 className="text-4xl font-bold text-red-600 mb-4">
                عذراً! حدث خطأ ما
            </h1>
            <p className="text-lg text-gray">
                نأسف، ولكن حدث خطأ أثناء جلب البيانات. الرجاء المحاولة مرة أخرى
                لاحقاً.
            </p>
            <div
                className="flex gap-1 text-gray items-end cursor-pointer"
                onClick={() => window.location.reload()}
            >
                إعادة تحميل الصفحة
                <IoMdRefresh />
            </div>
        </div>
    );
};

export default ErrorPage;
