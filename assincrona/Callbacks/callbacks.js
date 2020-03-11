//callback function example:
setTimeout(()=>{
    console.log("olá")
}, 5000)



// Callback hell
function doAsyncTask(cb) {
    setImmediate(() => {
      console.log("Async Task Calling Callback");
      cb();
    });
  }
  
  doAsyncTask(() => {
    doAsyncTask(() => {
      doAsyncTask(() => {
        doAsyncTask(() => {
          doAsyncTask(() => {
            doAsyncTask(() => {
              doAsyncTask(() => {
                doAsyncTask(() => {
                  doAsyncTask(() => {
                    doAsyncTask(() => {});
                  });
                });
              });
            });
          });
        });
      });
    });
  });