const team = ['Tyler', 'Porter'];

teamCount = team.length;
const ltOrEqFour = () => `Team size: ${teamCount}`;
const gtFour = () => `Too many people on your team`;
const message = teamCount <= 4 ? ltOrEqFour() : gtFour();

console.log(message);