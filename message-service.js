export default class MessageService {
    getAllMessages() {
        let request = new XMLHttpRequest();
        return new Promise(function (resolve, reject) {
// Setup our listener to process compeleted requests
            request.onload = function () {
                // do something
                if (request.status >= 200 && request.status < 300) {
                    const threads =JSON.parse(request.responseText); // 'This is the returned text.'
                    resolve (threads)
                } else {
                    reject({
                        status: request.status,
                        statusText: request.statusText
                    });

                }

            };
           // request.open("GET", "http://zipcode.rocks:8085/messages");
            // request.send();
            request.open("GET", `http://zipcode.rocks:8085/messages`);

            request.send();


        })

    }
    createNewMessage(message) {
        const request = new XMLHttpRequest();

        return new Promise(function (resolve, reject) {
            // Setup our listener to process compeleted requests
            request.onload = function () {
                // Process the response
                if (request.status >= 200 && request.status < 300) {
                    // If successful
                    resolve(JSON.parse(request.responseText));
                } else {
                    reject({
                        status: request.status,
                        statusText: request.statusText
                    });
                }
            };

            request.open("POST", `http://zipcode.rocks:8085/ids/rashmi/messages`);

            request.send(JSON.stringify(message));
        });
    }
}