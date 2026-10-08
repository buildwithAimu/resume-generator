document.getElementById('generateBtn').addEventListener('click', function() {
    document.getElementById('formContainer').style.display = 'none';
    document.getElementById('resumeContainer').style.display = 'block';

    document.getElementById('r_name').textContent = document.getElementById('name').value;
    document.getElementById('r_title').textContent = document.getElementById('title').value;
    document.getElementById('r_email').textContent = 'Email: ' + document.getElementById('email').value;
    document.getElementById('r_phone').textContent = 'Phone: ' + document.getElementById('phone').value;
    document.getElementById('r_address').textContent = 'Address: ' + document.getElementById('address').value;

    const skillsArray = document.getElementById('skills').value.split(',');
    const skillsList = document.getElementById('r_skills');
    skillsList.innerHTML = '';
    skillsArray.forEach(skill => {
        const li = document.createElement('li');
        li.textContent = skill.trim();
        skillsList.appendChild(li);
    });

    const educationArray = document.getElementById('education').value.split(',');
    const educationList = document.getElementById('r_education');
    educationList.innerHTML = '';
    educationArray.forEach(edu => {
        const li = document.createElement('li');
        li.textContent = edu.trim();
        educationList.appendChild(li);
    });

    const experienceArray = document.getElementById('experience').value.split(',');
    const experienceList = document.getElementById('r_experience');
    experienceList.innerHTML = '';
    experienceArray.forEach(exp => {
        const li = document.createElement('li');
        li.textContent = exp.trim();
        experienceList.appendChild(li);
    });

    const photoInput = document.getElementById('photoInput').files[0];
    if (photoInput) {
        const reader = new FileReader();
        reader.onload = function(e) {
            document.getElementById('photo').src = e.target.result;
        }
        reader.readAsDataURL(photoInput);
    } else {
        document.getElementById('photo').src = 'https://via.placeholder.com/100';
    }
});
