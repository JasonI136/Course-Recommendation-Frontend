//const axios = require("axios").default;
//

async function login(axios, querystring, data){
    //const querystring = require("querystring");
    const body = querystring.stringify(data);
    try{
        const response = await axios.post(
            "https://og3xyy24hh.execute-api.ap-southeast-2.amazonaws.com/dev/session",
            body
        );
        
        return response.data.session_id; 
       //console.log(session_id);
        // (async () => {
        //     try {
        //         const response = await axios.get(
        //             'https://og3xyy2hh.execute-api.ap-southeast-2.amazonaws.com/dev/student/${session_d}'
        //         );

        //         console.log(response.status);
        //         console.log(response.data);
        //     } catch (err) {
        //         console.log("error:", err);
        //     }
        // })();
    }
 catch (err){
        console.log("user has incorrect username or password.");
        console.log(err);
    }

}