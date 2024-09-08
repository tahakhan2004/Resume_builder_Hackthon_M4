function generateResume() {
    var firstName = document.getElementById('firstName').value;
    var lastName = document.getElementById('lastName').value;
    var title = document.getElementById('title').value;
    var description = document.getElementById('description').value;
    var location = document.getElementById('location').value;
    var phone = document.getElementById('phone').value;
    var email = document.getElementById('email').value;
    var skills = document.getElementById('skills').value.split(',').map(function (skill) { return skill.trim(); }).join(', ');
    var education = document.getElementById('education').value.split('\n').map(function (line) { return "<p>".concat(line, "</p>"); }).join('');
    var experience = document.getElementById('experience').value.split('\n').map(function (line) { return "<p>".concat(line, "</p>"); }).join('');
    var resumeOutput = document.getElementById('resumeOutput');
    resumeOutput.innerHTML = "\n        <div class=\"container\">\n            <div class=\"profile\" contenteditable=\"true\">\n                <h1 class=\"profile_name\">\n                    <span class=\"profile_name_firstName\">".concat(firstName, "</span>\n                    <span class=\"profile_name_lastName\">").concat(lastName, "</span>\n                </h1>\n                <p class=\"profile_title\">").concat(title, "</p>\n                <p class=\"description profile_description\">").concat(description, "</p>\n            </div>\n            <div class=\"contact\">\n                <h3 class=\"title\">Contact</h3>\n                <p class=\"description\" contenteditable=\"true\">").concat(location, "</p>\n                <p class=\"description\" contenteditable=\"true\">").concat(phone, "</p>\n                <p class=\"description\" contenteditable=\"true\">").concat(email, "</p>\n            </div>\n            <div class=\"skills\" >\n                <h3 class=\"title\">Skills</h3>\n                <ul class=\"skills_list\" contenteditable=\"true\">\n                    ").concat(skills.split(', ').map(function (skill) { return "<li>".concat(skill, "</li>"); }).join(''), "\n                </ul>\n            </div>\n            <div class=\"education\" contenteditable=\"true\">\n                <h3 class=\"title\" contenteditable=\"false\">Education</h3>\n                ").concat(education, "\n            </div>\n            <div class=\"experience\" contenteditable=\"true\">\n                <h3 class=\"title\" contenteditable=\"false\">Experience</h3>\n                ").concat(experience, "\n            </div>\n        </div>\n    ");
    // Clear input fields after resume generation
    var fields = ['firstName', 'lastName', 'title', 'description', 'location', 'phone', 'email', 'skills', 'education', 'experience'];
    fields.forEach(function (id) {
        var element = document.getElementById(id);
        if (element) {
            element.value = '';
        }
    });
}
// Ensure this script is included after the DOM is fully loaded
document.addEventListener('DOMContentLoaded', function () {
    var generateButton = document.getElementById('generateResumeButton');
    if (generateButton) {
        generateButton.addEventListener('click', generateResume);
    }
});
