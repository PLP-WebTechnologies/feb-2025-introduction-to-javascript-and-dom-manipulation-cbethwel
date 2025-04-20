// Some cool medical facts
const medicalFacts = [
    "Your brain uses about 20% of your oxygen supply.",
    "You blink around 20 times per minute.",
    "The liver is the only organ that can regenerate.",
    "You have around 60,000 miles of blood vessels.",
    "Your stomach gets a new lining every few days."
  ];
  
  // Body system facts for the add/remove button
  const bodySystems = [
    "🫁 Respiratory: The lungs contain over 300 million alveoli!",
    "🫀 Cardiovascular: The heart pumps over 2,000 gallons of blood daily.",
    "🧠 Nervous: Signals in your brain travel at over 250 mph!",
    "🦴 Skeletal: You have 206 bones as an adult.",
    "🧬 Endocrine: Hormones act as messengers in your body."
  ];
  
  // Button to show a random fact
  document.getElementById('change-text-btn').addEventListener('click', () => {
    const text = document.getElementById('dynamic-text');
    const randomFact = medicalFacts[Math.floor(Math.random() * medicalFacts.length)];
    text.textContent = randomFact;
  });
  
  // Button to toggle the style of the text
  document.getElementById('toggle-style-btn').addEventListener('click', () => {
    const text = document.getElementById('dynamic-text');
    
    // just toggling color and font weight
    if (text.style.color === 'blue') {
      text.style.color = 'black';
      text.style.fontWeight = 'normal';
    } else {
      text.style.color = 'blue';
      text.style.fontWeight = 'bold';
    }
  });
  
  // Button to add or remove a system fact
  let elementAdded = false;
  
  document.getElementById('add-remove-btn').addEventListener('click', () => {
    const container = document.getElementById('element-container');
  
    if (!elementAdded) {
      const newDiv = document.createElement('div');
      newDiv.id = "new-element";
      const randomSystem = bodySystems[Math.floor(Math.random() * bodySystems.length)];
      newDiv.textContent = randomSystem;
      newDiv.style.marginTop = "10px";
      container.appendChild(newDiv);
      elementAdded = true;
    } else {
      const toRemove = document.getElementById('new-element');
      if (toRemove) {
        toRemove.remove();
      }
      elementAdded = false;
    }
  });
  