import React, {useContext, useEffect, useReducer} from "react";
import reducer from "./reducer";
import { onAuthStateChanged, createUserWithEmailAndPassword, signInWithEmailAndPassword } from "firebase/auth";
import { auth, db } from "./firebase";


const AppContext = React.createContext();

// const API = ""

const initalState = {
    name: "",
    image: "",
    para: "",
    services: [
        {                   
            id : 1,
            title: "Advertising Services",
            image: "./images/srv/img_analytics.jpg",
            desc: "Revolutionize your advertising strategy with our innovative LED display advertising services tailored specifically for public transport. We've installed cutting-edge LED displays inside buses, providing a dynamic platform for advertisers to showcase their brands and messages to a captive audience.",
        },
    ],

    sDetails: [
        {                   
            id : 1,
            title: "Advertisement",
            image: "./images/sd_img/image-1536x806.png",
            video : "/videos/adsync.mp4",
            desc: "With our expertise in LED display technology and advertising solutions, we offer a seamless and hassle-free experience for advertisers looking to amplify their reach and engagement. Join us in transforming the way you advertise and unlock new opportunities for your brand to shine.            ",
        },
    ],
        

};

const AppProvider = ({ children }) => {
    const [state,dispatch] = useReducer(reducer,initalState)


    const updateHomePage = () => {
        return dispatch({
            type: "HOME_UPDATE",
            payload: {
                name: "Grow Business with Modern Marketing Solutions",
                para: "Harness the Power of Marketing: Fuel Your Business Growth with Modern Solutions, Unleashing Opportunities and Insight in Every Byte.",
                image: "./images/bus.jpg",
            },
        });
    };
    
    const updateAboutPage = () => {
        return dispatch({
            type: "About_UPDATE",
            payload: {
                name: "AdSync About",
                para: "Harness the Power of Marketing: Fuel Your Business Growth with Modern Solutions, Unleashing Opportunities and Insight in Every Byte.",
                image: "./images/about1.svg",
            },
        });
    };
    
    const updateServicePage = () => {
        return dispatch({
            type: "Service_UPDATE",
            payload: {
                name: "AdSync Services",
                para: "Harness the Power of Marketing: Fuel Your Business Growth with Modern Solutions, Unleashing Opportunities and Insight in Every Byte.",
                image: "./images/about1.svg",
            },
        });
    };
    
    
// #################### ///////////////// #################### ///////////////// #################### ///////////////

    //////// to get the api data

    const getServices = () => {
        try{
            // const res = await fetch(url);
            // const data = await res.json();
            dispatch({   
                type: "GET_SERVICES",
                payload:data,
            });

        }catch(error){
            console.log(error);
        }
    }

    const S_Details = () => {
        try{

            dispatch({   
                type: "GET_S_Details",
                payload:data,
            });

        }catch(error){
            console.log(error);
        }
    }
// #################### ///////////////// #################### ///////////////// #################### ///////////////

    const signUp = async (email, password, additionalData) => {
        try {
          const userCredential = await createUserWithEmailAndPassword(auth, email, password);
          const user = userCredential.user;
    
          // Save additional user information to Firestore
          await setDoc(doc(db, "users", user.uid), {
            ...additionalData,
            email,
          });
    
          setCurrentUser(user);
        } catch (error) {
          console.error("Error signing up:", error);
        }
      };
    
      const logIn = async (email, password) => {
        try {
          await signInWithEmailAndPassword(auth, email, password);
        } catch (error) {
          console.error("Error logging in:", error);
        }
      };

    ////// to call the api

    // useEffect(() => {
    //     getServices(API);
    // }, []);

// #################### ///////////////// #################### ///////////////// #################### ///////////////

    return (<AppContext.Provider value={{...state,updateHomePage,updateAboutPage,updateServicePage,getServices,S_Details, signUp, logIn}}>
        {children}
        </AppContext.Provider>
    );
};

// global custom hook

const useGlobalContext = () => {
    return useContext(AppContext);
};

export {AppContext , AppProvider,useGlobalContext}