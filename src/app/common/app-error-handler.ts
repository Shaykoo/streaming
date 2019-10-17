import { ErrorHandler } from '@angular/core';

export class AppErrorHandler implements ErrorHandler{   // for all the unexpected errors in the application

    handleError(error){
        alert("Error: Unexpected Error Occured"); 
        console.log(error);
    }

}