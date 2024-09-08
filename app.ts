// Wait for DOM content to load
document.addEventListener("DOMContentLoaded", function() {
    const form = document.getElementById("resumeForm") as HTMLFormElement;
    const resumeOutput = document.getElementById("resumeOutput") as HTMLElement;

    form.addEventListener("submit", function(event) {
        event.preventDefault();  // Prevent form submission

        // Extract input values from the form
        const fullName = (document.getElementById("fullName") as HTMLInputElement).value;
        const email = (document.getElementById("email") as HTMLInputElement).value;
        const phone = (document.getElementById("phone") as HTMLInputElement).value;
        const education = (document.getElementById("education") as HTMLTextAreaElement).value;
        const experience = (document.getElementById("experience") as HTMLTextAreaElement).value;
        const skills = (document.getElementById("skills") as HTMLTextAreaElement).value;

        // Handle profile picture
        const profilePicInput = document.getElementById("profilePic") as HTMLInputElement;
        let profilePicUrl = "";
        if (profilePicInput.files && profilePicInput.files[0]) {
            profilePicUrl = URL.createObjectURL(profilePicInput.files[0]);
        }

        // Create the resume layout in the output section
        resumeOutput.innerHTML = `
            <div class="resume">
                <h2>${fullName}'s Resume</h2>
                ${profilePicUrl ? `<img src="${profilePicUrl}" alt="Profile Picture" class="profile-pic">` : ''}
                <p><strong>Email:</strong> ${email}</p>
                <p><strong>Phone:</strong> ${phone}</p>
                <h3>Education</h3>
                <p>${education}</p>
                <h3>Professional Experience</h3>
                <p>${experience}</p>
                <h3>Skills</h3>
                <p>${skills}</p>
            </div>
        `;
    });
});


// Wait for DOM content to load
document.addEventListener("DOMContentLoaded", function() {
    const form = document.getElementById("resumeForm") as HTMLFormElement;
    const resumeOutput = document.getElementById("resumeOutput") as HTMLElement;
    const editButton = document.getElementById("editButton") as HTMLButtonElement;

    // Edit Button ka Event Listener
    editButton.addEventListener("click", function() {
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
        const saveButton = document.getElementById("saveButton") as HTMLButtonElement;
        saveButton.style.display = "block";
    }

    // Save Button ka Event Listener
    const saveButton = document.getElementById("saveButton") as HTMLButtonElement;
    saveButton.addEventListener("click", function() {
        // Form data ko update karo
        const fullName = (document.getElementById("fullName") as HTMLInputElement).value;
        const email = (document.getElementById("email") as HTMLInputElement).value;
        const phone = (document.getElementById("phone") as HTMLInputElement).value;
        const education = (document.getElementById("education") as HTMLTextAreaElement).value;
        const experience = (document.getElementById("experience") as HTMLTextAreaElement).value;
        const skills = (document.getElementById("skills") as HTMLTextAreaElement).value;

        // Handle profile picture
        const profilePicInput = document.getElementById("profilePic") as HTMLInputElement;
        let profilePicUrl = "";
        if (profilePicInput.files && profilePicInput.files[0]) {
            profilePicUrl = URL.createObjectURL(profilePicInput.files[0]);
        }

        // Resume layout ko update karo
        resumeOutput.innerHTML = `
            <div class="resume">
                <h2>${fullName}'s Resume</h2>
                ${profilePicUrl ? `<img src="${profilePicUrl}" alt="Profile Picture" class="profile-pic">` : ''}
                <p><strong>Email:</strong> ${email}</p>
                <p><strong>Phone:</strong> ${phone}</p>
                <h3>Education</h3>
                <p>${education}</p>
                <h3>Professional Experience</h3>
                <p>${experience}</p>
                <h3>Skills</h3>
                <p>${skills}</p>
            </div>
        `;

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
    form.addEventListener("submit", function(event) {
        event.preventDefault();  // Prevent form submission

        // Extract input values from the form
        const fullName = (document.getElementById("fullName") as HTMLInputElement).value;
        const email = (document.getElementById("email") as HTMLInputElement).value;
        const phone = (document.getElementById("phone") as HTMLInputElement).value;
        const education = (document.getElementById("education") as HTMLTextAreaElement).value;
        const experience = (document.getElementById("experience") as HTMLTextAreaElement).value;
        const skills = (document.getElementById("skills") as HTMLTextAreaElement).value;

        // Handle profile picture
        const profilePicInput = document.getElementById("profilePic") as HTMLInputElement;
        let profilePicUrl = "";
        if (profilePicInput.files && profilePicInput.files[0]) {
            profilePicUrl = URL.createObjectURL(profilePicInput.files[0]);
        }

        // Create the resume layout in the output section
        resumeOutput.innerHTML = `
            <div class="resume">
                <h2>${fullName}'s Resume</h2>
                ${profilePicUrl ? `<img src="${profilePicUrl}" alt="Profile Picture" class="profile-pic">` : ''}
                <p><strong>Email:</strong> ${email}</p>
                <p><strong>Phone:</strong> ${phone}</p>
                <h3>Education</h3>
                <p>${education}</p>
                <h3>Professional Experience</h3>
                <p>${experience}</p>
                <h3>Skills</h3>
                <p>${skills}</p>
            </div>
        `;
    });
});



