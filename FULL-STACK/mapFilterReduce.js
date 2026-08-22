//filter reduce map
//q1-Convert names to uppercase
const names = ["alice", "bob", "charlie"] ;
const res1 = names.map(obj=>obj.toUpperCase());

//q2-Get names of people older than 18
const users = [
    { name: "john", age: 25 },
    { name: "jane", age: 17 },
    { name: "alex", age: 32 },
    { name: "mia", age: 15 }
];
const older = users.filter(p => p.age > 18);
const res2 = older.map(obj=>obj.name);
console.log(res2);

//q3- calculate total price of products
const cart = [
  { name: "Laptop", price: 1200 },
  { name: "Mouse", price: 25 },
  { name: "Keyboard", price: 80 }];
  const totalprice = cart.reduce((sum, i)=>sum+i.price,0);
console.log(totalprice);

//q4-full names 
 const people = [
    {first :"john", last : "doe"},
    {first:"Anna", last :"smith"}
 ];
 const concat = people.map(obj=>obj.first + " " + obj.last);
 console.log(concat);

//q5-expensive products
 const products = [
    {name :"iphone14", price:1200, instock: true},
    {name :"mac", price:1800, instock: false},
    {name :"airpods", price:1100, instock: true},
    {name :"ipad pro", price:1100, instock: true},
 ];
 const res5 = products.filter(obj =>obj.price>1000 && obj.instock).map(o=>o.name);
 console.log(res5);

//q6-toppers with marks>80
 const students = [
    {name :"riya", score:92},
    {name :"aman", score:78},
    {name :"sneha", score:88},
    {name :"karan", score:65},
    {name :"priya", score:95},
 ];
 const toppers = students.filter(obj=>obj.score>80);
 const res6 = toppers.map(o=>o.name);
 console.log(res6);
 const avg = (toppers.reduce((total, i)=> total+i.score,0))/toppers.length;
 console.log(avg);
 
 //q7- total cost after 20% discount on priced products
const items = [
  { name: "Smartphone", price: 32000 },
  { name: "Charger", price: 1200 },
  { name: "Headphones", price: 4500 },
  { name: "Power Bank", price: 1800 }
];
const priced = items.filter(obj => obj.price>1500);
console.log(priced);
const discount = priced.map(mp => mp.price = 80/100*mp.price);
console.log(discount);
const res = discount.reduce((total, ob)=> total + ob,0);
console.log(res);
 
//q8-brand names + total stock values
const prdcts = [
  { brand: "Samsung", model: "S23", price: 72000, quantity: 5 },
  { brand: "Apple", model: "iPhone 14", price: 89000, quantity: 2 },
  { brand: "OnePlus", model: "Nord 3", price: 32000, quantity: 8 }
]; 
const brandmodel = prdcts.map( obj => obj.brand + " " + obj.model);
const totalstockprice = prdcts.reduce((sum8, it) => sum8+ (it.price * it.quantity),0);
console.log(brandmodel , totalstockprice);

//q-9 employees work in engg and sal> 120000 then find total salary.

const employees = [
  { name: "Vikram", department: "Engineering", salary: 1800000 },
  { name: "Neha", department: "Marketing", salary: 950000 },
  { name: "Arjun", department: "Engineering", salary: 1350000 },
  { name: "Pooja", department: "Engineering", salary: 980000 }
];
const engg = employees.filter(emp => emp.department === "Engineering"  && emp.salary > 1200000).map(emp=> emp.name);
const total_sal = engg.reduce((sum9, et)=> sum9+et.salary,0);
console.log(engg , total_sal);

// q-10 Get titles of completed high-priority tasks and create its string
const tasks = [
  { title: "Database Migration", priority: "high", completed: true },
  { title: "UI Redesign", priority: "medium", completed: true },
  { title: "API Testing", priority: "high", completed: false },
  { title: "Security Audit", priority: "high", completed: true }
];
const taskinstr = tasks
  .filter(t => t.priority === "high" && t.completed)
  .map(t => t.title)
  .join(", ");
console.log(taskinstr);

//q-11 filter products that are in stock, apply 15% discount, then calculate final total
const cart2 = [
  { name: "Monitor", price: 14500, inStock: true },
  { name: "Keyboard", price: 3200, inStock: false },
  { name: "Mouse", price: 1800, inStock: true },
  { name: "Webcam", price: 4200, inStock: true }
];
const totaldis = cart2
  .filter(item => item.inStock)
  .reduce((sum, item) => sum + (item.price * 0.85), 0);
console.log("totalAfterDiscount =", totaldis);

// q-12 Get names (in uppercase) of users who are active and above 21 years old, then count them
const users2 = [
  { name: "rahul", age: 19, active: true },
  { name: "simran", age: 24, active: true },
  { name: "aditya", age: 32, active: false },
  { name: "kavya", age: 22, active: true }
];
const activeadults = users2
  .filter(u => u.active && u.age > 21)
  .map(u => u.name.toUpperCase());
console.log(activeadults, "and count =", activeadults.length);

// q-13 Get names of winning players (score > 150) with their score in format "Name (score)", and calculate total winning score
const players = [
  { name: "Rohit", score: 168 },
  { name: "Virat", score: 142 },
  { name: "Shubman", score: 185 },
  { name: "Ishan", score: 134 }
];
const winners = players.filter(p => p.score > 150);
const formatted= winners.map(p => p.name + " (" + p.score + ")");
const totalscore = winners.reduce((sum, p) => sum + p.score, 0);
console.log(formatted, "and totalWinningScore =", totalscore);




