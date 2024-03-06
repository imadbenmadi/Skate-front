export default async function handle_delete_Course(course) {
    try {
        const response = await axios.delete(
            `https://backend.skate-consult.com/Dashboard/Courses`,
            {
                courseId : course._id
            },
            {
                withCredentials: true,
                validateStatus: () => true,
            }
        );

        if (response.status == 200) {
            Navigate("/Dashboard/Users");
            swal.fire("User Deleted Successfully", "", "success");

            // setsecces(true);
        } else if (response.status == 404) {
            swal.fire(" User Not found ", " Refresh the page please", "info");
        } else if (401) {
            swal.fire({
                title: "Unauthorised Action",
                text: "You should Login again ",
                icon: "error",
                confirmButtonColor: "#3085d6",

                confirmButtonText: "Go to Admin Login Page",
            }).then((result) => {
                if (result.isConfirmed) {
                    Navigate("/Dashboard_Login");
                }
            });
        } else {
            swal.fire(
                "Could not delete user",
                `${response.data.message}`,
                "error"
            );
        }
    } catch (error) {
        swal.fire("Could not delete user", "Please Try again Latter", "error");
    }
}
