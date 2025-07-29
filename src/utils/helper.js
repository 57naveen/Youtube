 export function generateHumanName() {
  const firstNames = ['Aarav', 'Vihaan', 'Aryan', 'Isha', 'Ananya', 'Riya', 'Kabir', 'Aanya', 'Neha', 'Raj'];
  const lastNames = ['Sharma', 'Patel', 'Verma', 'Singh', 'Mehra', 'Kumar', 'Joshi', 'Kapoor', 'Gupta', 'Reddy'];

  const first = firstNames[Math.floor(Math.random() * firstNames.length)];
  const last = lastNames[Math.floor(Math.random() * lastNames.length)];

  return `${first} ${last}`;
}


export function generateRandomComment() {
  const comments = [
    "That's awesome! 🔥",
    "I totally agree with you.",
    "Wow, this is cool!",
    "Can you explain that again?",
    "Thanks for sharing 😊",
    "This helped me a lot!",
    "Haha that was funny 😂",
    "I’ve never thought of it like that.",
    "Where did you learn this?",
    "Love this community 💙",
    "Keep it coming!",
    "Interesting perspective...",
    "You made my day 😄",
    "I’m learning so much here!",
    "Anyone else here from India?",
    "That’s a game-changer!",
    "I was just thinking about this!",
    "Let’s connect on LinkedIn!",
    "Nice tip 👌",
    "This deserves more views!"
  ];

  const randomIndex = Math.floor(Math.random() * comments.length);
  return comments[randomIndex];
}
