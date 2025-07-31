"use client";

import React from "react";
import { X } from "lucide-react"; 
export default function SearchFormReset() {
  const reset = () => {
    const form = document.querySelector(
      ".search-form"
    ) as HTMLFormElement | null;

    if (form) form.reset();
  };

  return (
    <button
      type="button"                 
      onClick={reset}
      className="search-btn text-white"
    >
      <X className ="size-5"/>
    </button>
  );
}
