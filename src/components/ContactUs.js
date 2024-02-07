const ContactUs = () => {
    return (
        <div className="flex justify-center items-center">
            <div className="m-5  flex flex-col w-3/12">
                <h2>This is Contact Form</h2>
                <label className=""> Name</label>
                <input type="text" className="border border-black rounded-lg" />

                <label>Last Name</label>
                <input type="text" className="border border-black rounded-lg" />

                <button className="my-2 bg-gray-700 w-3/12 text-white rounded-lg  mx-auto">Submit</button>
            </div>
        </div>
    )
}

export default ContactUs