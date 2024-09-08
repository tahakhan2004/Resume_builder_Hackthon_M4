function generateResume() {
    const firstName = (document.getElementById('firstName') as HTMLInputElement).value;
    const lastName = (document.getElementById('lastName') as HTMLInputElement).value;
    const title = (document.getElementById('title') as HTMLInputElement).value;
    const description = (document.getElementById('description') as HTMLTextAreaElement).value;
    const location = (document.getElementById('location') as HTMLInputElement).value;
    const phone = (document.getElementById('phone') as HTMLInputElement).value;
    const email = (document.getElementById('email') as HTMLInputElement).value;
    const skills = (document.getElementById('skills') as HTMLInputElement).value.split(',').map(skill => skill.trim()).join(', ');
    const education = (document.getElementById('education') as HTMLTextAreaElement).value.split('\n').map(line => `<p>${line}</p>`).join('');
    const experience = (document.getElementById('experience') as HTMLTextAreaElement).value.split('\n').map(line => `<p>${line}</p>`).join('');

    const resumeOutput = document.getElementById('resumeOutput') as HTMLDivElement;

    resumeOutput.innerHTML = `
        <div class="container">
            <div class="profile" contenteditable="true">
                <h1 class="profile_name">
                    <span class="profile_name_firstName">${firstName}</span>
                    <span class="profile_name_lastName">${lastName}</span>
                </h1>
                <p class="profile_title">${title}</p>
                <p class="description profile_description">${description}</p>
            </div>
            <div class="contact">
                <h3 class="title">Contact</h3>
                <p class="description" contenteditable="true">${location}</p>
                <p class="description" contenteditable="true">${phone}</p>
                <p class="description" contenteditable="true">${email}</p>
            </div>
            <div class="skills" >
                <h3 class="title">Skills</h3>
                <ul class="skills_list" contenteditable="true">
                    ${skills.split(', ').map(skill => `<li>${skill}</li>`).join('')}
                </ul>
            </div>
            <div class="education" contenteditable="true">
                <h3 class="title" contenteditable="false">Education</h3>
                ${education}
            </div>
            <div class="experience" contenteditable="true">
                <h3 class="title" contenteditable="false">Experience</h3>
                ${experience}
            </div>
        </div>
    `;

    // Clear input fields after resume generation
    const fields = ['firstName', 'lastName', 'title', 'description', 'location', 'phone', 'email', 'skills', 'education', 'experience'];
    fields.forEach(id => {
        const element = document.getElementById(id) as HTMLInputElement | HTMLTextAreaElement;
        if (element) {
            element.value = '';
        }
    });
}

// Ensure this script is included after the DOM is fully loaded
document.addEventListener('DOMContentLoaded', () => {
    const generateButton = document.getElementById('generateResumeButton') as HTMLButtonElement;
    if (generateButton) {
        generateButton.addEventListener('click', generateResume);
    }
});
