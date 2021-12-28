import React from 'react'

const data = {
    "form":{
        "section":[
            {
                "order":1,
                "section_title":"Basic Information",
                "field":[
                    {
                        "name":"name",
                        "label":"Name",
                        "required":true,
                        "data-type":"Integer",
                        "html_element":"textbox"
                    },
                    {
                        "name":"email",
                        "label":"Email",
                        "hidden":false,
                        "required":true,
                        "data-type":"Integer",
                        "html_element":"textbox"
                    },
                    {
                        "name":"photo",
                        "label":"photo",
                        "hidden":false,
                        "options":[],
                        "required":true,
                        "data-type":"Image",
                        "html_element":"file"
                    },

                    {
                        "name":"photo",
                        "label":"photo",
                        "hidden":false,
                        "options":[],
                        "required":true,
                        "data-type":"Image",
                        "html_element":"file"
                    }

                ]
            }
        ]
    }
}

export default function Demo() {
    return (
        <div>
            <form>
                {
                    data.form.section.map(formData =>{
                        console.log("formData", formData)
                        return (
                           <div>
                               <h1>{formData.section_title}</h1>
                               {
                                   formData.field.map(inputData=>{
                                    console.log("inputData", inputData)
                                    return (
                                        <div>
                                            <label>{inputData.label}</label>
                                            <input type={inputData.html_element} name={inputData.name}/>
                                        </div>
                                    )
                                   })
                               }
                           </div>
                        )
                    })
                }
            </form>
        </div>
    )
}
