function getRandomInt(max) {
  return Math.floor(Math.random() * max);
}

function showNumbers(ranNums) {
	let s = ranNums.length;
	let t = 0;
  let elementLi = '';

  if(!ranNums.includes(undefined)) {
    ranNums.sort(function (a, b) {  return a - b;  });

    while(s--){
      if(ranNums[t] !== undefined) {
        elementLi+= "<li>" + ranNums[t] + "</li>";
      }

      t++;
    }

    document.getElementById('results').innerHTML = elementLi;
  }
}

function result(){
  var nums = [ ...Array(60).keys() ].map( i => i+1),
    ranNums = [],
    i = 6;
    j = 0;

  while (i--) {
      j = getRandomInt(60);

      if(typeof(nums[j]) !== undefined || nums[j] !== null) {
      	//console.log(j);
        ranNums.push(nums[j]);
        nums.splice(j,1);
      }

      if(ranNums.lenght < 6) {
      	result();
      }
  }

  showNumbers(ranNums);
}
