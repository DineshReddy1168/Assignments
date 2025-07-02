document.addEventListener("DOMContentLoaded", function () {
  const form = document.querySelector("form");

  form.addEventListener("submit", function (e) {
    e.preventDefault(); 

    const name = document.getElementById("stuName").value.trim();
    const email = document.getElementById("stuEmail").value.trim();
    const password = document.getElementById("stuPassword").value;
    const gender = document.querySelector("input[name='stuGender']:checked");
    const course = document.getElementById("stuCourse").value;
    const interests = document.querySelectorAll("input[name='interests']:checked");
    const dob = document.getElementById("stuDOB").value;
    const photo = document.getElementById("stuPhoto").files[0];
    const grade = document.getElementById("stuGrade").value;
    const bio = document.getElementById("stuBio").value.trim();

    
    const errors = [];

    // Name validation
    if (name === "") {
      errors.push("Name is required.");
    }

    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (email === "") {
      errors.push("Email is required.");
    } else if (!emailRegex.test(email)) {
      errors.push("Email format is invalid.");
    }

        // Password validation
    const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;

    if (password === "") {
      errors.push("Password is required.");
    } else if (!passwordRegex.test(password)) {
      errors.push("Password must be at least 8 characters long and include uppercase, lowercase, number, and special character.");
    }

    // Gender validation
    if (!gender) {
      errors.push("Gender must be selected.");
    }

    // Course validation
    if (course === "") {
      errors.push("Course must be selected.");
    }

    // Interests validation (at least 1 selected)
    if (interests.length === 0) {
      errors.push("At least one interest must be selected.");
    }

    // DOB validation
    if (dob === "") {
      errors.push("Date of birth is required.");
    } else {
      const birthDate = new Date(dob);
      const today = new Date();
      if (birthDate >= today) {
        errors.push("Date of birth must be in the past.");
      }
    }

    // Photo validation (file must be selected and must be an image)
    if (!photo) {
      errors.push("Photo must be uploaded.");
    } else if (!photo.type.startsWith("image/")) {
      errors.push("Uploaded file must be an image.");
    }

    // Grade validation (0–100)
    if (grade < 0 || grade > 100) {
      errors.push("Grade must be between 0 and 100.");
    }

    // Bio validation (not empty and at least 10 characters)
    if (bio.length < 10) {
      errors.push("Bio must be at least 10 characters long.");
    }

    // Show errors or success message
    if (errors.length > 0) {
      alert("Please fix the following errors:\n\n" + errors.join("\n"));
    } else {
      alert("Student added successfully!");
      form.reset(); 
    }
  });
});
