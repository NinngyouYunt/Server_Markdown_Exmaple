# Server Building Notes for Personal Blog (using markdown)

There is an example on how to use the node showdown package
The idea is to write .md markdown file and keep them on server. When client requests the website content, parse the markdown to html and send it to client. 


## Some Notes:
- Instead of returning html, should return the JSON and parse it (which is better?)
  - Since the purpose is just insert the file content into DOM, there is no need to use JSON
  - Nothing is going to update from client side so it is safe to do so.x
- There could be an alternative of using a converter on client instead of on server
  - It is a preference
  - Since the size of the file won't be too big, converting or not make no difference on the size of file fetched
  - It won't be a big deal for server to render a few extra file. 
  - Choose whatever is easier to use (is client-side package easier or is server-side easier)
    - [markdown-it](https://github.com/markdown-it/markdown-it)
    - [showdown](https://github.com/showdownjs/showdown)
    - Something things to note
      1. Emoji
      2. Table
      3. Code Highlight
- For extracting excerpt
    - Client vs. Server
      - Depends on the parser
    - Possible node pacakges
      - [Truncatise](https://github.com/AverageMarcus/Truncatise/blob/master/index.js)
      - [exerpt-html](https://github.com/martinheidegger/excerpt-html)
    - Two ways to update and save excerpt
      1. Update upon receiving a request: check if databse has excerpt. If there is, send it back. If not, create one, save it in database, then send it back
      2. Update on server restart: Check if files matches database entries, if not, update the excerpt
    - How to keep excerpt update after editing
      - Databse has entry (excerpt-edited-date) and entry (last-edited-date)
      - If they don't match, then create a new one and repalce the excerpt-edited-date with last-edited-date and update content
      - If they match, then all good
## Some Design Decisions
- Parser
  - Undecided
- Client vs. Server
  - Server side parsing
  - Less stress for user device + easier to manage with db
- Excerpt
  - Update on server restart
  - No point checking on every single request, posts are only changed when server restarts
