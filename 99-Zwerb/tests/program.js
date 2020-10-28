/* Code to Test */

console.log(`\nThis and Classes:\n`);

function whatIsThis(){
	console.log(this);
}

whatIsThis(); // this == window

whatIsThis.call({name: 'scott'}) // this == obj {name: 'scott'}

let q = ' texty '.split('<')[0];
let r = ' textz <span> teamsy boy </span>'.split('<')[0];

console.log(`q: ${q} r: ${r}`)

const pizza = {
	toppings: ['Cheese', 'Ham'],
	getToppings: function(){
	  return "Toppings: - " + this.toppings;
	  console.dir(this);
	}
  }
  
  
  console.log(pizza.getToppings())