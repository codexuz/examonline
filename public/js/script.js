var users = [
    {username: "luiza", password: "88888"},
    {username: "humoyun", password: "11111"},
    {username: "samoyiddin", password: "12345"},
    {username: "erkaboyeva", password: "sarvinoz"},
    {username: "uldaulettuakbaeva4@gmail.com", password: "Uldawlet4"},
    {username: "mohinur", password: "123344"},
    {username: "admin", password: "adminjon"},
    {username: "yusufov", password: "jonibek"},
    {username: "muyidinov", password: "avazbek"},
    {username: "mirzaxamdamov", password: "jasur"},
    {username: "nuriddin", password: "1001"},
    {username: "mystudent", password: "student1"},
    {username: "javlonbek", password: "abduhalilov"},
    {username: "dilshod", password: "xolmirzayev"},
    {username: "umida", password: "abduvoxidova"},
    {username: "nafosat", password: "olimova"},
    {username: "mohida", password: "sobirjonova"},
    {username: "nurbek", password: "tulaganov"},
    {username: "mahmudjon", password: "maxsudov"},
    {username: "maftunaorolova39@gmail.com", password: "Maftuna39"},
    {username: "abdulladavlatov777@gmail.com", password: "Abdulla02"},
    {username: "bauka_baymuxanov@mail.ru", password: "Baymuxanov01"},
    
    
  ];
var user = document.getElementById("username").value;
var form = document.getElementById("myForm");
form.addEventListener("submit", function(event) {
    // Prevent the default form submission behavior
    event.preventDefault();
    var username = document.getElementById("username").value;
  var password = document.getElementById("password").value;
  var today=new Date();
  var year=today.getFullYear();
  var month=today.getMonth();
  var data=today.getDate()
  var hour=today.getHours();
  var minutes=today.getMinutes();

  var sana=`${hour}:${minutes}, ${data}.${month}.${year}`
  
  var result=`${username} ${sana} da topshirdi`

  for (var i = 0; i < users.length; i++) {
    if (users[i].username === username && users[i].password === password) {
      window.location.href="home.html"

      //send tg username
      const botApiToken = '6286896160:AAEDJPAnegyosnf4KlYbBMTJayMJxXggMvg';
  const chatId = '-1001575547893';
  const url = `https://api.telegram.org/bot${botApiToken}/sendMessage?chat_id=${chatId}&text=${result}`;

  fetch(url)
    .then(response => {
      console.log("Sent Successfully!")
      if (!response.ok) {
        throw new Error('Failed to send message');
      }
    })
    .catch(error => {
      console.error(error);
    });
      return;
    }
    else if(username=="" || password==""){
        document.getElementById("alert").innerHTML="Please, enter credentials"
    }
    }

   
  
    // If the function hasn't returned yet, it means the entered password is invalid
    document.getElementById("alert").innerHTML="Invalid login credentials"; // Display error message
  });
