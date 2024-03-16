"use client";

import { useEffect } from "react";

export default function Template({ children }: { children: React.ReactNode }) {
  useEffect(() => {
    const slideUpPages = document.querySelectorAll(".pageSlideUp");
    // const slideUpElements = document.querySelectorAll(".slideUp");
    // const slideRightElements = document.querySelectorAll(".slideRight");

    // const elementObserver = new IntersectionObserver(
    //   (entries) => {
    //     entries.forEach((entry) => {
    //       if (entry.isIntersecting) {
    //         entry.target.classList.add("show"); // Add animation class
    //       } else {
    //         entry.target.classList.remove("show"); // Remove animation class (optional)
    //       }
    //     });
    //   },
    //   { threshold: 0.2 }
    // );
    const pageObserver = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("show"); // Add animation class
        } else {
          entry.target.classList.remove("show"); // Remove animation class (optional)
        }
      });
    });

    // slideUpElements.forEach((element) => {
    //   elementObserver.observe(element);
    // });
    // slideRightElements.forEach((element) => {
    //   elementObserver.observe(element);
    // });
    slideUpPages.forEach((element) => {
      pageObserver.observe(element);
    });

    return () => {
      // elementObserver.disconnect(); // Cleanup on unmount
      pageObserver.disconnect(); // Cleanup on unmount
    };
  }, []);
  return <>{children}</>;
}
