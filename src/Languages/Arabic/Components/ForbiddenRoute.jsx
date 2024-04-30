

const ForbiddenRoute = () => {
    return (
        <div className="flex items-center justify-center h-screen">
            <div className="text-center">
                <h1 className="text-4xl font-bold text-red-600 mb-4">ممنوع</h1>
                <p className="text-lg text-gray">
                    لا يمكنك الوصول إلى هذه الصفحة
                </p>
            </div>
        </div>
    );
};

export default ForbiddenRoute;
