export function test(element) {
  let counter = 0
  const setTest = (count) => {
    counter = count
    element.innerHTML = `Generate numbers`
  }

  const getRandomInt = (max) => {
    return Math.floor(Math.random() * max);
  }

  const generate = () => {
    //let numbers = [1,2,3,4,5,6,7,8,9,10];

    let i = 6,
    j = 0;

    let numbers = [ ...Array(60).keys() ].map( i => i+1),
    ranNums = [];

  while (i--) {
      j = getRandomInt(60);

      if(typeof(numbers[j]) !== undefined || numbers[j] !== null) {
      	//console.log(j);
        ranNums.push(numbers[j]);
        numbers.splice(j,1);
      }

      // if(ranNums.lenght < 6) {
      // 	result();
      // }
  }

    return show(element, ...ranNums)
  }

  element.addEventListener('click', () => {
    setTest(counter + 1);
    generate()
  })
  setTest(0)


}

export function show(element, ...numbers) {
  let list = '';

  numbers.forEach((number) => {
    list += `<li>${ number }</li>`
  });

  const setNumbers = () => {
    results.innerHTML = `${list}`
  }

  setNumbers();
}