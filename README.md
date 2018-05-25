# showdown-example

An example on how to use the node showdown package
The server will read the file, convert the .md file to html code using markdown and send the coverted html back to the website.


## Some Notes:
- Instead of returning html, should return the JSON and parse it (which is better?)
  - Since the purpose is just insert the file content into DOM, there is no need to use JSON
  - Nothing is going to update from client side so it is safe to do so.x
- There could be an alternative of using a converter on client instead of on server
  - It is a preference
  - Since the size of the file won't be too big, converting or not make no difference on the size of file fetched
  - It won't be a big deal for server to render a few extra file. 
  - Choose whatever is easier to use (is client-side package easier or is server-side easier)
