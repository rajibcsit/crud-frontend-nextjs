import { useEffect, useState } from "react";
import axios from "@/lib/axios";
// import { useHistory } from "react-router-dom";
import { useRouter } from "next/router";

function login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const router = useRouter();
  useEffect(() => {
    if (localStorage.getItem("token")) {
      router.push("/lesson/lesson");
    }
  }, []);

  async function loginFrom() {
    console.log(email, password);
    let item = { email, password };
    let result = await axios("http://127.0.0.1:8000/api/auth/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: JSON.stringify(item),
    });
    result = await result.json();
    localStorage.setItem("token", JSON.stringify(result));
    router.push("/lesson/lesson");
  }

  return (
    <div>
      <>
        <section className="min-h-screen flex flex-col">
          <div className="flex flex-1 items-center justify-center">
            <div className="rounded-lg sm:border-2 px-4 lg:px-24 py-16 lg:max-w-xl sm:max-w-md w-full text-center">
              <form className="text-center">
                <h1 className="font-bold tracking-wider text-3xl mb-8 w-full text-gray-600">
                  Sign in
                </h1>
                <div className="py-2 text-left">
                  <input
                    type="email"
                    name="email"
                    onChange={(e) => setEmail(e.target.value)}
                    className=" border-2 border-gray-100 focus:outline-none bg-gray-100 block w-full py-2 px-4 rounded-lg focus:border-gray-700 "
                    placeholder="Email"
                  />
                </div>
                <div className="py-2 text-left">
                  <input
                    type="password"
                    name="password"
                    onChange={(e) => setPassword(e.target.value)}
                    className="border-2 border-gray-100 focus:outline-none bg-gray-100 block w-full py-2 px-4 rounded-lg focus:border-gray-700 "
                    placeholder="Password"
                  />
                </div>
                <div className="py-2">
                  <button
                    onClick={loginFrom}
                    type="submit"
                    className="border-2 border-gray-100 focus:outline-none bg-purple-600 text-white font-bold tracking-wider block w-full p-2 rounded-lg focus:border-gray-700 hover:bg-purple-700"
                  >
                    Sign In
                  </button>
                </div>
              </form>
              <div className="text-center">
                <a href="#" className="hover:underline">
                  Forgot password?
                </a>
              </div>
              <div className="text-center mt-12">
                <span>Don't have an account?</span>
                <a
                  href="#"
                  className="text-md text-indigo-600 underline font-semibold hover:text-indigo-800"
                >
                  Create One
                </a>
              </div>
            </div>
          </div>
        </section>
      </>
    </div>
  );
}

export default login;
