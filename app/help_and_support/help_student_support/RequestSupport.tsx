import { Button, Input, Textarea } from '@nextui-org/react'
import React from 'react'

const RequestSupport = () => {
  return (
    <>
    <div>
        <div className='p-10'>
        <h1 className="text-[40px] font-bold">Request Support</h1>
          <div className="border-t-2 border-r-2 border-b-2 border-l-2 border-orange-500"></div>
        </div>
         <div>
            <div className='p-12'>
                <form>
                    <div className='grid md:grid-cols-2 gap-12'>
                    <div><Input type="text" variant="underlined" label="First Name" color='success'size='lg'/></div>
                    <div><Input type="text" variant="underlined" label="Last Name" color='success'size='lg'/></div> 
                    <div><Input type="text" variant="underlined" label="School Name" color='success'size='lg'/></div>
                    <div><Input type="email" variant="underlined" label="Phone" color='success'size='lg'/></div>
                    <div><Input type="text" variant="underlined" label="Admission Number or ScoolSoop User ID" color='success'size='lg'/></div>
                    <div><Input type="text" variant="underlined" label="Class or Batch" color='success'size='lg'/></div>
                    <div><Textarea type="text" variant="underlined" label="How can we help ?" color='success'size='lg'/></div>                  
                    </div>
                   <div className='mt-4 text-white flex justify-center'> <Button className='rounded-full' color='success' size='lg'type='submit' >Submit</Button></div>
                </form>
            </div>
         </div>
    </div>
    </>
  )
}

export default RequestSupport