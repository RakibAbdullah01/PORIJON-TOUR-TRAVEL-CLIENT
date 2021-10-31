import axios from 'axios';
import React from 'react';
import { useForm } from "react-hook-form";



const AddPackage = () => {
    const {register,handleSubmit, formState: { errors },} = useForm();
    const onSubmit = (data) => {
        console.log(data);
          axios.post(`https://porijon-sarver.herokuapp.com/pakages`,data)
          .then(res=>{
              console.log(res);
          })
          
      };
    return (
        <>
        <h1 class="heading">
                    <span>A</span>
                    <span>D</span>
                    <span>D</span>
                    <span class="space"></span>
                    <span>N</span>
                    <span>E</span>
                    <span>W</span>
                    <span class="space"></span>
                    <span>P</span>
                    <span>A</span>
                    <span>C</span>
                    <span>K</span>
                    <span>A</span>
                    <span>G</span>
                    <span>E</span>
                </h1>
            <div className="booking-card my-2 p-4 w-75 rounded mx-auto fs-4" >
            <form onSubmit={handleSubmit(onSubmit)}>
                <div className="row">

                    <div className="col-md-6">
                        <input
                            {...register("title")}
                            placeholder="Pakage Title"
                            className="p-2 m-2 w-100 rounded border-1"
                        />
                    </div>

                    <div className="col-md-6">
                        <input
                            {...register("location")}
                            placeholder="Tour Location"
                            className="p-2 m-2 w-100 rounded border-1"
                        />
                    </div>

                    <div className="col-md-3">
                        <input
                            {...register("duration")}
                            placeholder="Duration"
                            className="p-2 m-2 w-100 rounded border-1"
                        />
                    </div>

                    <div className="col-md-3">
                        <input
                            {...register("type")}
                            placeholder="Tour Type"
                            className="p-2 m-2 w-100 rounded border-1"
                        />
                    </div>

                    <div className="col-md-3">
                    <input
                            {...register("size")}
                            placeholder="Max Group Size"
                            className="p-2 m-2 w-100 rounded border-1"
                        />
                    </div>

                    <div className="col-md-3">
                    <input
                            {...register("price")}
                            placeholder="Price"
                            className="p-2 m-2 w-100 rounded border-1"
                        />
                    </div>
                    
                    

                    <div className="col-md-12">
                    <textarea
                            {...register("description")}
                            placeholder="Descriptions"
                            className="p-2 m-2 w-100 rounded border-1"
                        />
                    </div>

                    <div className="col-md-4">
                        <input
                            {...register("img_1")}
                            placeholder="Image URL 1"
                            className="p-2 m-2 w-100 rounded border-1"
                        />
                    </div>

                    <div className="col-md-4">
                        <input
                            {...register("img_2")}
                            placeholder="Image URL 2"
                            className="p-2 m-2 w-100 rounded border-1"
                        />
                    </div>

                    <div className="col-md-4">
                        <input
                            {...register("img_3")}
                            placeholder="Image URL 3"
                            className="p-2 m-2 w-100 rounded border-1"
                        />
                    </div>
              </div>
              
              {errors.exampleRequired && <span>This field is required</span>}

              <input type="submit" value="Add" className="btn-common w-25" />
            </form>
                

            </div>
        </>
    );
};

export default AddPackage;