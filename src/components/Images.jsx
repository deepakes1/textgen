import axios from 'axios';
import React, { useState } from 'react'
import { useRef } from 'react'
import { Skeleton } from "@/components/ui/skeleton"
import { FadeText } from "@/components/magicui/fade-text";

function Images() {
    let inputText = useRef();
    let [res, setResult] = useState(null)
    let [load,setLoad] = useState(false)
    let [text,settext] = useState(true) //true
    let [output,setoutput] = useState(false) //false

    function submitHandler() {
        console.log(inputText.current.value)
        const chatGptUrl = "https://api.openai.com/v1/images/generations"
        const myAPI = "sk-ml5OPbaOaGRBEl86bBXtsp5wzSUcfh8FqfLQloCDhPT3BlbkFJf5aVA6KL7ASBkdxQDWPuoO-mqwbFlGVP0NMFstP7oA";

        console.log(myAPI)
        const headers = {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${myAPI}`,
        }

        const requestBody = {
             "model": "dall-e-3",
              "prompt": inputText.current.value,
              "n": 1,
              "size": "1024x1024"
        }

        axios.post(chatGptUrl, requestBody, {
            headers 
            }).then(({data})=> {
                setResult((prev)=>  data.data[0].url)
                    setoutput(true);
                    setLoad(false);
                
               
            })
            .catch((error) => {
                console.error(error);
            });

        setLoad(false);

        settext(false);
        setLoad(true);



        setoutput(false);
  
        
       

        


    }

    
  return (
    <div className='flex flex-col gap-3'>
      
        <div className="w-[80vw] h-[88vh] lg:h-[75vh] mx-auto">
            <div className="flex justify-center ">
                  
                {
                    load ? <Skeleton className="h-[70vh] w-[75vw] mt-4 mb-2 bg-neutral-300 " /> : ""

                }  
                {
                    output ?  <img src={res} className='h-[80vh] w-[90vw] lg:h-[70vh] lg:w-[50vw] lg:mb-5 object-cover mt-5' alt="" /> : ""
                }

                {
                    text ? <div className="flex flex-col h-[75vh] w-[80vw] space-y-8 p-4 bg-neutral-100 justify-center items-center">
                    <FadeText
                        className="text-xl md:text-center text-left md:text-4xl font-bold text-black dark:text-white"
                        direction="up"
                        framerProps={{
                        show: { transition: { delay: 1 }, loop: Infinity },
                        }}
                        text="Imagination is the beginning of creation"
                    />
                    <FadeText
                        className="text-xl md:text-4xl text-left md:text-center font-bold text-black dark:text-white"
                        direction="right"
                        framerProps={{
                        show: { transition: { delay: 2 }, loop: Infinity },
                        }}
                        text="You imagine what you desire"
                    />
                    <FadeText
                        className="text-xl md:text-4xl text-left md:text-center font-bold text-black dark:text-white"
                        direction="down"
                        framerProps={{
                        show: { transition: { delay: 3 }, loop: Infinity },
                        }}
                        text="you will what you imagine"
                    />
                    <FadeText
                        className="text-xl md:text-4xl text-left md:text-center font-bold text-black dark:text-white"
                        direction="left"
                        framerProps={{
                        show: { transition: { delay: 4 }, loop: Infinity },
                        }}
                        text="At last, we will create what you like."
                    />
                    </div> : ""
                }

                
                
                
                

            </div>
        </div>



        <div className="w-[80vw] mx-auto flex flex-col justify-end">
            <div className="flex">
            <input type="text" ref={inputText} placeholder='enter your Prompt' className='border w-[75vw] lg:w-[80vw] py-2 px-2 outline-none '/>
            <button className='w-[80px] bg-black text-white' onClick={submitHandler}>Create</button>
            </div>
        </div>
      
    </div>
  )
}

export default Images
