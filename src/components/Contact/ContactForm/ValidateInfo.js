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

  if (!values.section) {
    errors.section = "Enter Section";
  }

  if (!values.studentNumber) {
    errors.studentNumber = "Enter Student Number";
  } else if (values.studentNumber.length !== 7) {
    errors.studentNumber = "Student Number should be of 7 digits";
  }
  if (!values.universityRollNumber) {
    errors.universityRollNumber = "Enter University Roll Number";
  } else if (
    values.universityRollNumber.length !== 13 &&
    values.universityRollNumber.length !== 10
  ) {
    errors.universityRollNumber = "Invalid University Roll Number";
  }

  return errors;
}
