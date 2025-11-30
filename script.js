// Hero Typing Animation
const typing = document.getElementById('typing');
const texts = ["AI Enthusiast", "Developer", "Data Science Learner"];
let count = 0, index = 0, currentText = "", letter = "";

(function type() {
    if(count === texts.length) count = 0;
    currentText = texts[count];
    letter = currentText.slice(0, ++index);
    typing.textContent = letter;
    if(letter.length === currentText.length) { count++; index = 0; setTimeout(type, 1000); }
    else { setTimeout(type, 200); }
})();

// Skill Bar Animation
const skillFills = document.querySelectorAll('.skill-fill');
window.addEventListener('scroll', () => {
    const triggerBottom = window.innerHeight / 5 * 4;
    skillFills.forEach(skill => {
        const cardTop = skill.getBoundingClientRect().top;
        if(cardTop < triggerBottom){
            skill.style.width = skill.dataset.fill;
        }
    });
});

// Student Predictor Modal
const modalPredictor = document.getElementById('predictorModal');
const btnPredictor = document.getElementById('studentPredictor');
const closePredictor = document.getElementById('predictorClose');
const predictBtn = document.getElementById('predictBtn');
const studyHoursInput = document.getElementById('studyHours');
const predictedMarksOutput = document.getElementById('predictedMarks');

btnPredictor.addEventListener('click', ()=>{
    modalPredictor.style.display='flex';
    studyHoursInput.value='';
    predictedMarksOutput.textContent='';
});
closePredictor.addEventListener('click',()=>modalPredictor.style.display='none');
window.addEventListener('click', e=>{ if(e.target===modalPredictor) modalPredictor.style.display='none'; });

// Predict Marks
predictBtn.addEventListener('click',()=>{
    const hours=parseFloat(studyHoursInput.value);
    if(isNaN(hours)||hours<0){
        predictedMarksOutput.textContent="Please enter valid hours!";
        return;
    }
    const predicted=(10*hours+30).toFixed(2);
    predictedMarksOutput.textContent=`Predicted Marks: ${predicted}%`;
});
