const { errorMonitor } = require("form-data");

class NotesClient{
  loadNotes(successCallback, errorCallback) {
    fetch('http://localhost:3000/notes')
      .then((response) => response.json())
      .then((data) => {
        successCallback(data);
      }).catch(error  =>{
        errorCallback(error)

      })
  }
  
        
        
    async createNote(data){
      try {
        const response = await fetch('http://localhost:3000/notes', {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({content: data}),
        });
        const result = await response.json();
        console.log("Success:", result);
      } catch (error) {
        return error
    }
  }
}


module.exports= NotesClient