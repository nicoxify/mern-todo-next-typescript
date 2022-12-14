import type { NextPage } from "next"
import type { LoadingContextInterface, RefreshTodosContextInterface } from "../types"
import { createContext, useState } from "react"
import CreateTodo from "../components/CreateTodo"
import ReadTodo from "../components/ReadTodo"
import { ImSpinner2 } from "react-icons/im"
import DarkMode from "../components/DarkMode"

export const LoadingContext = createContext<LoadingContextInterface | null>(null)
export const RefreshTodosContext = createContext<RefreshTodosContextInterface | null>(null)

const Home: NextPage = () => {
  const [loading, setLoading] = useState(true)
  const [refreshTodos, setRefreshTodos] = useState(true)

  return (
    <LoadingContext.Provider value={{ loading, setLoading }}>
      <RefreshTodosContext.Provider value={{ refreshTodos, setRefreshTodos }}>
        {loading && (
          <div className="fixed z-10 h-screen w-screen bg-gray-400/30 dark:bg-black/40 flex justify-center items-center">
            <ImSpinner2 className="animate-spin dark:text-rose-200 text-5xl md:text-6xl lg:text-7xl xl:text-8xl 2xl:text-9xl" />
          </div>
        )}
        <div className="bg-rose-200 dark:bg-gray-800 transition duration-500 h-screen pt-5">
          <DarkMode />
          <h1 className="text-center text-3xl md:text-4xl dark:text-gray-300 transition duration-500">
            My Todo List
          </h1>
          <CreateTodo />
          <ReadTodo />
        </div>
      </RefreshTodosContext.Provider>
    </LoadingContext.Provider>
  )
}

export default Home
