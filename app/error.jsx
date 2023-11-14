'use client'

import { useEffect } from "react"
import EmptyState from "./components/EmptyState"

function error({error}) {
    useEffect(()=>{
        console.error(error)
    },[error])

  return (
    <EmptyState title="Uh Oh" subtitle="Something went wrong!"   />
  )
}

export default error