import React from 'react'
import data from "../data"
import { createContext ,useState} from 'react'
export const BookContext = createContext()

export default function BooksProvider({children}) {
    const [books,setBooks] =useState(data)
  return (
    <div>
        <BookContext.Provider value={{books}}>{children}</BookContext.Provider> 

    </div>

  )
}
