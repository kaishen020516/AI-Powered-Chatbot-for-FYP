document.addEventListener("DOMContentLoaded", function () {
    appendBotMessage("Hello! I am the University Chatbot. How can I help you?");
});

document.getElementById("userInput").addEventListener("keydown", function (event) {
    // Check if the pressed key is "Enter" (key code 13)
    if (event.key === "Enter") {
        // Prevent the default behavior of the "Enter" key (e.g., form submission)
        event.preventDefault();
        
        // Process the user input
        const userInput = document.getElementById("userInput").value;
        appendUserMessage(userInput);  // Add this line to append user input to the chat
        processUserInput(userInput);
        
        // Optionally, clear the input field after processing
        document.getElementById("userInput").value = "";
    }
});

function login() {
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;

    // Simulated user data
    const simulatedEmail = '123@gmail.com';
    const simulatedPassword = '123456';

    if (email === simulatedEmail && password === simulatedPassword) {
        alert('Login successful! Redirecting to Chatbot...');
        
        // Redirect to main.html after successful login
        window.location.href = 'main.html';
    } else {
        document.getElementById('loginError').innerText = 'Invalid email or password';
    }
}







function togglePasswordVisibility() {
    const passwordInput = document.getElementById('password');
    passwordInput.type = (passwordInput.type === 'password') ? 'text' : 'password';
}

function register() {
    // Get form inputs
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;
    const confirmPassword = document.getElementById('confirmPassword').value;

    // Check for empty fields
    if (!email || !password || !confirmPassword) {
        document.getElementById('registerError').innerText = 'Please fill in all fields.';
        return;
    }

    // Check for valid email format
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
        document.getElementById('registerError').innerText = 'Invalid email format.';
        return;
    }

    // Check if password and confirm password match
    if (password !== confirmPassword) {
        document.getElementById('registerError').innerText = 'Passwords do not match.';
        return;
    }

    // Simulated registration logic (replace with your actual registration logic)
    alert('Registration successful!');

    // Redirect to the login form after successful registration
    window.location.href = 'login.html';
}



function sendMessage() {
    const userInput = document.getElementById("userInput").value;
    if (userInput.trim() !== "") {
        appendUserMessage(userInput);
        processUserInput(userInput);
        document.getElementById("userInput").value = "";
    }
}

function toggleChat() {
    const chatbox = document.getElementById('chatbox');
    chatbox.style.display = (chatbox.style.display === 'none' || chatbox.style.display === '') ? 'block' : 'none';
}

function appendBotMessage(message) {
    const chatbox = document.getElementById("chatbox");
    const messageElement = document.createElement("div");
    messageElement.classList.add("chat-message");
    messageElement.innerHTML = `<p>${message}</p>`;
    chatbox.appendChild(messageElement);
    chatbox.scrollTop = chatbox.scrollHeight;

        // Convert URLs to clickable links
        const messageWithLinks = message.replace(/\bhttps?:\/\/\S+/gi, function (url) {
            return `<a href="${url}" target="_blank">${url}</a>`;
        });
    
        messageElement.innerHTML = `<p>${messageWithLinks}</p>`;
        chatbox.appendChild(messageElement);
        chatbox.scrollTop = chatbox.scrollHeight;
}

function appendUserMessage(message) {
    const chatbox = document.getElementById("chatbox");
    const messageElement = document.createElement("div");
    messageElement.classList.add("chat-message", "user-message");
    messageElement.innerHTML = `<p>${message}</p>`;
    chatbox.appendChild(messageElement);
    chatbox.scrollTop = chatbox.scrollHeight;

    // Optionally, clear the input field after processing
    document.getElementById("userInput").value = "";
}


function processUserInput(userInput) {
    const lowerCaseInput = userInput.toLowerCase();

    if (lowerCaseInput.includes("hello") || lowerCaseInput.includes("hi")) {
        appendBotMessage("What would you like to know about? Admission requirements, scholarships, or study plans?");
    } else if (lowerCaseInput.includes("admission requirements") || lowerCaseInput.includes("scholarships")) {
        appendBotMessage("Sure! What university are you interested in?");
    } else if (lowerCaseInput.includes("study plan")) {
        appendBotMessage("Great! Please type the subject for which you'd like to know the study plan.");
    } else if (lowerCaseInput.includes("utm")) {
        displayUniversityInfo("Universiti Teknologi Malaysia(UTM)");
    } else if (lowerCaseInput.includes("uthm")) {
        displayUniversityInfo("University Tun Hussein Onn University of Malaysia(UTHM)");
    } else if (lowerCaseInput.includes("usm")) {
        displayUniversityInfo("Universiti Sains Malaysia(USM)");
    } else if (lowerCaseInput.includes("ukm")) {
        displayUniversityInfo("Universiti Kebangsaan Malaysia(UKM)");
    } else if (lowerCaseInput.includes("um")) {
        displayUniversityInfo("University Malaya(UM)");
    } else if (lowerCaseInput.includes("upm")) {
        displayUniversityInfo("Universiti Putra Malaysia(UPM)");
    } else if (lowerCaseInput.includes("uitm")) {
        displayUniversityInfo("Universiti Teknologi MARA (UITM)");
    } else if (lowerCaseInput.includes("uiam")) {
        displayUniversityInfo("Universiti Islam Antarabangsa Malaysia (UIAM)");
    } else if (lowerCaseInput.includes("uum")) {
        displayUniversityInfo("Universiti Utara Malaysia (UUM)");
    } else if (lowerCaseInput.includes("unimas")) {
        displayUniversityInfo("Universiti Malaysia Sarawak (UNIMAS)");
    } else if (lowerCaseInput.includes("ums")) {
        displayUniversityInfo("Universiti Malaysia Sabah (UMS)");
    } else if (lowerCaseInput.includes("upsi")) {
        displayUniversityInfo("Universiti Pendidikan Sultan Idris (UPSI)");
    } else if (lowerCaseInput.includes("usim")) {
        displayUniversityInfo("Universiti Sains Islam Malaysia (USIM)");
    } else if (lowerCaseInput.includes("umt")) {
        displayUniversityInfo("Universiti Malaysia Terengganu (UMT)");
    } else if (lowerCaseInput.includes("utem")) {
        displayUniversityInfo("Universiti Teknikal Malaysia Melaka (UTEM)");
    } else if (lowerCaseInput.includes("ump")) {
        displayUniversityInfo("Universiti Malaysia Pahang (UMP)");
    } else if (lowerCaseInput.includes("unimap")) {
        displayUniversityInfo("Universiti Malaysia Perlis (UNIMAP)");
    } else if (lowerCaseInput.includes("unisza")) {
        displayUniversityInfo("Sultan Zainal Abidin (UNISZA)");
    } else if (lowerCaseInput.includes("umk")) {
        displayUniversityInfo("Universiti Malaysia Kelantan (UMK)");
    } else if (lowerCaseInput.includes("upnm")) {
        displayUniversityInfo("Universiti Pertahanan Nasional Malaysia (UPNM)");   
    } else if (lowerCaseInput.includes("art")) {
        displayCourseInfo("Art and Design");   
    }  else if (lowerCaseInput.includes("it")) {
        displayCourseInfo("Information and Technology");   
    } else if (lowerCaseInput.includes("travel")) {
        displayCourseInfo("Travel and hospilatliy");   
    } else if (lowerCaseInput.includes("geography")) {
        displayCourseInfo("Geography");   
    } else if (lowerCaseInput.includes("anthropology")) {
        displayCourseInfo("Anthropology");   
    } else if (lowerCaseInput.includes("social sciences")) {
        displayCourseInfo("Social Sciences");   
    } else if (lowerCaseInput.includes("environmental management")) {
        displayCourseInfo("Environmental Management");   
    } else if (lowerCaseInput.includes("math")) {
        displayCourseInfo("Mathematics");   
    } else if (lowerCaseInput.includes("business studies")) {
        displayCourseInfo("Business Studies");   
    } else if (lowerCaseInput.includes("engineering")) {
        displayCourseInfo("Engineering");   
    } else if (lowerCaseInput.includes("humanities")) {
        displayCourseInfo("Humanities");   
    } else if (lowerCaseInput.includes("chemistry")) {
        displayCourseInfo("Chemistry");   
    } else if (lowerCaseInput.includes("biology")) {
        displayCourseInfo("Biology");   
    } else if (lowerCaseInput.includes("finance")) {
        displayCourseInfo("Finance");   
    } else if (lowerCaseInput.includes("physics")) {
        displayCourseInfo("Physics");   
    } else if (lowerCaseInput.includes("architecture")) {
        displayCourseInfo("Architecture");   
    } else if (lowerCaseInput.includes("medicine")) {
        displayCourseInfo("Medicine");   
    } else if (lowerCaseInput.includes("education training")) {
        displayCourseInfo("Education training");   
    } else if (lowerCaseInput.includes("law")) {
        displayCourseInfo("Law");   
    } else if (lowerCaseInput.includes("international relations")) {
        displayCourseInfo("International Relations");   
    } else if (lowerCaseInput.includes("business management")) {
        displayCourseInfo("Business Management");   
    } else if (lowerCaseInput.includes("materials science")) {
        displayCourseInfo("Materials Science");   
    } 
    else {
        appendBotMessage("I'm sorry, the university or study plan is not found.");
    }
}

function simulateThinking(callback) {
    // Simulate a delay before executing the callback
    const thinkingDelay = 5500; // You can adjust this value (in milliseconds) to control the delay

    const thinkingMessage = document.createElement("div");
    thinkingMessage.classList.add("chat-message");
    thinkingMessage.innerHTML = "<p>Thinking...</p>";
    
    const chatbox = document.getElementById("#chatbox");
    chatbox.appendChild(thinkingMessage);
    chatbox.scrollTop = chatbox.scrollHeight;

    setTimeout(() => {
        thinkingMessage.style.display = "none"; // Hide the "Thinking..." message
        callback(); // Execute the actual callback after the delay
    }, thinkingDelay);
}


function displayUniversityInfo(universityName) {
    let admissionRequirements, scholarships;

    // Customize admission requirements and scholarships based on the selected university
    switch (universityName) {
        case "Universiti Teknologi Malaysia(UTM)":
            admissionRequirements = "Admission Requirements for UTM:\n- STPM: Minimum Gred C (NGMP 2.00) Pengajian Am and other two subjects.\n Band 1 in MUET Test.\n- Matrikulasi: Pass Matrikulasi KPM/Asasi Sains UM / Asasi UiTM dengan mendapat with at least PNGK 2.00\n Band 1 in MUET Test";
            scholarships = "Scholarships Available for University UTM:\n https://admission.utm.my/scholarship-and-financial-aid/";
            break;

        case "University Tun Hussein Onn University of Malaysia(UTHM)":
            admissionRequirements = "Admission Requirements for UTHM:\n- STPM: Pass the STPM exam with at least grade C (NGMP 2.00) in three subjects including General Studies/Pengajian Am.\n- SPM: Minimum 6As";
            scholarships = "Scholarships Available for University UTHM:\n https://cgs.uthm.edu.my/index.php?view=article&id=157&catid=2";
            break;

        case "University Malaya(UM)":
            admissionRequirements = "General Info: Attain a passing grade (Grade C) in the Bahasa Melayu subject in the Sijil Pelajaran Malaysia (SPM), or alternatively, obtain a credit (Grade C) in Bahasa Melayu/Bahasa Malaysia July papers and successfully pass History (for SPM 2013 and later).\n Attain a minimum Band score in the Malaysian University English Test (MUET), meeting the specific requirement set by the chosen program. \n For more information, visit https://study.um.edu.my/entry-requirements";
            scholarships = "https://aasd.um.edu.my/others-scholarships-pg";
            break;
        
        case "Universiti Sains Malaysia(USM)":
              admissionRequirements = "Academic Requirements: Completed 12 years of Primary and High School Education and obtained High School Certificate \n For more informaiton, visit: \n https://admission.usm.my/undergraduate/undergraduate-international-v2?view=article&id=1180&catid=27";
              scholarships = "https://imcc.usm.my/index.php/mobility/scholarships";
                break;
        
        case "Universiti Kebangsaan Malaysia(UKM)":
                admissionRequirements = "General Info: Successfully complete 12 years of primary and high school education, obtain a high school diploma or equivalent (e.g., Higher Secondary Certificate, Senior Secondary School Graduation Certificate, Tawjihiyah, Ijazah Sekolah Menengah Atas), satisfy the minimum English proficiency criteria specified by the faculty, undergo a UKM interview if deemed necessary, and fulfill any additional requirements specific to the faculty.";
                scholarships = "https://www.ukm.my/pusatsiswazah/news/malaysia-international-scholarship-mis/";
                break;  
                
        case "Universiti Putra Malaysia(UPM)":
                admissionRequirements = "https://fsktm.upm.edu.my/upload/dokumen/BGAKA1_Specific_Program_Requirements_(Bachelor).pdf";
                scholarships = "https://sgs.upm.edu.my/financial_assistance_scholarships-1893";
                break;  
        
        case "Universiti Teknologi MARA (UITM)":
                admissionRequirements = "https://www.uitm.edu.my/index.php/en/admission1"; 
                scholarships = "https://endowment.uitm.edu.my/v1/index.php/services/scholarships";
                break; 
        
        case "Universiti Islam Antarabangsa Malaysia (UIAM)":
                admissionRequirements = "https://www.iium.edu.my/media/79320/website_UG_REQ.pdf";
                scholarships = "https://division.iium.edu.my/finance/scholarship/";
                break; 
        
        case "	Universiti Utara Malaysia (UUM)":
                admissionRequirements = "Possession of a high school qualification or an equivalent certificate from a government school, or a certificate acknowledged by the University's Senate, along with satisfactory English language test scores, and successful completion of credit courses in both mathematics and English language. \n for more info, visit: https://collegedunia.com/malaysia/university/734-universiti-utara-malaysia-changlun/admission";
                scholarships = "https://www.uum.edu.my/admissions/fees/financial-aid";
                break; 
        
        case "	Universiti Malaysia Sarawak (UNIMAS)":
                admissionRequirements = "Attainment of a satisfactory result in the Cambridge General Certificate of Education Advanced Level (GCE A Level) with a minimum of 240 points according to the UCAS point system, or successful completion of a relevant diploma or foundation program, or obtaining a favorable grade in the Higher School Certificate (HSC) or its equivalent with at least a C grade or 0% in three subjects, whichever is higher; prospective applicants are encouraged to consult the list of entry qualifications for international students provided by the Malaysian Qualification Agency. \n For more info, visit: https://www.global.unimas.my/admission/undergraduate#:~:text=ACADEMIC%20REQUIREMENT,-Applicant%20should%20possess&text=A%20pass%20in%20diploma%20or,)%20subjects%2C%20whichever%20is%20higher.";
                scholarships = "https://www.global.unimas.my/student-management/scholarship";
                break;    
        
        case "	Universiti Malaysia Sabah (UMS)":
                admissionRequirements = "Achievement of a minimum grade C in three subjects in STPM, GCE 'A' Level, Higher School Certificate (HSC), or their equivalent; attainment of at least a B grade in the Cambridge International Examination Test is also acceptable, with exceptions made for individuals from English-speaking countries. \n For more information, visit: https://www.ums.edu.my/v5/en/admission-international/36-info#:~:text=A%20pass%20in%20the%20STPM,for%20English%20speaking%20country%20%3B%2Dor";
                scholarships = "https://www.ums.edu.my/v5/en/scholarship-financial-aids";
                break;    
        
        case "	Universiti Pendidikan Sultan Idris (UPSI)":
                admissionRequirements = "https://fbk.upsi.edu.my/ms/syarat-kemasukan/";
                scholarships = "https://ips.upsi.edu.my/bantuan-kewangan/?lang=ms";
                break;    
        
        case "	Universiti Sains Islam Malaysia (USIM)":
                admissionRequirements = "https://admission.usim.edu.my/wp-content/uploads/2021/12/Brochure-Undergraduate-International-Programmes.pdf";
                scholarships = "https://www.usim.edu.my/ms/kampus/sokongan-pelajar/biasiswa-bantuan-kewangan/";
                break;   
        
        case "	Universiti Malaysia Terengganu (UMT)":
                admissionRequirements = "http://www.umt.edu.my/doc/brochure_undergrad_fees.pdf";
                scholarships = "https://akademik.umt.edu.my/bantuan-kewangan/";
                break; 
        
        case "	Universiti Teknikal Malaysia Melaka (UTEM)":
                admissionRequirements = "https://www.utem.edu.my/en/undergraduate.html";
                scholarships = "https://sps.utem.edu.my/financial-assist/scholarship.html";
                break;

        case "	Universiti Malaysia Pahang (UMP)":
                admissionRequirements = "https://admission.ump.edu.my/undergraduate";
                scholarships = "https://ips.ump.edu.my/index.php/en/scholarship/ump-scholarship-financil-aid";
                break; 
        
        case "	Universiti Malaysia Perlis (UNIMAP)":
                admissionRequirements = "https://www.unimap.edu.my/index.php/en/admission-requirements";
                scholarships = "https://cgs.unimap.edu.my/index.php/en/financial";
                break; 
        
        case "	Sultan Zainal Abidin (UNISZA)":
                admissionRequirements = "https://www.unisza.edu.my/ms/kemasukan/";
                scholarships = "https://www.unisza.edu.my/admission/sponsorships-financial-aids/";
                break; 
        
        case "	Universiti Malaysia Kelantan (UMK)":
                admissionRequirements = "https://www.umk.edu.my/en/admission-requirements.html";
                scholarships = "https://www.umk.edu.my/ms/kemasukan/bantuan-kewangan.html";
                break;       

         case "	Universiti Pertahanan Nasional Malaysia (UPNM)":
                admissionRequirements = "https://cgs.upnm.edu.my/index.php/ms/pelajar/bakal-pelajar/syarat-kemasukan";
                scholarships = "https://www.upnm.edu.my/index.php/kemasukan/pembiayaan-tajaan";
                break;   
        
        default:
            admissionRequirements = "Admission Requirements: Information not available";
            scholarships = "Scholarships Available: Information not available";
            break;
    }

    appendBotMessage(`Here are the admission requirements for ${universityName}:\n${admissionRequirements}.\n<br><br>And here are the available scholarships for ${universityName}:\n${scholarships}`);
}

function displayCourseInfo(courseName) {
    let courseDetails;

    // Customize course details based on the selected course
    switch (courseName.toLowerCase()) {
        case "art and design":
            courseDetails = getCourseInfo("Art and Design", getYearInfo("Year 1", "Art Fundamentals", "Design Principles", "Color Theory", "Drawing Basics", "Digital Imaging"), getYearInfo("Year 2", "Advanced Drawing", "Digital Art", "Art History", "Typography", "Interactive Design"), getYearInfo("Year 3", "Specialized Design", "Portfolio Development", "Internship", "Advanced Color Theory", "3D Modeling"), getYearInfo("Year 4", "Thesis Project", "Professional Practice", "Graduation Showcase", "Advanced Digital Painting", "Creative Direction"));
            break;

        case "information and technology":
            courseDetails = getCourseInfo("Information and Technology", getYearInfo("Year 1", "Introduction to Programming", "Computer Systems", "Mathematics for IT", "Data Structures", "Web Development"), getYearInfo("Year 2", "Algorithms", "Database Management", "Software Engineering", "Network Security", "Human-Computer Interaction"), getYearInfo("Year 3", "Artificial Intelligence", "Cloud Computing", "Internship", "Mobile App Development", "Advanced Web Technologies"), getYearInfo("Year 4", "Big Data Analytics", "Cybersecurity", "Project Management", "Machine Learning", "Graduation Project"));
            break;

        case "business management":
            courseDetails = getCourseInfo("Business Management", getYearInfo("Year 1", "Introduction to Business", "Principles of Marketing", "Financial Accounting", "Business Communication", "Microeconomics"), getYearInfo("Year 2", "Organizational Behavior", "Macroeconomics", "Operations Management", "Business Ethics", "Marketing Research"), getYearInfo("Year 3", "Strategic Management", "Human Resource Management", "Internship", "Entrepreneurship", "Business Law"), getYearInfo("Year 4", "International Business", "Supply Chain Management", "Project Management", "Corporate Finance", "Graduation Thesis"));
            break;
    
        case "travel and hospitality":
            courseDetails = getCourseInfo("Travel and Hospitality", getYearInfo("Year 1", "Introduction to Hospitality Industry", "Tourism Management", "Customer Service", "Principles of Travel", "Event Planning"), getYearInfo("Year 2", "Hotel Management", "Culinary Arts", "Tourism Marketing", "Travel Technology", "Hospitality Ethics"), getYearInfo("Year 3", "Sustainable Tourism", "Internship", "Advanced Event Management", "Food and Beverage Management", "Global Tourism Trends"), getYearInfo("Year 4", "Hospitality Entrepreneurship", "Strategic Management in Tourism", "Crisis Management in Hospitality", "Destination Management", "Graduation Project"));
            break;
    
        case "geography":
            courseDetails = getCourseInfo("Geography", getYearInfo("Year 1", "Physical Geography", "Human Geography", "Cartography", "Geospatial Analysis", "Environmental Science"), getYearInfo("Year 2", "Cultural Geography", "Urban Geography", "Remote Sensing", "Geographic Information Systems (GIS)", "Field Methods in Geography"), getYearInfo("Year 3", "Economic Geography", "Political Geography", "Internship", "Climate Change and Sustainability", "Geography of Globalization"), getYearInfo("Year 4", "Geopolitics", "Research Methods in Geography", "Advanced GIS Applications", "Natural Hazards", "Graduation Thesis"));
            break;
    
        case "anthropology":
            courseDetails = getCourseInfo("Anthropology", getYearInfo("Year 1", "Introduction to Anthropology", "Cultural Anthropology", "Biological Anthropology", "Archaeology", "Anthropological Methods"), getYearInfo("Year 2", "Linguistic Anthropology", "Medical Anthropology", "Anthropology of Religion", "Urban Anthropology", "Applied Anthropology"), getYearInfo("Year 3", "Internship", "Development Anthropology", "Anthropology of Gender", "Political Anthropology", "Contemporary Issues in Anthropology"), getYearInfo("Year 4", "Anthropological Ethics", "Globalization and Culture", "Visual Anthropology", "Anthropological Theory", "Graduation Project"));
            break;
    
        case "social sciences":
            courseDetails = getCourseInfo("Social Sciences", getYearInfo("Year 1", "Introduction to Social Sciences", "Sociology", "Psychology", "Research Methods in Social Sciences", "History of Social Thought"), getYearInfo("Year 2", "Political Science", "Economics", "Social Work", "Criminology", "Social Policy"), getYearInfo("Year 3", "Internship", "Gender Studies", "Race and Ethnicity", "Environmental Studies", "Social Sciences and Technology"), getYearInfo("Year 4", "Philosophy of Social Sciences", "Global Issues in Social Sciences", "Social Justice", "Social Sciences and Public Health", "Graduation Thesis"));
            break;
        
        case "environmental management":
            courseDetails = getCourseInfo("Environmental Management", getYearInfo("Year 1", "Introduction to Environmental Science", "Ecology", "Environmental Policy", "Environmental Impact Assessment", "Geography of Sustainability"), getYearInfo("Year 2", "Natural Resource Management", "Environmental Ethics", "Climate Change", "Sustainable Development", "Environmental Law"), getYearInfo("Year 3", "Internship", "Environmental Economics", "Biodiversity Conservation", "Waste Management", "Renewable Energy"), getYearInfo("Year 4", "Environmental Monitoring", "Environmental Education", "Community Engagement", "Environmental Management Strategies", "Graduation Project"));
            break;

        case "mathematics":
            courseDetails = getCourseInfo("Mathematics", getYearInfo("Year 1", "Calculus", "Algebra", "Statistics", "Mathematical Proof", "Number Theory"), getYearInfo("Year 2", "Differential Equations", "Linear Algebra", "Probability", "Real Analysis", "Abstract Algebra"), getYearInfo("Year 3", "Internship", "Mathematical Modeling", "Numerical Analysis", "Complex Analysis", "Topology"), getYearInfo("Year 4", "Advanced Topics in Mathematics", "Applied Mathematics", "Mathematics Education", "Research in Mathematics", "Graduation Thesis"));
            break;

        case "business studies":
            courseDetails = getCourseInfo("Business Studies", getYearInfo("Year 1", "Introduction to Business", "Principles of Marketing", "Financial Accounting", "Business Communication", "Microeconomics"), getYearInfo("Year 2", "Organizational Behavior", "Macroeconomics", "Operations Management", "Business Ethics", "Marketing Research"), getYearInfo("Year 3", "Internship", "Strategic Management", "Human Resource Management", "Entrepreneurship", "Business Law"), getYearInfo("Year 4", "International Business", "Supply Chain Management", "Project Management", "Corporate Finance", "Graduation Thesis"));
            break;

        case "engineering":
            courseDetails = getCourseInfo("Engineering", getYearInfo("Year 1", "Introduction to Engineering", "Calculus", "Physics", "Engineering Graphics", "Computer Programming"), getYearInfo("Year 2", "Circuit Analysis", "Mechanics", "Materials Science", "Thermodynamics", "Differential Equations"), getYearInfo("Year 3", "Internship", "Fluid Mechanics", "Electromagnetics", "Control Systems", "Structural Analysis"), getYearInfo("Year 4", "Power Systems", "Heat Transfer", "Engineering Design", "Renewable Energy Systems", "Graduation Project"));
            break;
        
        case "humanities":
            courseDetails = getCourseInfo("Humanities", getYearInfo("Year 1", "Introduction to Humanities", "World History", "Literature", "Philosophy", "Cultural Studies"), getYearInfo("Year 2", "Ethics", "Art and Civilization", "Social Sciences", "Comparative Religion", "Linguistics"), getYearInfo("Year 3", "Internship", "Gender Studies", "Global Issues", "Critical Thinking", "Visual Arts"), getYearInfo("Year 4", "Research Methods", "Humanities in the Digital Age", "Human Rights Studies", "Capstone Project", "Graduation Thesis"));
            break;
    
        case "chemistry":
            courseDetails = getCourseInfo("Chemistry", getYearInfo("Year 1", "General Chemistry", "Organic Chemistry", "Mathematics for Chemists", "Analytical Chemistry", "Physical Chemistry"), getYearInfo("Year 2", "Inorganic Chemistry", "Biochemistry", "Spectroscopy", "Environmental Chemistry", "Chemical Kinetics"), getYearInfo("Year 3", "Internship", "Medicinal Chemistry", "Polymer Chemistry", "Nanotechnology", "Computational Chemistry"), getYearInfo("Year 4", "Advanced Topics in Chemistry", "Chemical Engineering", "Research in Chemistry", "Laboratory Techniques", "Graduation Thesis"));
            break;
    
        case "biology":
            courseDetails = getCourseInfo("Biology", getYearInfo("Year 1", "Cell Biology", "Genetics", "Zoology", "Botany", "Microbiology"), getYearInfo("Year 2", "Evolutionary Biology", "Ecology", "Human Anatomy and Physiology", "Bioinformatics", "Biostatistics"), getYearInfo("Year 3", "Internship", "Immunology", "Neurobiology", "Environmental Biology", "Molecular Biology"), getYearInfo("Year 4", "Advanced Topics in Biology", "Biotechnology", "Research in Biology", "Field Biology", "Graduation Thesis"));
            break;
    
        case "finance":
            courseDetails = getCourseInfo("Finance", getYearInfo("Year 1", "Introduction to Finance", "Financial Accounting", "Microeconomics", "Business Statistics", "Financial Markets"), getYearInfo("Year 2", "Managerial Finance", "Investments", "Corporate Finance", "Financial Management", "Derivatives"), getYearInfo("Year 3", "Internship", "Risk Management", "Financial Modeling", "International Finance", "Behavioral Finance"), getYearInfo("Year 4", "Financial Planning", "Mergers and Acquisitions", "Portfolio Management", "Research in Finance", "Graduation Thesis"));
            break;
        
        case "physics":
            courseDetails = getCourseInfo("Physics", getYearInfo("Year 1", "Classical Mechanics", "Electromagnetism", "Thermodynamics", "Mathematical Methods for Physics", "Laboratory Work"), getYearInfo("Year 2", "Quantum Mechanics", "Statistical Mechanics", "Optics", "Electricity and Magnetism", "Computational Physics"), getYearInfo("Year 3", "Internship", "Advanced Topics in Physics", "Nuclear Physics", "Solid State Physics", "Astrophysics"), getYearInfo("Year 4", "Advanced Quantum Mechanics", "Particle Physics", "Research in Physics", "Experimental Techniques", "Graduation Thesis"));
            break;
    
        case "architecture":
            courseDetails = getCourseInfo("Architecture", getYearInfo("Year 1", "Architectural Design", "Architectural History", "Building Materials and Construction", "Architectural Graphics", "Structures"), getYearInfo("Year 2", "Architectural Technology", "Urban Design", "Environmental Systems", "Architectural Theory", "Digital Design"), getYearInfo("Year 3", "Internship", "Sustainable Architecture", "Advanced Architectural Design", "Construction Management", "Architectural Electives"), getYearInfo("Year 4", "Professional Practice", "Research in Architecture", "Thesis Preparation", "Thesis Studio", "Graduation Thesis"));
            break;
    
        case "medicine":
            courseDetails = getCourseInfo("Medicine", getYearInfo("Year 1", "Human Anatomy", "Biochemistry", "Physiology", "Medical Genetics", "Introduction to Medicine"), getYearInfo("Year 2", "Pathology", "Pharmacology", "Microbiology", "Immunology", "Clinical Skills"), getYearInfo("Year 3", "Internship", "Internal Medicine", "Surgery", "Pediatrics", "Obstetrics and Gynecology"), getYearInfo("Year 4", "Psychiatry", "Emergency Medicine", "Research in Medicine", "Electives", "Residency Preparation"));
            break;
    
        case "education and training":
            courseDetails = getCourseInfo("Education and Training", getYearInfo("Year 1", "Introduction to Education", "Child Development", "Educational Psychology", "Curriculum Design", "Teaching Methods"), getYearInfo("Year 2", "Assessment and Evaluation", "Inclusive Education", "Educational Technology", "Classroom Management", "Internship"), getYearInfo("Year 3", "Teaching Special Populations", "Educational Leadership", "Research in Education", "Counseling in Schools", "Education Electives"), getYearInfo("Year 4", "Capstone Project", "Professional Development", "Advanced Topics in Education", "Graduation Thesis", "Teacher Certification Exam"));
            break;
    
        case "law":
            courseDetails = getCourseInfo("Law", getYearInfo("Year 1", "Introduction to Legal Studies", "Contracts", "Torts", "Criminal Law", "Legal Research and Writing"), getYearInfo("Year 2", "Constitutional Law", "Property Law", "Civil Procedure", "Criminal Procedure", "Legal Ethics"), getYearInfo("Year 3", "Internship", "Family Law", "Business Law", "Environmental Law", "Advanced Legal Writing"), getYearInfo("Year 4", "International Law", "Human Rights Law", "Legal Clinic", "Moot Court", "Graduation Thesis"));
            break;
    
        case "international relations":
            courseDetails = getCourseInfo("International Relations", getYearInfo("Year 1", "Introduction to International Relations", "Political Science", "World History", "Global Economics", "Research Methods"), getYearInfo("Year 2", "International Law", "Diplomacy", "Comparative Politics", "Globalization", "Internship"), getYearInfo("Year 3", "Security Studies", "International Organizations", "Foreign Policy Analysis", "Conflict Resolution", "Regional Studies"), getYearInfo("Year 4", "Capstone Project", "International Business", "Advanced Topics in International Relations", "Graduation Thesis", "Global Affairs Seminar"));
            break;
    
        case "materials science":
            courseDetails = getCourseInfo("Materials Science", getYearInfo("Year 1", "Introduction to Materials", "Chemistry for Materials Science", "Physics of Materials", "Mathematics for Materials Science", "Materials Characterization"), getYearInfo("Year 2", "Crystallography", "Thermodynamics of Materials", "Electronic Properties of Materials", "Materials Engineering", "Materials Laboratory"), getYearInfo("Year 3", "Internship", "Nanomaterials", "Biomaterials", "Polymer Science", "Advanced Materials Synthesis"), getYearInfo("Year 4", "Materials Modeling", "Materials for Renewable Energy", "Research in Materials Science", "Graduation Thesis", "Materials Science Seminar"));
            break;
    
 

        default:
            courseDetails = "Course details: Information not available";
            break;
    }

    appendBotMessage(`Here are the details for the course "${courseName}":\n${courseDetails}`);
}

// Helper function to format year-wise course information
function getYearInfo(year, subject1, subject2, subject3) {
    return `${year}:\n- ${subject1}\n- ${subject2}\n- ${subject3}`;
}

// Helper function to format overall course information
function getCourseInfo(courseName, year1, year2, year3, year4) {
    return `${courseName} Curriculum:\n${year1}\n\n${year2}\n\n${year3}\n\n${year4}`;
}