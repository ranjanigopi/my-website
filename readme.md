# Web Server

create web server
request from and response to browser
open web server in browser.


web server - uses http porotocol

## verbs

| Operations | Verbs | description |
|---|---|---|
| Create | POST | sends information to server |
| Read | GET | request information from server |
| Update | PUT | update existing information by sending new data |
| Delete | DELETE | delete information from the server |

## HTTP Status codes

https://en.wikipedia.org/wiki/List_of_HTTP_status_codes


## Two types of website

 - Managed website
   one server handles requests and responds
   runs all the time to process the request

 - Static website
   simple file server, with index.html as entry point
   provides the file for provided path
   there is no active server running

## Current working directory (CWD)

The directory from where the node application was started. All file references are constructed from CWD.
To avoid confusion, use `__dirname` in front of the paths to get the correct reference.
`__dirname` may or may not end with slash `/`. For consistency, use `path.join()`.

