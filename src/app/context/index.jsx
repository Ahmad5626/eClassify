"use client"

import { createContext, useEffect, useState } from "react";
import { initialSignInFormData, initialSignUpFormData, initialUpdateFormData } from "@/app/config";


import { uploadFile } from "../api/uploadImg";
import { toast, Toaster } from "sonner";

export const Context = createContext(null);

export const ContextProvider = ({ children }) => {


  
  
 


  return <Context.Provider value={{
    

  }}>{children}</Context.Provider>;
};