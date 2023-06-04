function EditLesson() {
  return (
    <div>
      <>
        <div className="px-4 lg:px-24 py-16 lg:max-w-xl sm:max-w-md w-full text-center">
          <form className="text-center">
            <h1 className="font-bold tracking-wider text-3xl mb-8 w-full text-gray-600">
              Edit Lesson
            </h1>
            <div className="py-2 text-left">
              <input className=" border-2 border-gray-100 focus:outline-none bg-gray-100 block w-full py-2 px-4 rounded-lg focus:border-gray-700 " />
            </div>
            <div className="py-2 text-left">
              <input className="border-2 border-gray-100 focus:outline-none bg-gray-100 block w-full py-2 px-4 rounded-lg focus:border-gray-700 " />
            </div>
            <div className="py-2">
              <button
                type="submit"
                className="border-2 border-gray-100 focus:outline-none bg-purple-600 text-white font-bold tracking-wider block w-full p-2 rounded-lg focus:border-gray-700 hover:bg-purple-700"
              >
                Update
              </button>
            </div>
          </form>
        </div>
      </>
    </div>
  );
}

export default EditLesson;
