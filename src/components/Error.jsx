import React from 'react'

function Error() {
  return (

    <div className="h-[80vh] overflow-hidden flex flex-col justify-center items-center">
        <div className='w-[430px]  p-4'>
            <h1 className='text-4xl font-bold'>Oops! Page Not Found</h1>
            <p className='text-lg mt-2 text-neutral-400'>Sorry, the page you were looking for could not be found. It's possible that the page has been moved, deleted, or never existed in the first place. Try checking the URL for any typos or errors, or use the navigation menu to find what you're looking for. If you're still having trouble, feel free to contact us for assistance.</p>
        </div>
    </div>
    
  )
}

export default Error
