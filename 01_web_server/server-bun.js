import {serve} from 'bun'

serve({
    fetch(request) {
        const url = new URL(request.url);
        if(url.pathname === '/') {
            return new Response('Hello I am Vaibhav', {status: 200})
        } else if (url.pathname === '/ice-tea') {
            return new Response ('This request is also processed', {status: 200})
        } else {
            return new Response ('404 Response not found', {status: 404})
        }
    },
    port: 3000
    hostname: 
})