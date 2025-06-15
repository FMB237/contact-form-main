//Let add our Js validation code
document.addEventListener("DOMContentLoaded",event=>{
     const FormEl=document.getElementById('contact-form');
     if (!FormEl) return;

     FormEl.addEventListener("submit",function(event){
        event.preventDefault();

        document.querySelectorAll('.errormsg').forEach(el=>el.textContent='');
        let redmessage="";

        let hasError=false;

        const FirstName=document.getElementById('FirstName').value.trim();
        const LastName=document.getElementById('LastName').value.trim();
        const email=document.getElementById('email').value.trim();
        const queryType = document.querySelector('input[name="queryType"]:checked');
        const message=document.getElementById("Message").value.trim();
        const Validationbox=document.getElementById('validationbox');
        

        // Hide previous success message
         const successdiv= document.getElementById('successdiv');
         successdiv.style.display="none";
         successdiv.innerHTML="";
    
        //Now let set out Js function
        if(FirstName === ""){
            
            document.getElementById('FirstNameError').textContent="This field is required";
            hasError=true;
        }
         if(LastName === ""){
            document.getElementById('LastNameError').textContent="This field is required";
            hasError=true;
        }
        if(email === '' || !email.includes('@') || !email.includes('.')){
            document.getElementById('EmailError').textContent='Please enter a valid email address';
            hasError=true;
        }
        if(!queryType){
            document.getElementById("QueryError").textContent="Please select a query type";
            hasError=true;
        }
           if (message === "") {
            document.getElementById('MessageError').textContent = "This field is required";
            hasError = true;
        }
        if (!Validationbox.checked) {
            document.getElementById('ConsentError').textContent = "You must consent to be contacted";
            hasError = true;
        }
        if(!hasError){
          successdiv.innerHTML=`<div class="MessageSent">
        <img src="assets/images/icon-success-check.svg">
        <p>Message Sent!</p>
        </div>
         <p class="last">Thanks for completing the form. We'll be in touch soon!</p>`;
         successdiv.style.display="block";
         FormEl.style.minHeight="1000px";
         FormEl.reset();
        }
        else{
            FormEl.style.minHeight="";
        }
     })

});