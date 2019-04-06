# TG-Pre-Work

### While we do want our developers to work smarter, not harder, please refrain from plagiarizing.  It is completely fine to reword information you have gleaned from internet sources, however, please be prepared to redo the work should you submit a directly copied/pasted answer.  If you must copy/paste, cite your sources (this citation doesn't need to be fancy - just state directly where you found the information or provide a link).  Additionally, some of the questions below are tricky.  The answers were not necessarily covered in the reading we assigned.  They are not intended to be straightforward because we expect you to do some research to discover the answers to the best of your ability.  If you cannot find an answer, explain what you do know and what you are stuck on.  

## When we hit https://www.techtonic.com/ what happens? Don’t focus too much on architecture (Monolithic, SOA, Microservices, etc.). Try to focus more on how the web functions in general terms/steps.

Our internet browser sends a signal out through our ISP provider for https://www.techtonic.com/, which sends a request to a DNS server, which returns an IP address to the ISP and to us for the location of the Techtonic website. Our web browser goes to the IP address it got to connect to the Techtonic servers. The servers then send back the files that our web browser requested; HTMl, CSS, JS files, along with images, or anything else. These files temporarily live on our computer and are displayed in our browser.

Source:
Udemy course:
https://www.udemy.com/the-complete-web-developer-zero-to-mastery/learn/lecture/8582534#content
The Complete Web Developer in 2019: Zero to Mastery
Section 2: How the Internet Works

## From start to finish, how does data reach you to be rendered in the browser?

Browser sends request.
ISP receives request.
ISP sends request to DNS server.
DNS server sends IP to ISP,
ISP sends IP to browser.
Browser connects to server IP address
Browser sends a request for documents to server.
Server processes request and sends documents to browser.
Browser reads files and displays documents (HTML, CSS, JS)

## What code is rendered in the browser?

Looking this question I got a lot of information about "rendering" and its specifics, but I understand that JavaScript is rendered in the browser, along with HTML and CSS, although HTML and CSS aren't really considered programming languages; this depends on the semantic meaning of the word "code" in the question.

## What is the server-side code’s main function?

Server-side code serves to receive requests from the web browser, process them, and reply with an HTML response.

Source:
https://developer.mozilla.org/en-US/docs/Learn/Server-side/First_steps/Introduction

## What is the client-side code’s main function?

Client side code is visible to the user. It interacts with the HTML and CSS of the page. It dictates the kind of work the server-side code will have to do. They put less stress on the server by allowing code to run on the web browser.

Source:
https://www.upwork.com/hiring/development/how-scripting-languages-work/

## What is runtime?

"Runtime describes software/instructions that are executed while your program is running, especially those instructions that you did not write explicitly, but are necessary for the proper execution of your code.

Low-level languages like C have very small (if any) runtime. More complex languages like Objective-C, which allows for dynamic message passing, have a much more extensive runtime.

You are correct that runtime code is library code, but library code is a more general term, describing the code produced by any library. Runtime code is specifically the code required to implement the features of the language itself."

Source:
https://stackoverflow.com/questions/3900549/what-is-runtime
By: e.James

## How many instances of the client-side assets (HTML, CSS, JS, Images, etc.) are created?

According to this Mozilla page, it is possible to store a copy of the HTML, CSS, and JavaScript files of a webpage at the client browser.

Source:
https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Client-side_web_APIs/Client-side_storage#Offline_asset_storage

## How many instances of the server-side code are available at any given time?

My assumption is that this is limited only by the bandwidth and processing power of the server, as multiple people will have to access the server at any given time simultaneously.

## How many instances of the databases connected to the server application are created?

I had trouble finding this information, but I would assume that it's at least one instance per user per page open.
