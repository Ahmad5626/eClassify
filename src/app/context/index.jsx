"use client"

import { createContext, useEffect, useState } from "react";
import { initialSignInFormData, initialSignUpFormData, initialUpdateFormData } from "@/app/config";
import { createCourse, deleteCourse, editCourse, getAllCourses } from "../api/CousreApi";

import { uploadFile } from "../api/uploadImg";
import { toast, Toaster } from "sonner";
import { registerService } from "@/app/services/authApi";
export const Context = createContext(null);

export const ContextProvider = ({ children }) => {
  const [showAddCourseModal, setShowAddCourseModal] = useState(false)
  
  const [showeditCourseModal, setShoweditCourseModal] = useState(false)
  const [editCourseData, setEditCourseData] = useState({})
  const [uploadingHero, setUploadingHero] = useState(false)
  const [courseData, setCourseData] = useState([])
  const [activeTab, setActiveTab] = useState("signin");
  const [signInFormdata, setSignInFormdata] = useState(initialSignInFormData);
  const [signUpFormdata, setSignUpFormdata] = useState(initialSignUpFormData);
  const [newLecture, setNewLecture] = useState([])

  useEffect(() => {
    handleGetAllCourses()
  }, [])
  
  const handleCreateCourse = async (e) => {
    e.preventDefault()
    const data = new FormData(e.target)
    const course = Object.fromEntries(data)
    const imgFile = data.get('image')
    const uploadedImg = await uploadFile(imgFile)

    const res = await createCourse({ ...course, image: uploadedImg })
    if (res.success) {
      toast.success(res.message)
      setShowAddCourseModal(false)
      handleGetAllCourses()
    } else {
      toast.error(res.error)
    }

  }

  const handleGetAllCourses = async (data) => {
    const res = await getAllCourses()
    console.log(res)
    if (res) {
      setCourseData(res.courses)

    }
  }

  const handleDeleteCourse = async (id) => {
    const isComfirm = window.confirm('Are you sure you want to delete this course?')
    if(isComfirm){
      
      const res = await deleteCourse(id)
      if (res.success) {
        toast.success(res.message)
        handleGetAllCourses()
      }
    }
 toast.error(res.error)
  
   
  }

  const handleEditCourse = async (e) => {
    e.preventDefault()
    const data = new FormData(e.target)
    const course = Object.fromEntries(data)
    console.log(course);
    
    const imgFile = data.get('image')
    const id = data.get('id')
    const imageshow = data.get('imageshow')
    console.log(imageshow);
    setUploadingHero(true)
    const uploadedImg = await uploadFile(imgFile)
    setUploadingHero(false)
    const res = await editCourse(id, { ...course, image: uploadedImg,lectures:newLecture })
    if (res.success) {
      toast.success(res.message)
      handleGetAllCourses()
      setShoweditCourseModal(false)
    } else {
      toast.error(res.error)
    }
  }



  // auth fucntion 
   function handleChangeSignUpFormdata(e) {
    const { name, value } = e.target;
   
    setSignUpFormdata({ ...signUpFormdata, [name]: value });
  }

function handleChangeSignInFormdata(e) {
    const { name, value } = e.target;
    setSignInFormdata({ ...signInFormdata, [name]: value });
  }
 //   check if signin form is valid
  function checkIfSignInFormIsValid() {
    return (
      signInFormdata &&
      signInFormdata.email !== "" &&
      signInFormdata.password !== ""
    );
  }

    //   check if signup form is valid
function checkIfSignUpFormIsValid() {
  const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;

  return (
    signUpFormdata &&
    signUpFormdata.fullName !== "" &&
    signUpFormdata.userEmail !== "" &&
    signUpFormdata.password !== "" &&
    passwordRegex.test(signUpFormdata.password)
  );
}

const registerHandleSubmit = async (e) => {
  e.preventDefault();

  try {
    const result = await registerService(signUpFormdata);
    console.log(result);

    if (result?.success) {
      toast.success("Registered successfully!");
      setActiveTab("signin"); // ✅ change tab after successful registration
    } else {
      toast.error(result.message || "Registration failed");
    }
  } catch (error) {
    // ✅ This handles unexpected server errors or non-JSON responses
    const message = error?.response?.data?.message || error.message || "Something went wrong";
    toast.error(message);
  }
};

 const loginHandleSubmit = async (e) => {
    e.preventDefault();
    const result = await loginUser(signInFormdata);
   try {
     if (result?.success) {
      toast.success("Login successfully!");
      localStorage.setItem("id", result.data.user._id);

      navigator("/dashboard");
      setActiveSection("profile");
      window.location.reload();
    } else {
      toast.error(result.message || "Login failed");
      
   }
   } catch (error) {
    const message = error?.response?.data?.message || error.message || "Something went wrong";
    toast.error(message);
   }

  };


  return <Context.Provider value={{
    handleCreateCourse,
    showAddCourseModal,
    setShowAddCourseModal,
    courseData,
    handleDeleteCourse,
    handleEditCourse,
    showeditCourseModal,
    setShoweditCourseModal,
    editCourseData,
    setEditCourseData,
    uploadingHero,
    newLecture,
     setNewLecture,
     signInFormdata,
    setSignInFormdata,
    signUpFormdata,
    setSignUpFormdata,
    handleChangeSignUpFormdata,
    handleChangeSignInFormdata,
    checkIfSignInFormIsValid,
    checkIfSignUpFormIsValid,
    registerHandleSubmit,
    loginHandleSubmit,
    Toaster,
    activeTab,
    setActiveTab

  }}>{children}</Context.Provider>;
};