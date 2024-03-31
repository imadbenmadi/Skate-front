import { useState, useEffect } from "react";
import { IoSearchOutline, IoWarning } from "react-icons/io5";
import Card from "./Card";
import axios from "axios";
import ErrorPage from "../ErrorPage";
import Footer from "../Footer";
function Blogs() {
    const [loading, setLoading] = useState(false);
    const [search, setSearch] = useState("");
    const [blogs, setBlogs] = useState([]);
    const [error, setError] = useState(null);
    const [page, setPage] = useState(1);

    const [filteredBlogs, setFilteredBlogs] = useState([]);

    const handleSearch = (e) => {
        const searchTerm = e.target.value.toLowerCase();
        setSearch(searchTerm);
        const filtered = blogs.filter((blog) =>
            blog.Title.toLowerCase().includes(searchTerm)
        );
        setFilteredBlogs(filtered);
    };

    const fetchBlogs = async () => {
        setLoading(true);
        try {
            const response = await axios.get("http://localhost:3000/Blogs", {
                withCredentials: true,
                validateStatus: () => true,
            });

            if (response.status == 200) {
                const { totalPages, blogs } = response.data;
                setBlogs(blogs);
            } else {
                setError(response.data);
            }
        } catch (error) {
            setError(error);
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        fetchBlogs();
    }, []);

    if (error) {
        return <ErrorPage />;
    }

    return (
        <div>
            {loading ? (
                <div className="w-screen h-screen flex items-center justify-center">
                    <span className="loader"></span>
                </div>
            ) : (
                <>
                    <div className=" pt-[90px] min-h-[78vh] ">
                        <div className="flex flex-col md:flex-row justify-between items-center mx-16 mb-2 font-semibold text-gray w-300px">
                            <div className="text-2xl w-screen md:w-fit text-center lg:text-3xl mb-2 ">
                                <span className="text-green2">Read </span>
                                Skate Blogs
                            </div>
                            <div className="flex border-2 md:mr-10">
                                <input
                                    type="text"
                                    className="pl-2 py-1 w-[150px] md:w-[300px] focus:outline-none"
                                    value={search}
                                    onChange={handleSearch}
                                />
                                <button
                                    className="px-2 border-l-2"
                                    onClick={handleSearch}
                                >
                                    <IoSearchOutline className="text-2xl" />
                                </button>
                            </div>
                        </div>

                        <div className=" min-h-[45vh]">
                            {blogs.length == 0 ? (
                                <div className="w-[80%] m-auto h-fit text-center py-6 flex gap-1 text-2xl justify-center items-center text-gray">
                                    <IoWarning />
                                    No Blogs Found
                                </div>
                            ) : search == "" ? (
                                blogs.map((blog) => (
                                    <>
                                        <div key={blog._id} className="">
                                            <Card blog={blog} />
                                        </div>
                                        <div></div>
                                    </>
                                ))
                            ) : filteredBlogs.length == 0 ? (
                                <div className="text-center text-gray py-4">
                                    No blogs match the Search Query.
                                </div>
                            ) : (
                                filteredBlogs.map((blog) => (
                                    <div key={blog._id} className="">
                                        <Card blog={blog} />
                                    </div>
                                ))
                            )}
                        </div>
                    </div>
                    <div className=" min-h-[22vh] bg-slate-200">
                        <Footer />
                    </div>
                </>
            )}
        </div>
    );
}

export default Blogs;
