# Node.js Server Hang: Busy-Wait Loop

This repository demonstrates a common Node.js error where a server hangs due to a busy-wait loop in the request handler. The loop consumes excessive CPU resources and results in an unresponsive server.

The `bug.js` file shows the problematic code.  The `bugSolution.js` provides a corrected version using `setTimeout` for proper asynchronous operation.

## How to reproduce:

1. Clone this repository.
2. Navigate to the project directory.
3. Run `node bug.js`.
4. Observe the high CPU usage.
5. Stop the server using Ctrl+C.
6. Run `node bugSolution.js` to see the corrected behavior.

## Lesson Learned:

Avoid busy-wait loops in Node.js request handlers. They block the event loop and prevent other operations from executing, leading to unresponsive and potentially crashed servers. Use asynchronous techniques like `setTimeout`, `setInterval`, or Promises for handling delays.