import axios from 'axios';
import React, { useState } from 'react'
import Markdown from 'react-markdown';
import { useRef } from 'react'

import BlurIn from "@/components/magicui/blur-in";
import { Skeleton } from "@/components/ui/skeleton"

function Home() {
    let inputText = useRef();
    let [res, setResult] = useState(null)
    let [resload, setresload] = useState(false)
    let [carousel, setCarousel] = useState(true)
    let [output, setOutput] = useState(false)

    function submitHandler() {
        console.log(inputText.current.value)
        const chatGptUrl = "https://api.openai.com/v1/chat/completions";
        const myAPI = "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";


        const headers = {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${myAPI}`,
        }

        const requestBody = {
            model: "gpt-4o-mini",
            messages: [
      
            {
                role: 'user',
                content: inputText.current.value
            }
            ]
        }

        axios.post(chatGptUrl, requestBody, {
            headers 
            }).then(({data})=> {
                setResult((prev)=>  data.choices[0].message.content)
                
                    setresload(false)
                    setOutput(true)
               
                })
                .catch((error) => {
                    console.error(error);
                });

        setCarousel(false)
        setresload(true)
        setOutput(false)
    }

    
  return (
    <div className='flex flex-col  lg:flex-row-reverse gap-3'>
      
        <div className="w-[90vw] lg:w-[70vw] mx-auto second-color overflow-y-auto animie">
            <div className="h-[85vh] lg:h-[83vh] mt-5 p-3 flex flex-col ">
                
                
                {
                    carousel ? <div className="h-[85vh] lg:h-[83vh] flex flex-col justify-center items-center">
                    <BlurIn 
                        word="The future is not something we enter. It's something we make  Generate, create, inspire."
                        className="text-black dark:text-white text-xl "
                   
                    />
                    </div> : ""
                }
                       
                {
                    resload ?<Skeleton className="h-[85vh] bg-neutral-300 " /> : ""
                
                }
                   
                {
                    output ? <p className="p-10"><Markdown>{res}</Markdown></p>: "" 
                }
                  
            
            </div>
        </div>

        
        <div className="w-[90vw] lg:w-[30vw]  mx-auto lef-colr flex flex-col justify-center md:rounded-tr-3xl lg:rounded-br-3xl">

            <div className="hidden lg:block p-3  text-center">
                <div className= "flex justify-center mb-2">
                    <img src="https://plus.unsplash.com/premium_photo-1682465123803-47bdc8f66a63?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mzd8fGFpfGVufDB8MHwwfHx8MA%3D%3D" className='h-20 w-20 rounded-full' alt="" />
                </div>
                <blockquote className='font-semibold text-lg'>In three words I can sum up everything I've learned about life: it goes on.</blockquote>

            </div>
            <div className="text-center flex flex-col gap-5 p-2 ">
                
                <input type="text" ref={inputText} placeholder='enter your Prompt' className='border py-2 px-2 outline-none '/>
                <div className="">
                    <button className='w-[80px] lg:w-[6vw] bg-black text-white rounded-xl  py-2' onClick={submitHandler}>Begin</button>
                </div>
                
            </div>
            
        </div>
      
    </div>
  )
}

export default Home
