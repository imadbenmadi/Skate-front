import { Formate_Date } from "../../../Logic/Formate_Date";
function Card({ item }) {
    console.log("card", item);
    if (!item.Course) return null;
    // console.log(item.Course.Category);
    return (
        <div className="w-full flex  justify-between border-b-4 border-b-gray_white">
            <div className=" w-full">
                <div className="relative overflow-hidden pt-5 px-5 flex flex-col md:flex-row shrink-0  h-fit mb-6">
                    <img
                        className="md:w-[30%] md:h-[200px] object-cover"
                        src={`http://localhost:3000/Courses/${item.Image}`}
                        alt={item.Title}
                    />
                    <div className="md:w-[70%] pl-2 break-words flex">
                        <div className="">
                            <p className="font-bold text-xl mb-2 overflow-hidden">
                                {item.Course?.Title
                                    ? item.Course.Title
                                    : "No Title"}
                            </p>
                            <p className="text-gray font-semibold text-xl pt-4">
                                {item.Date
                                    ? Formate_Date(item.Date)
                                    : "No Date"}
                            </p>
                            <p className="text-green font-semibold text-xl pt-4">
                                Pending
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Card;
