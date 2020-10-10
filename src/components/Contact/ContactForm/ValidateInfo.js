export default function validateInfo(values) {
  let errors = {};

  if (!values.fullName.trim()) {
    errors.fullName = "Full Name required";
  }

  if (!values.email) {
    errors.email = "Email required";
  } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)) {
    errors.email = "Email address is invalid";
  }

  if(!values.section){
    errors.section = "Enter Section";
  }

  if(!values.studentNumber){
    errors.studentNumber = "Enter Student Number";
  }
  if(!values.universityRollNumber){
    errors.universityRollNumber = "Enter University Roll Number";
  }

  // if (!values.message) {
  //   errors.message = "Message required";
  // }

  return errors;
}
