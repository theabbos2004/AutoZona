import React from "react";
import Loding from "../components/Loding/Loding";

const About= React.lazy(()=>import("./About")) ;
const AskQuestionPage= React.lazy(()=>import("./AskQuestionPage")) ;
const CatalogProduct= React.lazy(()=>import("./CatalogProductPage")) ;
const CategoryPage= React.lazy(()=>import("./CategoryPage")) ;
const ContactPage= React.lazy(()=>import("./ContactsPage")) ;
const FAQPage= React.lazy(()=>import("./FAQpage")) ;
const NewsPage= React.lazy(()=>import("./NewsPage")) ;
const NotFoundPage= React.lazy(()=>import("./NotFoundPage")) ;
const ProductsPage= React.lazy(()=>import("./ProductsPage")) ;
const SearchPage= React.lazy(()=>import("./SearchPage")) ;
const HomePage=React.lazy(()=>import("./HomePage"))


export const routes = [
  { id: 1, path: "/", element: <React.Suspense fallback={<Loding/>}><HomePage/></React.Suspense> },
  { id: 2, path: "/category", element: <React.Suspense fallback={<Loding/>}><CategoryPage /></React.Suspense> },
  { id: 3, path: "/products", element: <React.Suspense fallback={<Loding/>}><ProductsPage /></React.Suspense> },
  { id: 5, path: "/ask-question", element: <React.Suspense fallback={<Loding/>}><AskQuestionPage /></React.Suspense> },
  { id: 6, path: "/contacts", element: <React.Suspense fallback={<Loding/>}><ContactPage /></React.Suspense> },
  { id: 7, path: "/catalog-product", element: <React.Suspense fallback={<Loding/>}><CatalogProduct /></React.Suspense> },
  { id: 8, path: "/about", element: <React.Suspense fallback={<Loding/>}><About /></React.Suspense> },
  { id: 9, path: "/search", element: <React.Suspense fallback={<Loding/>}><SearchPage/></React.Suspense> },
  { id: 10, path: "/faq", element: <React.Suspense fallback={<Loding/>}><FAQPage/></React.Suspense> },
  { id: 10, path: "/news", element: <React.Suspense fallback={<Loding/>}><NewsPage/></React.Suspense> },
  { id: 4, path: "*", element: <React.Suspense fallback={<Loding/>}><NotFoundPage /></React.Suspense> },
];
