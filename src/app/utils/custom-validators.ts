import {FormGroup, ValidationErrors} from "@angular/forms";

export class CustomValidators {
  static emailShouldBeEquals(group: FormGroup): ValidationErrors {
    if (group.value.email === group.value.emailConfirm) {
      console.log('prawidłowy');
      return;
    } else {
    }

  };




  static atLeastOneShouldBeSelected(group: FormGroup): ValidationErrors {
    for (var key in group.value) {
      if (group.value[key]) {
        return;
      }
    }
    return {
      atLeastOneShouldBeSelected: true
    }
  };

  static requiredNumber(control): ValidationErrors {
    if(!isNaN(control.value)) {
      return;
    }
    return {
      requiredNumber: true
    }
  };

}
