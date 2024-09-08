// Wait for DOM content to load
document.addEventListener("DOMContentLoaded", function () {
    var form = document.getElementById("resumeForm");
    var resumeOutput = document.getElementById("resumeOutput");
    form.addEventListener("submit", function (event) {
        event.preventDefault(); // Prevent form submission
        // Extract input values from the form
        var fullName = document.getElementById("fullName").value;
        var email = document.getElementById("email").value;
        var phone = document.getElementById("phone").value;
        var education = document.getElementById("education").value;
        var experience = document.getElementById("experience").value;
        var skills = document.getElementById("skills").value;
        // Handle profile picture
        var profilePicInput = document.getElementById("profilePic");
        var profilePicUrl = "";
        if (profilePicInput.files && profilePicInput.files[0]) {
            profilePicUrl = URL.createObjectURL(profilePicInput.files[0]);
        }
        // Create the resume layout in the output section
        resumeOutput.innerHTML = "\n            <div class=\"resume\">\n                <h2>".concat(fullName, "'s Resume</h2>\n                ").concat(profilePicUrl ? "<img src=\"".concat(profilePicUrl, "\" alt=\"Profile Picture\" class=\"profile-pic\">") : '', "\n                <p><strong>Email:</strong> ").concat(email, "</p>\n                <p><strong>Phone:</strong> ").concat(phone, "</p>\n                <h3>Education</h3>\n                <p>").concat(education, "</p>\n                <h3>Professional Experience</h3>\n                <p>").concat(experience, "</p>\n                <h3>Skills</h3>\n                <p>").concat(skills, "</p>\n            </div>\n        ");
    });
});
// Wait for DOM content to load
document.addEventListener("DOMContentLoaded", function () {
    var form = document.getElementById("resumeForm");
    var resumeOutput = document.getElementById("resumeOutput");
    var editButton = document.getElementById("editButton");
    // Edit Button ka Event Listener
    editButton.addEventListener("click", function () {
        // Edit Mode mein switch karo
        editMode();
    });
    // Edit Mode function
    function editMode() {
        // Form ko visible karo
        form.style.display = "block";
        // Resume Output ko hide karo
        resumeOutput.style.display = "none";
        // Edit Button ko hide karo
        editButton.style.display = "none";
        // Save Button ko visible karo
        var saveButton = document.getElementById("saveButton");
        saveButton.style.display = "block";
    }
    // Save Button ka Event Listener
    var saveButton = document.getElementById("saveButton");
    saveButton.addEventListener("click", function () {
        // Form data ko update karo
        var fullName = document.getElementById("fullName").value;
        var email = document.getElementById("email").value;
        var phone = document.getElementById("phone").value;
        var education = document.getElementById("education").value;
        var experience = document.getElementById("experience").value;
        var skills = document.getElementById("skills").value;
        // Handle profile picture
        var profilePicInput = document.getElementById("profilePic");
        var profilePicUrl = "";
        if (profilePicInput.files && profilePicInput.files[0]) {
            profilePicUrl = URL.createObjectURL(profilePicInput.files[0]);
        }
        // Resume layout ko update karo
        resumeOutput.innerHTML = "\n            <div class=\"resume\">\n                <h2>".concat(fullName, "'s Resume</h2>\n                ").concat(profilePicUrl ? "<img src=\"".concat(profilePicUrl, "\" alt=\"Profile Picture\" class=\"profile-pic\">") : '', "\n                <p><strong>Email:</strong> ").concat(email, "</p>\n                <p><strong>Phone:</strong> ").concat(phone, "</p>\n                <h3>Education</h3>\n                <p>").concat(education, "</p>\n                <h3>Professional Experience</h3>\n                <p>").concat(experience, "</p>\n                <h3>Skills</h3>\n                <p>").concat(skills, "</p>\n            </div>\n        ");
        // Form ko hide karo
        form.style.display = "none";
        // Resume Output ko visible karo
        resumeOutput.style.display = "block";
        // Edit Button ko visible karo
        editButton.style.display = "block";
        // Save Button ko hide karo
        saveButton.style.display = "none";
    });
    // Form submission ka Event Listener
    form.addEventListener("submit", function (event) {
        event.preventDefault(); // Prevent form submission
        // Extract input values from the form
        var fullName = document.getElementById("fullName").value;
        var email = document.getElementById("email").value;
        var phone = document.getElementById("phone").value;
        var education = document.getElementById("education").value;
        var experience = document.getElementById("experience").value;
        var skills = document.getElementById("skills").value;
        // Handle profile picture
        var profilePicInput = document.getElementById("profilePic");
        var profilePicUrl = "";
        if (profilePicInput.files && profilePicInput.files[0]) {
            profilePicUrl = URL.createObjectURL(profilePicInput.files[0]);
        }
        // Create the resume layout in the output section
        resumeOutput.innerHTML = "\n            <div class=\"resume\">\n                <h2>".concat(fullName, "'s Resume</h2>\n                ").concat(profilePicUrl ? "<img src=\"".concat(profilePicUrl, "\" alt=\"Profile Picture\" class=\"profile-pic\">") : '', "\n                <p><strong>Email:</strong> ").concat(email, "</p>\n                <p><strong>Phone:</strong> ").concat(phone, "</p>\n                <h3>Education</h3>\n                <p>").concat(education, "</p>\n                <h3>Professional Experience</h3>\n                <p>").concat(experience, "</p>\n                <h3>Skills</h3>\n                <p>").concat(skills, "</p>\n            </div>\n        ");
    });
});
