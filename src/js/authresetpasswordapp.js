import { Authorize } from "./authorize.js";

// UI
const resetpasswordform = document.getElementById('resetpasswordform');
const msg = document.getElementById("msg");
// Register

resetpasswordform.addEventListener('submit',(e)=>{
    e.preventDefault();

    const resetmail = document.getElementById('resetemail').value.trim();


    console.log(resetmail);
    
    const {resetPassword} = Authorize();
    resetPassword(resetmail,msg);
});
