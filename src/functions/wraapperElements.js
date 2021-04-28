import MyImage from "../components/myImage/MyImage";
import ChildElement from "../components/childElement/ChildElement";
import {logToConsole, mapArray} from "./examples";

export const wrapperElements = [
    {
      name: "Ana 1",
      surname: "Surname 1",
      city: "Cetinje",
      image:   <MyImage src="logo192.png"/>,
      childElement: ChildElement,
        onClick: () => logToConsole()
    },{
      name: "Ana 2",
      surname: "Surname 1",
      city: "Cetinje",
      image:   <MyImage src="logo192.png"/>,
      childElement: ChildElement,
        onClick: () => logToConsole()
    },{
      name: "Ana 3",
      surname: "Surname 2",
      city: "Cetinje",
      image:   <MyImage src="logo192.png"/>,
      childElement: ChildElement,
        onClick: () => logToConsole()
    },{
      name: "Ana 4",
      surname: "Surname 3",
      city: "Cetinje",
      image:   <MyImage src="logo192.png"/>,
      childElement: ChildElement,
        onClick: () => logToConsole()
    },
]