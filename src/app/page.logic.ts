
import {authService} from "@/services/authService";
import { useState } from "react";

const usePage = () => {
const [toggleSignUp, setToggleSignUp] = useState<boolean>(false);
const handleToggleSignUp = () => {
    setToggleSignUp(!toggleSignUp);
}


return {handleToggleSignUp, toggleSignUp}
}

export default usePage;