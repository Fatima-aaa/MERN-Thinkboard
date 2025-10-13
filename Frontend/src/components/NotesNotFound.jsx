import React from 'react'
import { Link } from 'react-router'
import { ArrowLeftIcon } from 'lucide-react'

const NotesNotFound = () => {
  return (
    <>
    <div style={{color: "#96dbe4"}} className='text-center py-10 text-lg'>
      Notes Not Found
    </div>
    <div className='text-center text-6xl' style={{color: "#96dbe4"}}>
      😞
    </div>
    <div className='text-center py-4' style={{color: "#96dbe4"}}>
    <Link to={'/create'} className='btn btn-ghost mb-6'>
            Create your first note
    </Link>
    </div>
    </>
  )
}

export default NotesNotFound
