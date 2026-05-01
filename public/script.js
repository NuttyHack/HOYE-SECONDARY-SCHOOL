// Hoye Secondary School Admissions Portal JS
document.addEventListener("DOMContentLoaded", () => {

    // ===============================
    // 1. FORM STEPS
    // ===============================
    let currentStep = 0;

    const steps = document.querySelectorAll(".form-section");
    const stepTabs = document.querySelectorAll(".step");

    const prevBtn = document.getElementById("prevBtn");
    const nextBtn = document.getElementById("nextBtn");
    const form = document.getElementById("admissionForm");

    // ===============================
    // 2. SHOW STEP
    // ===============================
    function showStep(stepNumber) {

        steps.forEach((section, index) => {
            section.style.display = index === stepNumber ? "block" : "none";
        });

        // Back button
        prevBtn.style.display = stepNumber === 0 ? "none" : "inline-block";

        // Next button text
        if (stepNumber === steps.length - 1) {
            nextBtn.textContent = "Submit Final Application";
        } else {
            nextBtn.textContent = "Next";
        }

        // Update step nav highlight
        stepTabs.forEach((tab, index) => {
            tab.classList.toggle("active", index === stepNumber);
        });

        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });
    }

    // ===============================
    // 3. VALIDATION
    // ===============================
    function validateStep() {

        let valid = true;

        const currentFields = steps[currentStep].querySelectorAll(
            "input[required], select[required], textarea[required]"
        );

        currentFields.forEach(field => {

            if (field.value.trim() === "") {
                field.style.border = "2px solid red";
                valid = false;
            } else {
                field.style.border = "1px solid #dcdcdc";
            }

        });

        if (!valid) {
            alert("Please complete all required fields.");
        }

        return valid;
    }

   
    // 4. NEXT / BACK

    function nextPrev(direction) {

        // If going forward, validate
        if (direction === 1) {
            if (!validateStep()) return;
        }

        currentStep += direction;

        // Prevent below 0
        if (currentStep < 0) {
            currentStep = 0;
        }

        // Final submit
        if (currentStep >= steps.length) {
            form.submit();
            return;
        }

        showStep(currentStep);
    }

    
    // 5. BUTTON EVENTS

    prevBtn.addEventListener("click", () => {
        nextPrev(-1);
    });

    nextBtn.addEventListener("click", () => {
        nextPrev(1);
    });

    
    // 6. START FORM
    
    showStep(currentStep);

});
function nextPrev(n) {
    // If we are on the last step (Step 5) and click "Submit"
    if (n === 1 && currentStep === steps.length - 1) {
        // This is the critical part to stop the refresh
        generatePDF(); 
        return false; // Tells the browser: "Don't do anything else!"
    }

    currentStep += n;
    showStep(currentStep);
}

function generatePDF() {
    // 1. Get the form and the template
    const formElement = document.getElementById('admissionForm');
    const pdfContent = document.getElementById('pdf-content');
    
    // 2. Change button text so the user knows it's working
    const nextBtn = document.getElementById('nextBtn');
    nextBtn.innerText = "Processing PDF...";
    nextBtn.disabled = true;

    // 3. Build the table for the PDF
    const formData = new FormData(formElement);
    let table = `<table style="width:100%; border-collapse:collapse; font-family:serif;">
                    <thead>
                        <tr style="background:#eee;">
                            <th style="border:1px solid #000; padding:8px;">Field</th>
                            <th style="border:1px solid #000; padding:8px;">Value</th>
                        </tr>
                    </thead>
                    <tbody>`;
    
    formData.forEach((value, key) => {
        if(value.trim() !== "") {
            table += `<tr>
                <td style="border:1px solid #000; padding:8px; font-weight:bold;">${key.replace(/_/g, ' ').toUpperCase()}</td>
                <td style="border:1px solid #000; padding:8px;">${value}</td>
            </tr>`;
        }
    });
    table += `</tbody></table>`;
    
    pdfContent.innerHTML = table;

    // 4. Generate the PDF
    const element = document.getElementById('pdf-template');
    element.style.display = 'block'; // Make it visible for the "snapshot"

    const opt = {
        margin:       10,
        filename:     'Hoye_Admission_Form.pdf',
        image:        { type: 'jpeg', quality: 0.98 },
        html2canvas:  { scale: 2 },
        jsPDF:        { unit: 'mm', format: 'a4', orientation: 'portrait' }
    };

    // 5. THE DOWNLOAD COMMAND
    html2pdf().set(opt).from(element).save().then(() => {
        element.style.display = 'none'; // Hide template again
        nextBtn.innerText = "Submit Application";
        nextBtn.disabled = false;
        alert("Success! Your PDF has been downloaded. Please email it to the school.");
    }).catch(err => {
        console.error("PDF Error:", err);
        nextBtn.disabled = false;
    });
}