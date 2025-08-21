import baseUrl from "../utils/constant";

export const createCourse= async(data)=>{
  try {
      const response =await fetch(`${baseUrl}/api/courses/createCourse`,{
        method:"POST",
        headers: {
            'Content-Type': 'application/json'
            },
        body:JSON.stringify(data)
    })
    const res= await response.json();
    return res
  } catch (error) {
    console.log(error);
    return error
    
  }
}


export const getAllCourses= async()=>{
  try {
      const response =await fetch(`${baseUrl}/api/courses/getAllCourses`,{
        method:"GET",
        headers: {
            'Content-Type': 'application/json'
            },
       
    })
    const res= await response.json();
    return res
  } catch (error) {
    console.log(error);
    return error
    
  }
}

export const deleteCourse= async(id)=>{
  try {
      const response =await fetch(`${baseUrl}/api/courses/deleteCourse/${id}`,{
        method:"DELETE",
        headers: {
            'Content-Type': 'application/json'
            },
        
    })
    const res= await response.json();
    return res
  } catch (error) {
    console.log(error);
    return error
    
  }
}

export const editCourse= async(id,data)=>{
  console.log(id);
  
  try {
      const response =await fetch(`${baseUrl}/api/courses/editCourse/${id}`,{
        method:"PATCH",
        headers: {
            'Content-Type': 'application/json'
            },
        body:JSON.stringify(data)
    })
    const res= await response.json();
    return res
  } catch (error) {
    console.log(error);
    return error
    
  }
}
export const createLecture=async(id,data)=>{
  try {
      const response =await fetch(`${baseUrl}/api/courses/createLecture/${id}`,{
        method:"PATCH",
        headers: {
            'Content-Type': 'application/json'
            },
        body:JSON.stringify(data)
    })
    const res= await response.json();
    return res
  } catch (error) {
    console.log(error);
    return error
    
  }
}

export const deleteLecture = async (courseId, lectureId) => {
  try {
    const response = await fetch(`${baseUrl}/api/courses/deleteLecture/${courseId}/${lectureId}`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
      },
    })

    const data = await response.json()

    if (!data.success) {
      throw new Error(data.error || "Failed to delete lecture")
    }

    return data
  } catch (error) {
    console.error("Delete lecture error:", error)
    throw error
  }
}