import Link from "next/link";
import axios from "@/lib/axios";
import { useState, useEffect } from "react";

function lesson() {
  const [lessons, setData] = useState([]);

  //Load all post here
  useEffect(() => {
    getAllLesson();
  }, []);

  //get All Post here from API
  const getAllLesson = async () => {
    try {
      await axios.get("http://127.0.0.1:8000/api/lesson").then((res) => {
        setData(res.data.data);
        console.log("res.data.data");
        console.log(res.data.data);
      });
    } catch (error) {
      console.log(error);
    }
  };
  //get All Post here from API
  const deleteLesson = (id) => {
    try {
      axios.delete(`http://127.0.0.1:8000/api/lesson/${id}`).then((res) => {
        console.log(res.data.data);
        getAllLesson();
      });
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <div className="container mt-5">
        <div className="header">
          <h2 className="text-2xl">Lesson Lists</h2>
        </div>
        <div className="flex justify-end">
          <a href="/lesson/addLesson" class="bg-gray-500 text-white font-bold py-2 px-4 rounded">
            Add Lesson
          </a>
        </div>
        <div className="flex flex-col">
          <div className="overflow-x-auto sm:-mx-6 lg:-mx-8">
            <div className="inline-block min-w-full py-2 sm:px-6 lg:px-8">
              <div className="overflow-hidden">
                <table className="min-w-full text-left text-sm font-light">
                  <thead className="border-b font-medium dark:border-neutral-500">
                    <tr>
                      <th scope="col" className="px-6 py-4">
                        Id
                      </th>
                      <th scope="col" className="px-6 py-4">
                        Name
                      </th>
                      <th scope="col" className="px-6 py-4">
                        Title
                      </th>
                      <th scope="col" className="px-6 py-4">
                        Action
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    {lessons.map((lesson) => (
                      <tr className="border-b dark:border-neutral-500" key={lesson.id}>
                        <td className="whitespace-nowrap px-6 py-4 font-medium"> {lesson.id} </td>
                        <td className="whitespace-nowrap px-6 py-4"> {lesson.name} </td>
                        <td className="whitespace-nowrap px-6 py-4"> {lesson.title} </td>
                        <td className="whitespace-nowrap px-6 py-4  font-medium">
                          <Link
                            href={`/lesson/edit/${lesson.id}`}
                            button
                            className="bg-blue-500 text-white font-bold py-2 px-4 rounded"
                          >
                            Edit
                          </Link>
                        </td>
                        <td className="whitespace-nowrap font-medium">
                          <button
                            onClick={() => confirm(deleteLesson(lesson.id))}
                            className="bg-red-500 text-white font-bold py-2 px-4 rounded"
                          >
                            Delete
                          </button>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default lesson;
