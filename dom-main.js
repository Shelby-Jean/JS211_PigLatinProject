const pigLatin = () => {
  let word = document.getElementById("original-word").value;
  let input = word.trim().toLowerCase().split('');
  let display = document.getElementById("display-element");
  const vowels = ['a', 'e', 'i', 'o', 'u', 'y'];
  if(vowels.includes(input[0])) {
    let startsWithVowel = input.concat('yay').join().replace(/,/g, '');
    display.innerHTML = startsWithVowel;
  } else {
    for(let i = 0; i < input.length; i++) {
      if(vowels.indexOf(input[i]) !== -1) {
        const beforeVowel = input.splice(0, i);
        let startsWithConsonant = input.concat(beforeVowel).concat('ay').join().replace(/,/g, '');
        display.innerHTML = startsWithConsonant;
      }
    }
  }
} 