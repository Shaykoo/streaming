import { AbstractControl, ValidationErrors } from '@angular/forms';

export class UsernameValidators{   // custom validation class

static cannotContainSpace(control: AbstractControl): ValidationErrors | null {  //custom validartor function takes AbsractControl as a paramenter and returns ValidationErrors or null
        if((control.value).indexOf(' ') >= 0) {
            return {  // here we return a validationError object
                cannotContainSpace: true  // key is the mame of the error   
            }
        }
        return null;
    }

static shouldBeUnique(control: AbstractControl): Promise <ValidationErrors | null> { //takes AbstractCOntrol as the param and returns promise in return of validation errors or null

    return new Promise((resolve, reject)=> {  // returning promise 
           setTimeout(()=> {
                if(control.value === 'claire'){
                    resolve({shouldBeUnique:true});
                }
                else{
                    reject(null);
                }
            }, 2000);
        })
   }
}