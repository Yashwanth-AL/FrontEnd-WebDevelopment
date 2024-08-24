function api(){
  return new Promise((resolve, reject) =>{
    setTimeout(() =>{
      console.log("getting informatino about weather");
      resolve("success");
    }, 2000);
  });
}

async function getWeatherData(){
  await api();
  await api();
  await api();
}


function getData(id){
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log("data id is : " + id);
      resolve("success");
    }, 2000);
  });
}

async function getAllData() {
  await getData(1);
  await getData(2);
  await getData(3);
  await getData(4);
}


//the unnecesasry function call can be removed using (IIFE) immediately invoked function expression (function)();
(async function () {
  await getData(1);
  await getData(2);
  await getData(3);
  await getData(4);
})();