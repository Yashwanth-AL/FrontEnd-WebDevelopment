function getdata(id, getnextdata){
  setTimeout(() => {
      console.log("data" + id);
      if(getnextdata){
          getnextdata();
      }
  }, 2000);
}

//callback hell
getdata(1, () => {
  getdata(2, () => {
      getdata(3, () => {
          getdata(4);
      });
  });
});
